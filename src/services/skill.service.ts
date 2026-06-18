import { prisma } from "../lib/prisma.js";
import type { Prisma, SkillCategory } from "../generated/prisma/client.js";

export class SkillService {
  async list(category?: SkillCategory) {
    return prisma.skill.findMany({
      where: category ? { category } : undefined,
      orderBy: [{ category: "asc" }, { level: "desc" }],
    });
  }

  async create(data: Prisma.SkillCreateInput) {
    return prisma.skill.create({ data });
  }

  async update(id: number, data: Prisma.SkillUpdateInput) {
    const existing = await prisma.skill.findUnique({ where: { id } });
    if (!existing) return null;
    return prisma.skill.update({ where: { id }, data });
  }

  async delete(id: number) {
    const existing = await prisma.skill.findUnique({ where: { id } });
    if (!existing) return null;
    return prisma.skill.delete({ where: { id } });
  }
}