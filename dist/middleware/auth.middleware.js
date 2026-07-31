import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";
// ── Route publik yang tidak butuh token ────────────────────────────────────
const PUBLIC_ROUTES = [
    { method: "POST", path: "/auth/login" },
    { method: "GET", path: "/profile" },
    { method: "GET", path: "/skills" },
    { method: "GET", path: "/projects" },
    { method: "GET", path: "/experience" },
    { method: "GET", path: "/education" },
    { method: "GET", path: "/certificates" },
    { method: "POST", path: "/contact" },
];
export async function authMiddleware(req, res, next) {
    // Cek apakah route ini public
    const isPublic = PUBLIC_ROUTES.some((r) => r.method === req.method && req.path === r.path);
    if (isPublic) {
        next();
        return;
    }
    // Cek token untuk route private
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ message: "Token tidak ditemukan." });
        return;
    }
    const token = authHeader.split(" ")[1];
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const admin = await prisma.admin.findUnique({
            where: { id: payload.id },
        });
        if (!admin || !admin.isActive) {
            res.status(401).json({ message: "Akun tidak aktif atau tidak ditemukan." });
            return;
        }
        req.admin = payload;
        next();
    }
    catch {
        res.status(401).json({ message: "Token tidak valid atau sudah expired." });
    }
}
export function apiKeyMiddleware(req, res, next) {
    const apiKey = req.headers["x-api-key"];
    if (!apiKey || apiKey !== process.env.API_KEY) {
        res.status(401).json({ message: "API key tidak valid." });
        return;
    }
    next();
}
//# sourceMappingURL=auth.middleware.js.map