import type { Prisma, ExperienceType } from "../generated/prisma/client.js";
export declare class ExperienceService {
    list(type?: ExperienceType): Promise<{
        type: ExperienceType;
        id: number;
        location: string | null;
        description: string;
        startDate: Date;
        endDate: Date | null;
        company: string;
        role: string;
        isCurrent: boolean;
    }[]>;
    create(data: Prisma.ExperienceCreateInput): Promise<{
        type: ExperienceType;
        id: number;
        location: string | null;
        description: string;
        startDate: Date;
        endDate: Date | null;
        company: string;
        role: string;
        isCurrent: boolean;
    }>;
    update(id: number, data: Prisma.ExperienceUpdateInput): Promise<{
        type: ExperienceType;
        id: number;
        location: string | null;
        description: string;
        startDate: Date;
        endDate: Date | null;
        company: string;
        role: string;
        isCurrent: boolean;
    } | null>;
    delete(id: number): Promise<{
        type: ExperienceType;
        id: number;
        location: string | null;
        description: string;
        startDate: Date;
        endDate: Date | null;
        company: string;
        role: string;
        isCurrent: boolean;
    } | null>;
}
export declare class EducationService {
    list(): Promise<{
        id: number;
        description: string | null;
        isCurrent: boolean;
        institution: string;
        degree: string;
        field: string;
        startYear: number;
        endYear: number | null;
        gpa: number | null;
    }[]>;
    create(data: Prisma.EducationCreateInput): Promise<{
        id: number;
        description: string | null;
        isCurrent: boolean;
        institution: string;
        degree: string;
        field: string;
        startYear: number;
        endYear: number | null;
        gpa: number | null;
    }>;
    update(id: number, data: Prisma.EducationUpdateInput): Promise<{
        id: number;
        description: string | null;
        isCurrent: boolean;
        institution: string;
        degree: string;
        field: string;
        startYear: number;
        endYear: number | null;
        gpa: number | null;
    } | null>;
    delete(id: number): Promise<{
        id: number;
        description: string | null;
        isCurrent: boolean;
        institution: string;
        degree: string;
        field: string;
        startYear: number;
        endYear: number | null;
        gpa: number | null;
    } | null>;
}
export declare class CertificateService {
    list(): Promise<{
        id: number;
        title: string;
        imageUrl: string | null;
        issuer: string;
        issuedAt: Date;
        expiredAt: Date | null;
        credentialUrl: string | null;
    }[]>;
    getById(id: number): Promise<{
        id: number;
        title: string;
        imageUrl: string | null;
        issuer: string;
        issuedAt: Date;
        expiredAt: Date | null;
        credentialUrl: string | null;
    } | null>;
    create(data: Prisma.CertificateCreateInput): Promise<{
        id: number;
        title: string;
        imageUrl: string | null;
        issuer: string;
        issuedAt: Date;
        expiredAt: Date | null;
        credentialUrl: string | null;
    }>;
    update(id: number, data: Prisma.CertificateUpdateInput): Promise<{
        id: number;
        title: string;
        imageUrl: string | null;
        issuer: string;
        issuedAt: Date;
        expiredAt: Date | null;
        credentialUrl: string | null;
    } | null>;
    delete(id: number): Promise<{
        id: number;
        title: string;
        imageUrl: string | null;
        issuer: string;
        issuedAt: Date;
        expiredAt: Date | null;
        credentialUrl: string | null;
    } | null>;
}
export declare class ContactService {
    send(data: Prisma.ContactMessageCreateInput): Promise<{
        message: string;
        id: number;
        name: string;
        email: string;
        createdAt: Date;
        subject: string;
        isRead: boolean;
    }>;
    list(page: number, limit: number): Promise<{
        data: {
            message: string;
            id: number;
            name: string;
            email: string;
            createdAt: Date;
            subject: string;
            isRead: boolean;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    unreadSummary(): Promise<{
        count: number;
        latest: {
            id: number;
            name: string;
            subject: string;
        } | null;
    }>;
    markRead(id: number): Promise<{
        message: string;
        id: number;
        name: string;
        email: string;
        createdAt: Date;
        subject: string;
        isRead: boolean;
    } | null>;
    delete(id: number): Promise<{
        message: string;
        id: number;
        name: string;
        email: string;
        createdAt: Date;
        subject: string;
        isRead: boolean;
    } | null>;
}
