import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  // Zod validation error
  if (err instanceof ZodError) {
    res.status(400).json({
      message: "Validasi gagal.",
      errors: err.flatten().fieldErrors,
    });
    return;
  }

  // Prisma unique constraint
  if (
    typeof err === "object" &&
    err !== null &&
    "code" in err &&
    (err as { code: string }).code === "P2002"
  ) {
    res.status(409).json({ message: "Data sudah ada (duplikasi)." });
    return;
  }

  // Prisma not found
  if (
    typeof err === "object" &&
    err !== null &&
    "code" in err &&
    (err as { code: string }).code === "P2025"
  ) {
    res.status(404).json({ message: "Data tidak ditemukan." });
    return;
  }

  const message =
    err instanceof Error ? err.message : "Terjadi kesalahan pada server.";

  console.error("[ErrorHandler]", err);

  res.status(500).json({ message });
}

export function notFoundHandler(_req: Request, res: Response): void {
  res.status(404).json({ message: "Endpoint tidak ditemukan." });
}