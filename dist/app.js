import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "node:path";
import { env } from "./config/env.js";
import { createPortfolioRouter } from "./routes/portofolio.routes.js";
import { createUploadRouter } from "./routes/upload.routes.js";
import { errorHandler, notFoundHandler } from "./middleware/error.middleware.js";
import { authMiddleware } from "./middleware/auth.middleware.js";
import { ProfileService } from "./services/profile.service.js";
export function createApp() {
    const app = express();
    // ── Global Middleware ──────────────────────────────────────────────────────
    app.use(cors({
        origin: env.ALLOWED_ORIGINS,
        methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "x-api-key"],
        credentials: true,
    }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    // ── Static Uploads ─────────────────────────────────────────────────────────
    app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
    // ── Health Check ───────────────────────────────────────────────────────────
    app.get("/health", (_req, res) => {
        res.json({
            status: "ok",
            service: "porto-api",
            environment: env.NODE_ENV,
            timestamp: new Date().toISOString(),
        });
    });
    // ── Auth Middleware (sebelum routes) ───────────────────────────────────────
    app.use(env.API_PREFIX, authMiddleware);
    // ── API Routes ─────────────────────────────────────────────────────────────
    app.use(env.API_PREFIX, createPortfolioRouter());
    app.use(env.API_PREFIX, createUploadRouter(new ProfileService()));
    // ── Error Handlers ─────────────────────────────────────────────────────────
    app.use(notFoundHandler);
    app.use(errorHandler);
    return app;
}
//# sourceMappingURL=app.js.map