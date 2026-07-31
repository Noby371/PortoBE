import "dotenv/config";
export const env = {
    PORT: parseInt(process.env.PORT ?? "3000", 10),
    NODE_ENV: process.env.NODE_ENV ?? "development",
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS?.split(",") ?? ["http://localhost:5173"],
    API_PREFIX: process.env.API_PREFIX ?? "/api/v1",
    DATABASE_URL: process.env.DATABASE_URL,
};
//# sourceMappingURL=env.js.map