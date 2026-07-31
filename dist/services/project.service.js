import { prisma } from "../lib/prisma.js";
export class ProjectService {
    async list(options) {
        const { page, limit, type, status, featured } = options;
        const skip = (page - 1) * limit;
        const where = {
            ...(type && { type }),
            ...(status && { status }),
            ...(featured !== undefined && { featured }),
        };
        const [data, total] = await Promise.all([
            prisma.project.findMany({
                where,
                skip,
                take: limit,
                orderBy: [{ featured: "desc" }, { startDate: "desc" }],
            }),
            prisma.project.count({ where }),
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
    async getBySlug(slug) {
        return prisma.project.findUnique({ where: { slug } });
    }
    async create(data) {
        return prisma.project.create({ data });
    }
    async update(id, data) {
        const existing = await prisma.project.findUnique({ where: { id } });
        if (!existing)
            return null;
        return prisma.project.update({ where: { id }, data });
    }
    async delete(id) {
        const existing = await prisma.project.findUnique({ where: { id } });
        if (!existing)
            return null;
        return prisma.project.delete({ where: { id } });
    }
}
//# sourceMappingURL=project.service.js.map