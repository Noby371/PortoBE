import "dotenv/config";
import { createApp } from "./app.js";
import { prisma } from "./lib/prisma.js";
import { env } from "./config/env.js";

async function bootstrap() {
  // Pastikan koneksi database berhasil
  await prisma.$connect();
  console.log("✅ Database terhubung.");

  const app = createApp();

  app.listen(env.PORT, () => {
    console.log(`🚀 Porto API berjalan di http://localhost:${env.PORT}`);
    console.log(`📋 Health check : http://localhost:${env.PORT}/health`);
    console.log(`🔗 API prefix   : ${env.API_PREFIX}`);
    console.log(`🌍 Environment  : ${env.NODE_ENV}`);
  });
}

bootstrap().catch((err) => {
  console.error("❌ Gagal menjalankan server:", err);
  process.exit(1);
});