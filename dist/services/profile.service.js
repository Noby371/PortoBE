import { prisma } from "../lib/prisma.js";
export class ProfileService {
    async get() {
        return prisma.profile.findFirst({
            include: { admin: false },
        });
    }
    async update(data) {
        const existing = await prisma.profile.findFirst();
        if (existing) {
            return prisma.profile.update({
                where: { id: existing.id },
                data,
            });
        }
        return prisma.profile.create({
            data: data,
        });
    }
}
//# sourceMappingURL=profile.service.js.map