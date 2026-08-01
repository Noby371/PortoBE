import { createExpressEndpoints } from "@ts-rest/express";
import { Router } from "express";
import { portfolioContract } from "../contracts/portofolio.contract.js";
import { AuthService } from "../services/auth.service.js";
import { ProfileService } from "../services/profile.service.js";
import { SkillService } from "../services/skill.service.js";
import { ProjectService } from "../services/project.service.js";
import {
  ExperienceService,
  EducationService,
  CertificateService,
  ContactService,
} from "../services/other.service.js";
import { deleteUploadedFile } from "../lib/uploads.js";

const authService = new AuthService();
const profileService = new ProfileService();
const skillService = new SkillService();
const projectService = new ProjectService();
const experienceService = new ExperienceService();
const educationService = new EducationService();
const certificateService = new CertificateService();
const contactService = new ContactService();

// Helper untuk cek auth dari req
function isAuthenticated(req: Express.Request): boolean {
  return !!req.admin;
}

export function createPortfolioRouter(): Router {
  const router = Router();

  createExpressEndpoints(
    portfolioContract,
    {
      // ── Auth ─────────────────────────────────────────────────────────────
      auth: {
        login: async ({ body }) => {
          const result = await authService.login(body.email, body.password);
          if (!result) {
            return { status: 401 as const, body: { message: "Email atau password salah." } };
          }
          return { status: 200 as const, body: result };
        },

        me: async ({ req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const admin = await authService.me(req.admin!.id);
          if (!admin) {
            return { status: 401 as const, body: { message: "Admin tidak ditemukan." } };
          }
          return { status: 200 as const, body: admin };
        },

        changePassword: async ({ body, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const result = await authService.changePassword(
            req.admin!.id,
            body.currentPassword,
            body.newPassword
          );
          if (!result.ok) {
            const message =
              result.reason === "INVALID_CURRENT"
                ? "Password lama salah."
                : "Admin tidak ditemukan.";
            return { status: 400 as const, body: { message } };
          }
          return { status: 200 as const, body: { message: "Password berhasil diubah." } };
        },
      },

      // ── Profile ──────────────────────────────────────────────────────────
      profile: {
        get: async () => {
          const profile = await profileService.get();
          if (!profile) {
            return { status: 404 as const, body: { message: "Profil belum dikonfigurasi." } };
          }
          return { status: 200 as const, body: profile };
        },

        update: async ({ body, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const profile = await profileService.update(body);
          return { status: 200 as const, body: profile };
        },
      },

      // ── Skills ───────────────────────────────────────────────────────────
      skills: {
        list: async ({ query }) => {
          const skills = await skillService.list(query.category);
          return { status: 200 as const, body: skills };
        },

        create: async ({ body, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const skill = await skillService.create(body);
          return { status: 201 as const, body: skill };
        },

        update: async ({ params, body, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const skill = await skillService.update(params.id, body);
          if (!skill) {
            return { status: 404 as const, body: { message: `Skill dengan ID ${params.id} tidak ditemukan.` } };
          }
          return { status: 200 as const, body: skill };
        },

        delete: async ({ params, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const skill = await skillService.delete(params.id);
          if (!skill) {
            return { status: 404 as const, body: { message: `Skill dengan ID ${params.id} tidak ditemukan.` } };
          }
          return { status: 200 as const, body: { message: "Skill berhasil dihapus." } };
        },
      },

      // ── Projects ─────────────────────────────────────────────────────────
      projects: {
        list: async ({ query }) => {
          const result = await projectService.list(query);
          return { status: 200 as const, body: result };
        },

        getBySlug: async ({ params }) => {
          const project = await projectService.getBySlug(params.slug);
          if (!project) {
            return { status: 404 as const, body: { message: `Proyek '${params.slug}' tidak ditemukan.` } };
          }
          return { status: 200 as const, body: project };
        },

        create: async ({ body, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const existing = await projectService.getBySlug(body.slug);
          if (existing) {
            return { status: 409 as const, body: { message: `Slug '${body.slug}' sudah digunakan.` } };
          }
          const project = await projectService.create(body);
          return { status: 201 as const, body: project };
        },

        update: async ({ params, body, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const project = await projectService.update(params.id, body);
          if (!project) {
            return { status: 404 as const, body: { message: `Proyek dengan ID ${params.id} tidak ditemukan.` } };
          }
          return { status: 200 as const, body: project };
        },

        delete: async ({ params, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const project = await projectService.delete(params.id);
          if (!project) {
            return { status: 404 as const, body: { message: `Proyek dengan ID ${params.id} tidak ditemukan.` } };
          }
          return { status: 200 as const, body: { message: "Proyek berhasil dihapus." } };
        },
      },

      // ── Experience ───────────────────────────────────────────────────────
      experience: {
        list: async ({ query }) => {
          const data = await experienceService.list(query.type);
          return { status: 200 as const, body: data };
        },

        create: async ({ body, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const data = await experienceService.create(body);
          return { status: 201 as const, body: data };
        },

        update: async ({ params, body, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const data = await experienceService.update(params.id, body);
          if (!data) {
            return { status: 404 as const, body: { message: `Experience dengan ID ${params.id} tidak ditemukan.` } };
          }
          return { status: 200 as const, body: data };
        },

        delete: async ({ params, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const data = await experienceService.delete(params.id);
          if (!data) {
            return { status: 404 as const, body: { message: `Experience dengan ID ${params.id} tidak ditemukan.` } };
          }
          return { status: 200 as const, body: { message: "Experience berhasil dihapus." } };
        },
      },

      // ── Education ────────────────────────────────────────────────────────
      education: {
        list: async () => {
          const data = await educationService.list();
          return { status: 200 as const, body: data };
        },

        create: async ({ body, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const data = await educationService.create(body);
          return { status: 201 as const, body: data };
        },

        update: async ({ params, body, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const data = await educationService.update(params.id, body);
          if (!data) {
            return { status: 404 as const, body: { message: `Education dengan ID ${params.id} tidak ditemukan.` } };
          }
          return { status: 200 as const, body: data };
        },

        delete: async ({ params, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const data = await educationService.delete(params.id);
          if (!data) {
            return { status: 404 as const, body: { message: `Education dengan ID ${params.id} tidak ditemukan.` } };
          }
          return { status: 200 as const, body: { message: "Education berhasil dihapus." } };
        },
      },

      // ── Certificates ─────────────────────────────────────────────────────
      certificates: {
        list: async () => {
          const data = await certificateService.list();
          return { status: 200 as const, body: data };
        },

        create: async ({ body, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const data = await certificateService.create(body);
          return { status: 201 as const, body: data };
        },

        update: async ({ params, body, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const existing = await certificateService.getById(params.id);
          const data = await certificateService.update(params.id, body);
          if (!data) {
            return { status: 404 as const, body: { message: `Sertifikat dengan ID ${params.id} tidak ditemukan.` } };
          }
          // Hapus file gambar lama kalau diganti dengan gambar baru
          if (
            body.imageUrl &&
            existing?.imageUrl &&
            existing.imageUrl !== body.imageUrl
          ) {
            await deleteUploadedFile(existing.imageUrl);
          }
          return { status: 200 as const, body: data };
        },

        delete: async ({ params, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const existing = await certificateService.getById(params.id);
          const data = await certificateService.delete(params.id);
          if (!data) {
            return { status: 404 as const, body: { message: `Sertifikat dengan ID ${params.id} tidak ditemukan.` } };
          }
          await deleteUploadedFile(existing?.imageUrl);
          return { status: 200 as const, body: { message: "Sertifikat berhasil dihapus." } };
        },
      },

      // ── Contact ──────────────────────────────────────────────────────────
      contact: {
        send: async ({ body }) => {
          const msg = await contactService.send(body);
          return { status: 201 as const, body: { message: "Pesan berhasil terkirim.", id: msg.id } };
        },

        list: async ({ query, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const result = await contactService.list(query.page, query.limit);
          return { status: 200 as const, body: result };
        },

        unreadSummary: async ({ req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const result = await contactService.unreadSummary();
          return { status: 200 as const, body: result };
        },

        markRead: async ({ params, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const msg = await contactService.markRead(params.id);
          if (!msg) {
            return { status: 404 as const, body: { message: `Pesan dengan ID ${params.id} tidak ditemukan.` } };
          }
          return { status: 200 as const, body: msg };
        },

        delete: async ({ params, req }) => {
          if (!isAuthenticated(req)) {
            return { status: 401 as const, body: { message: "Unauthorized." } };
          }
          const msg = await contactService.delete(params.id);
          if (!msg) {
            return { status: 404 as const, body: { message: `Pesan dengan ID ${params.id} tidak ditemukan.` } };
          }
          return { status: 200 as const, body: { message: "Pesan berhasil dihapus." } };
        },
      },
    },
    router
  );

  return router;
}