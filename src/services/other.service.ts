import { prisma } from "../lib/prisma.js";
import type { Prisma, ExperienceType } from "../generated/prisma/client.js";

// ─── Experience ───────────────────────────────────────────────────────────────

export class ExperienceService {
  async list(type?: ExperienceType) {
    return prisma.experience.findMany({
      where: type ? { type } : undefined,
      orderBy: [{ isCurrent: "desc" }, { startDate: "desc" }],
    });
  }

  async create(data: Prisma.ExperienceCreateInput) {
    return prisma.experience.create({ data });
  }

  async update(id: number, data: Prisma.ExperienceUpdateInput) {
    const existing = await prisma.experience.findUnique({ where: { id } });
    if (!existing) return null;
    return prisma.experience.update({ where: { id }, data });
  }

  async delete(id: number) {
    const existing = await prisma.experience.findUnique({ where: { id } });
    if (!existing) return null;
    return prisma.experience.delete({ where: { id } });
  }
}

// ─── Education ────────────────────────────────────────────────────────────────

export class EducationService {
  async list() {
    return prisma.education.findMany({
      orderBy: [{ isCurrent: "desc" }, { startYear: "desc" }],
    });
  }

  async create(data: Prisma.EducationCreateInput) {
    return prisma.education.create({ data });
  }

  async update(id: number, data: Prisma.EducationUpdateInput) {
    const existing = await prisma.education.findUnique({ where: { id } });
    if (!existing) return null;
    return prisma.education.update({ where: { id }, data });
  }

  async delete(id: number) {
    const existing = await prisma.education.findUnique({ where: { id } });
    if (!existing) return null;
    return prisma.education.delete({ where: { id } });
  }
}

// ─── Certificate ─────────────────────────────────────────────────────────────

export class CertificateService {
  async list() {
    return prisma.certificate.findMany({
      orderBy: { issuedAt: "desc" },
    });
  }

  async getById(id: number) {
    return prisma.certificate.findUnique({ where: { id } });
  }

  async create(data: Prisma.CertificateCreateInput) {
    return prisma.certificate.create({ data });
  }

  async update(id: number, data: Prisma.CertificateUpdateInput) {
    const existing = await prisma.certificate.findUnique({ where: { id } });
    if (!existing) return null;
    return prisma.certificate.update({ where: { id }, data });
  }

  async delete(id: number) {
    const existing = await prisma.certificate.findUnique({ where: { id } });
    if (!existing) return null;
    return prisma.certificate.delete({ where: { id } });
  }
}

// ─── Contact ─────────────────────────────────────────────────────────────────

export class ContactService {
  async send(data: Prisma.ContactMessageCreateInput) {
    return prisma.contactMessage.create({ data });
  }

  async list(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      prisma.contactMessage.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      prisma.contactMessage.count(),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async unreadSummary() {
    const [count, latest] = await Promise.all([
      prisma.contactMessage.count({ where: { isRead: false } }),
      prisma.contactMessage.findFirst({
        where: { isRead: false },
        orderBy: { createdAt: "desc" },
        select: { id: true, name: true, subject: true },
      }),
    ]);
    return { count, latest };
  }

  async markRead(id: number) {
    const existing = await prisma.contactMessage.findUnique({ where: { id } });
    if (!existing) return null;
    return prisma.contactMessage.update({
      where: { id },
      data: { isRead: true },
    });
  }

  async delete(id: number) {
    const existing = await prisma.contactMessage.findUnique({ where: { id } });
    if (!existing) return null;
    return prisma.contactMessage.delete({ where: { id } });
  }
}