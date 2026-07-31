import path from "node:path";
import fs from "node:fs";

// Hapus file lokal (/uploads/...) dari disk. URL eksternal diabaikan.
export async function deleteUploadedFile(
  url: string | null | undefined
): Promise<void> {
  if (!url || !url.startsWith("/uploads/")) return;
  const filePath = path.join(process.cwd(), url);
  try {
    await fs.promises.unlink(filePath);
  } catch {
    // File sudah tidak ada — abaikan
  }
}
