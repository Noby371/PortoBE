import type { Prisma, SkillCategory } from "../generated/prisma/client.js";
export declare class SkillService {
    list(category?: SkillCategory): Promise<{
        id: number;
        name: string;
        category: SkillCategory;
        level: number;
        iconSlug: string | null;
    }[]>;
    create(data: Prisma.SkillCreateInput): Promise<{
        id: number;
        name: string;
        category: SkillCategory;
        level: number;
        iconSlug: string | null;
    }>;
    update(id: number, data: Prisma.SkillUpdateInput): Promise<{
        id: number;
        name: string;
        category: SkillCategory;
        level: number;
        iconSlug: string | null;
    } | null>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        category: SkillCategory;
        level: number;
        iconSlug: string | null;
    } | null>;
}
