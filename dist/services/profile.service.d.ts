import type { Prisma } from "../generated/prisma/client.js";
export declare class ProfileService {
    get(): Promise<({} & {
        id: number;
        name: string;
        title: string;
        bio: string;
        email: string;
        phone: string | null;
        location: string | null;
        avatarUrl: string | null;
        githubUrl: string | null;
        linkedinUrl: string | null;
        resumeUrl: string | null;
        adminId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
    update(data: Prisma.ProfileUpdateInput): Promise<{
        id: number;
        name: string;
        title: string;
        bio: string;
        email: string;
        phone: string | null;
        location: string | null;
        avatarUrl: string | null;
        githubUrl: string | null;
        linkedinUrl: string | null;
        resumeUrl: string | null;
        adminId: number | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
