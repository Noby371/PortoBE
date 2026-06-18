import { prisma } from "../lib/prisma.js";
import type { Prisma, ProjectType, ProjectStatus } from "../generated/prisma/client.js";

interface ProjectFilterOptions {
  page: number;
  limit: number;
  type?: ProjectType;
  status?: ProjectStatus;
  featured?: boolean;
}

export class ProjectService {
  async list(options: ProjectFilterOptions) {
    const { page, limit, type, status, featured } = options;
    const skip = (page - 1) * limit;

    const where: Prisma.ProjectWhereInput = {
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

  async getBySlug(slug: string) {
    return prisma.project.findUnique({ where: { slug } });
  }

  async create(data: Prisma.ProjectCreateInput) {
    return prisma.project.create({ data });
  }

  async update(id: number, data: Prisma.ProjectUpdateInput) {
    const existing = await prisma.project.findUnique({ where: { id } });
    if (!existing) return null;
    return prisma.project.update({ where: { id }, data });
  }

  async delete(id: number) {
    const existing = await prisma.project.findUnique({ where: { id } });
    if (!existing) return null;
    return prisma.project.delete({ where: { id } });
  }
}