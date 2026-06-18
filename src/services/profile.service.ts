import { prisma } from "../lib/prisma.js";
import type { Prisma } from "../generated/prisma/client.js";

export class ProfileService {
  async get() {
    return prisma.profile.findFirst({
      include: { admin: false },
    });
  }

  async update(data: Prisma.ProfileUpdateInput) {
    const existing = await prisma.profile.findFirst();

    if (existing) {
      return prisma.profile.update({
        where: { id: existing.id },
        data,
      });
    }

    return prisma.profile.create({
      data: data as Prisma.ProfileCreateInput,
    });
  }
}