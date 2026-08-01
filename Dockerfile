# ─── Stage 1: Build ──────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY prisma ./prisma
COPY prisma.config.ts ./
COPY src ./src
COPY tsconfig.json ./

# Dibutuhkan agar prisma.config.ts bisa dimuat saat generate (tanpa DB asli).
ENV DATABASE_URL=postgres://postgres:postgres@localhost:5432/portofolio
ENV SHADOW_DATABASE_URL=postgres://postgres:postgres@localhost:5432/portofolio_shadow

RUN npx prisma generate
RUN npm run build

# ─── Stage 2: Runtime ────────────────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --omit=dev
RUN npm install --no-save --include=dev prisma@7.8.0 tsx@4.22.4

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/src/generated ./src/generated
COPY prisma.config.ts ./

RUN mkdir -p uploads/avatars uploads/certificates

EXPOSE 3000

# db push dipakai untuk menyinkronkan skema saat staging. Ganti dengan
# `prisma migrate deploy` jika sudah memakai migration files.
# Jalankan via tsx karena generated prisma client memakai import tanpa ekstensi.
CMD ["sh", "-c", "npx prisma db push && npx tsx dist/index.js"]
