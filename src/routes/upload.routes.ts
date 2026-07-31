import { Router } from "express";
import multer from "multer";
import path from "node:path";
import fs from "node:fs";
import { ProfileService } from "../services/profile.service.js";
import { deleteUploadedFile } from "../lib/uploads.js";

const UPLOAD_ROOT = path.join(process.cwd(), "uploads");

function createImageUpload(dirName: string) {
  const dir = path.join(UPLOAD_ROOT, dirName);
  const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
      fs.mkdirSync(dir, { recursive: true });
      cb(null, dir);
    },
    filename: (_req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase() || ".jpg";
      const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
      cb(null, unique);
    },
  });

  return multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (_req, file, cb) => {
      const allowed = ["image/jpeg", "image/png", "image/webp"];
      if (allowed.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error("Hanya gambar JPG, PNG, atau WebP yang diizinkan."));
      }
    },
  });
}

const avatarUpload = createImageUpload("avatars");
const certificateUpload = createImageUpload("certificates");

export function createUploadRouter(profileService: ProfileService): Router {
  const router = Router();

  // POST /api/v1/profile/avatar — upload & ganti foto profil (butuh auth)
  router.post("/profile/avatar", avatarUpload.single("avatar"), async (req, res, next) => {
    try {
      if (!req.file) {
        res.status(400).json({ message: "File gambar wajib diunggah." });
        return;
      }

      const existing = await profileService.get();
      await deleteUploadedFile(existing?.avatarUrl);

      const avatarUrl = `/uploads/avatars/${req.file.filename}`;
      const profile = await profileService.update({ avatarUrl });

      res.status(200).json(profile);
    } catch (err) {
      if (req.file) {
        await deleteUploadedFile(`/uploads/avatars/${req.file.filename}`);
      }
      next(err);
    }
  });

  // POST /api/v1/uploads/certificate — upload gambar sertifikat (butuh auth).
  // Menyimpan file dan mengembalikan URL; penghapusan file lama ditangani
  // saat sertifikat disimpan/diubah di route certificate.
  router.post("/uploads/certificate", certificateUpload.single("image"), async (req, res, next) => {
    try {
      if (!req.file) {
        res.status(400).json({ message: "File gambar wajib diunggah." });
        return;
      }
      const url = `/uploads/certificates/${req.file.filename}`;
      res.status(200).json({ url });
    } catch (err) {
      if (req.file) {
        await deleteUploadedFile(`/uploads/certificates/${req.file.filename}`);
      }
      next(err);
    }
  });

  return router;
}
