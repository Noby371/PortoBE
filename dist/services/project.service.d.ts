import type { Prisma, ProjectType, ProjectStatus } from "../generated/prisma/client.js";
interface ProjectFilterOptions {
    page: number;
    limit: number;
    type?: ProjectType;
    status?: ProjectStatus;
    featured?: boolean;
}
export declare class ProjectService {
    list(options: ProjectFilterOptions): Promise<{
        data: {
            type: ProjectType;
            status: ProjectStatus;
            id: number;
            title: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            description: string;
            longDesc: string | null;
            techStack: string[];
            imageUrl: string | null;
            repoUrl: string | null;
            demoUrl: string | null;
            featured: boolean;
            startDate: Date;
            endDate: Date | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getBySlug(slug: string): Promise<{
        type: ProjectType;
        status: ProjectStatus;
        id: number;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string;
        longDesc: string | null;
        techStack: string[];
        imageUrl: string | null;
        repoUrl: string | null;
        demoUrl: string | null;
        featured: boolean;
        startDate: Date;
        endDate: Date | null;
    } | null>;
    create(data: Prisma.ProjectCreateInput): Promise<{
        type: ProjectType;
        status: ProjectStatus;
        id: number;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string;
        longDesc: string | null;
        techStack: string[];
        imageUrl: string | null;
        repoUrl: string | null;
        demoUrl: string | null;
        featured: boolean;
        startDate: Date;
        endDate: Date | null;
    }>;
    update(id: number, data: Prisma.ProjectUpdateInput): Promise<{
        type: ProjectType;
        status: ProjectStatus;
        id: number;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string;
        longDesc: string | null;
        techStack: string[];
        imageUrl: string | null;
        repoUrl: string | null;
        demoUrl: string | null;
        featured: boolean;
        startDate: Date;
        endDate: Date | null;
    } | null>;
    delete(id: number): Promise<{
        type: ProjectType;
        status: ProjectStatus;
        id: number;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string;
        longDesc: string | null;
        techStack: string[];
        imageUrl: string | null;
        repoUrl: string | null;
        demoUrl: string | null;
        featured: boolean;
        startDate: Date;
        endDate: Date | null;
    } | null>;
}
export {};
