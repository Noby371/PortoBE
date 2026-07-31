import { prisma } from "../lib/prisma.js";
export class SkillService {
    async list(category) {
        return prisma.skill.findMany({
            where: category ? { category } : undefined,
            orderBy: [{ category: "asc" }, { level: "desc" }],
        });
    }
    async create(data) {
        return prisma.skill.create({ data });
    }
    async update(id, data) {
        const existing = await prisma.skill.findUnique({ where: { id } });
        if (!existing)
            return null;
        return prisma.skill.update({ where: { id }, data });
    }
    async delete(id) {
        const existing = await prisma.skill.findUnique({ where: { id } });
        if (!existing)
            return null;
        return prisma.skill.delete({ where: { id } });
    }
}
//# sourceMappingURL=skill.service.js.map