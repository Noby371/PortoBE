import { initContract } from "@ts-rest/core";
import { z } from "zod";
const c = initContract();
// ─── Shared ───────────────────────────────────────────────────────────────────
const PaginationQuery = z.object({
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(10),
});
const IdParam = z.object({ id: z.coerce.number().int().positive() });
const ErrorSchema = z.object({ message: z.string() });
// ─── Profile ──────────────────────────────────────────────────────────────────
const ProfileSchema = z.object({
    id: z.number(),
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    email: z.string().email(),
    phone: z.string().nullable(),
    location: z.string().nullable(),
    avatarUrl: z.string().nullable(),
    githubUrl: z.string().nullable(),
    linkedinUrl: z.string().nullable(),
    resumeUrl: z.string().nullable(),
    adminId: z.number().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});
const ProfileUpdateBody = ProfileSchema.omit({
    id: true,
    adminId: true,
    createdAt: true,
    updatedAt: true,
}).partial();
// ─── Skill ────────────────────────────────────────────────────────────────────
const SkillCategoryEnum = z.enum([
    "BACKEND", "FRONTEND", "MOBILE", "DATABASE",
    "DEVOPS", "IOT", "TOOLS", "OTHER",
]);
const SkillSchema = z.object({
    id: z.number(),
    name: z.string(),
    category: SkillCategoryEnum,
    level: z.number().int().min(1).max(100),
    iconSlug: z.string().nullable(),
});
const SkillCreateBody = SkillSchema.omit({ id: true });
const SkillUpdateBody = SkillCreateBody.partial();
// ─── Project ──────────────────────────────────────────────────────────────────
const ProjectTypeEnum = z.enum([
    "THESIS", "FREELANCE", "STARTUP", "PERSONAL", "ACADEMIC",
]);
const ProjectStatusEnum = z.enum([
    "IN_PROGRESS", "COMPLETED", "ARCHIVED",
]);
const ProjectSchema = z.object({
    id: z.number(),
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    longDesc: z.string().nullable(),
    type: ProjectTypeEnum,
    status: ProjectStatusEnum,
    techStack: z.array(z.string()),
    imageUrl: z.string().nullable(),
    repoUrl: z.string().nullable(),
    demoUrl: z.string().nullable(),
    featured: z.boolean(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
});
const ProjectCreateBody = ProjectSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
});
const ProjectUpdateBody = ProjectCreateBody.partial();
const ProjectFilterQuery = PaginationQuery.extend({
    type: ProjectTypeEnum.optional(),
    status: ProjectStatusEnum.optional(),
    featured: z.enum(["true", "false"])
        .transform((v) => v === "true")
        .optional(),
});
// ─── Experience ───────────────────────────────────────────────────────────────
const ExperienceTypeEnum = z.enum([
    "WORK", "INTERNSHIP", "ORGANIZATION", "FREELANCE",
]);
const ExperienceSchema = z.object({
    id: z.number(),
    company: z.string(),
    role: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().nullable(),
    isCurrent: z.boolean(),
    location: z.string().nullable(),
    type: ExperienceTypeEnum,
});
const ExperienceCreateBody = ExperienceSchema.omit({ id: true });
const ExperienceUpdateBody = ExperienceCreateBody.partial();
// ─── Education ────────────────────────────────────────────────────────────────
const EducationSchema = z.object({
    id: z.number(),
    institution: z.string(),
    degree: z.string(),
    field: z.string(),
    startYear: z.number().int(),
    endYear: z.number().int().nullable(),
    isCurrent: z.boolean(),
    gpa: z.number().nullable(),
    description: z.string().nullable(),
});
const EducationCreateBody = EducationSchema.omit({ id: true });
const EducationUpdateBody = EducationCreateBody.partial();
// ─── Certificate ─────────────────────────────────────────────────────────────
const CertificateSchema = z.object({
    id: z.number(),
    title: z.string(),
    issuer: z.string(),
    issuedAt: z.coerce.date(),
    expiredAt: z.coerce.date().nullable(),
    credentialUrl: z.string().nullable(),
    imageUrl: z.string().nullable(),
});
const CertificateCreateBody = CertificateSchema.omit({ id: true });
const CertificateUpdateBody = CertificateCreateBody.partial();
// ─── Contact ──────────────────────────────────────────────────────────────────
const ContactMessageSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    subject: z.string(),
    message: z.string(),
    isRead: z.boolean(),
    createdAt: z.coerce.date(),
});
const ContactCreateBody = ContactMessageSchema.omit({
    id: true,
    isRead: true,
    createdAt: true,
});
// ─── Auth ─────────────────────────────────────────────────────────────────────
const LoginBody = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});
const LoginResponse = z.object({
    token: z.string(),
    admin: z.object({
        id: z.number(),
        email: z.string(),
        name: z.string().optional(),
    }),
});
// ─── Contract ─────────────────────────────────────────────────────────────────
export const portfolioContract = c.router({
    // ── Auth ────────────────────────────────────────────────────────────────────
    auth: c.router({
        login: c.mutation({
            method: "POST",
            path: "/auth/login",
            body: LoginBody,
            responses: {
                200: LoginResponse,
                401: ErrorSchema,
            },
        }),
        me: c.query({
            method: "GET",
            path: "/auth/me",
            responses: {
                200: z.object({
                    id: z.number(),
                    email: z.string(),
                    lastLoginAt: z.coerce.date().nullable(),
                }),
                401: ErrorSchema,
            },
        }),
    }),
    // ── Profile ─────────────────────────────────────────────────────────────────
    profile: c.router({
        get: c.query({
            method: "GET",
            path: "/profile",
            responses: {
                200: ProfileSchema,
                404: ErrorSchema,
            },
        }),
        update: c.mutation({
            method: "PATCH",
            path: "/profile",
            body: ProfileUpdateBody,
            responses: {
                200: ProfileSchema,
                401: ErrorSchema,
                404: ErrorSchema,
            },
        }),
    }),
    // ── Skills ──────────────────────────────────────────────────────────────────
    skills: c.router({
        list: c.query({
            method: "GET",
            path: "/skills",
            query: z.object({ category: SkillCategoryEnum.optional() }),
            responses: { 200: z.array(SkillSchema) },
        }),
        create: c.mutation({
            method: "POST",
            path: "/skills",
            body: SkillCreateBody,
            responses: {
                201: SkillSchema,
                401: ErrorSchema,
            },
        }),
        update: c.mutation({
            method: "PATCH",
            path: "/skills/:id",
            pathParams: IdParam,
            body: SkillUpdateBody,
            responses: {
                200: SkillSchema,
                401: ErrorSchema,
                404: ErrorSchema,
            },
        }),
        delete: c.mutation({
            method: "DELETE",
            path: "/skills/:id",
            pathParams: IdParam,
            body: c.noBody(),
            responses: {
                200: z.object({ message: z.string() }),
                401: ErrorSchema,
                404: ErrorSchema,
            },
        }),
    }),
    // ── Projects ─────────────────────────────────────────────────────────────────
    projects: c.router({
        list: c.query({
            method: "GET",
            path: "/projects",
            query: ProjectFilterQuery,
            responses: {
                200: z.object({
                    data: z.array(ProjectSchema),
                    meta: z.object({
                        total: z.number(),
                        page: z.number(),
                        limit: z.number(),
                        totalPages: z.number(),
                    }),
                }),
            },
        }),
        getBySlug: c.query({
            method: "GET",
            path: "/projects/:slug",
            pathParams: z.object({ slug: z.string() }),
            responses: {
                200: ProjectSchema,
                404: ErrorSchema,
            },
        }),
        create: c.mutation({
            method: "POST",
            path: "/projects",
            body: ProjectCreateBody,
            responses: {
                201: ProjectSchema,
                401: ErrorSchema,
                409: ErrorSchema,
            },
        }),
        update: c.mutation({
            method: "PATCH",
            path: "/projects/:id",
            pathParams: IdParam,
            body: ProjectUpdateBody,
            responses: {
                200: ProjectSchema,
                401: ErrorSchema,
                404: ErrorSchema,
            },
        }),
        delete: c.mutation({
            method: "DELETE",
            path: "/projects/:id",
            pathParams: IdParam,
            body: c.noBody(),
            responses: {
                200: z.object({ message: z.string() }),
                401: ErrorSchema,
                404: ErrorSchema,
            },
        }),
    }),
    // ── Experience ───────────────────────────────────────────────────────────────
    experience: c.router({
        list: c.query({
            method: "GET",
            path: "/experience",
            query: z.object({ type: ExperienceTypeEnum.optional() }),
            responses: { 200: z.array(ExperienceSchema) },
        }),
        create: c.mutation({
            method: "POST",
            path: "/experience",
            body: ExperienceCreateBody,
            responses: {
                201: ExperienceSchema,
                401: ErrorSchema,
            },
        }),
        update: c.mutation({
            method: "PATCH",
            path: "/experience/:id",
            pathParams: IdParam,
            body: ExperienceUpdateBody,
            responses: {
                200: ExperienceSchema,
                401: ErrorSchema,
                404: ErrorSchema,
            },
        }),
        delete: c.mutation({
            method: "DELETE",
            path: "/experience/:id",
            pathParams: IdParam,
            body: c.noBody(),
            responses: {
                200: z.object({ message: z.string() }),
                401: ErrorSchema,
                404: ErrorSchema,
            },
        }),
    }),
    // ── Education ────────────────────────────────────────────────────────────────
    education: c.router({
        list: c.query({
            method: "GET",
            path: "/education",
            responses: { 200: z.array(EducationSchema) },
        }),
        create: c.mutation({
            method: "POST",
            path: "/education",
            body: EducationCreateBody,
            responses: {
                201: EducationSchema,
                401: ErrorSchema,
            },
        }),
        update: c.mutation({
            method: "PATCH",
            path: "/education/:id",
            pathParams: IdParam,
            body: EducationUpdateBody,
            responses: {
                200: EducationSchema,
                401: ErrorSchema,
                404: ErrorSchema,
            },
        }),
        delete: c.mutation({
            method: "DELETE",
            path: "/education/:id",
            pathParams: IdParam,
            body: c.noBody(),
            responses: {
                200: z.object({ message: z.string() }),
                401: ErrorSchema,
                404: ErrorSchema,
            },
        }),
    }),
    // ── Certificates ─────────────────────────────────────────────────────────────
    certificates: c.router({
        list: c.query({
            method: "GET",
            path: "/certificates",
            responses: { 200: z.array(CertificateSchema) },
        }),
        create: c.mutation({
            method: "POST",
            path: "/certificates",
            body: CertificateCreateBody,
            responses: {
                201: CertificateSchema,
                401: ErrorSchema,
            },
        }),
        update: c.mutation({
            method: "PATCH",
            path: "/certificates/:id",
            pathParams: IdParam,
            body: CertificateUpdateBody,
            responses: {
                200: CertificateSchema,
                401: ErrorSchema,
                404: ErrorSchema,
            },
        }),
        delete: c.mutation({
            method: "DELETE",
            path: "/certificates/:id",
            pathParams: IdParam,
            body: c.noBody(),
            responses: {
                200: z.object({ message: z.string() }),
                401: ErrorSchema,
                404: ErrorSchema,
            },
        }),
    }),
    // ── Contact ──────────────────────────────────────────────────────────────────
    contact: c.router({
        send: c.mutation({
            method: "POST",
            path: "/contact",
            body: ContactCreateBody,
            responses: {
                201: z.object({ message: z.string(), id: z.number() }),
                400: ErrorSchema,
            },
        }),
        list: c.query({
            method: "GET",
            path: "/contact/messages",
            query: PaginationQuery,
            responses: {
                200: z.object({
                    data: z.array(ContactMessageSchema),
                    meta: z.object({
                        total: z.number(),
                        page: z.number(),
                        limit: z.number(),
                        totalPages: z.number(),
                    }),
                }),
                401: ErrorSchema,
            },
        }),
        unreadSummary: c.query({
            method: "GET",
            path: "/contact/messages/unread-summary",
            responses: {
                200: z.object({
                    count: z.number(),
                    latest: z
                        .object({
                        id: z.number(),
                        name: z.string(),
                        subject: z.string(),
                    })
                        .nullable(),
                }),
                401: ErrorSchema,
            },
        }),
        markRead: c.mutation({
            method: "PATCH",
            path: "/contact/messages/:id/read",
            pathParams: IdParam,
            body: c.noBody(),
            responses: {
                200: ContactMessageSchema,
                401: ErrorSchema,
                404: ErrorSchema,
            },
        }),
        delete: c.mutation({
            method: "DELETE",
            path: "/contact/messages/:id",
            pathParams: IdParam,
            body: c.noBody(),
            responses: {
                200: z.object({ message: z.string() }),
                401: ErrorSchema,
                404: ErrorSchema,
            },
        }),
    }),
});
//# sourceMappingURL=portofolio.contract.js.map