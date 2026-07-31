import { z } from "zod";
export declare const portfolioContract: {
    auth: {
        login: {
            method: "POST";
            body: z.ZodObject<{
                email: z.ZodString;
                password: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                email: string;
                password: string;
            }, {
                email: string;
                password: string;
            }>;
            path: string;
            responses: {
                200: z.ZodObject<{
                    token: z.ZodString;
                    admin: z.ZodObject<{
                        id: z.ZodNumber;
                        email: z.ZodString;
                        name: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        email: string;
                        name?: string | undefined;
                    }, {
                        id: number;
                        email: string;
                        name?: string | undefined;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    token: string;
                    admin: {
                        id: number;
                        email: string;
                        name?: string | undefined;
                    };
                }, {
                    token: string;
                    admin: {
                        id: number;
                        email: string;
                        name?: string | undefined;
                    };
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        me: {
            method: "GET";
            path: string;
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    email: z.ZodString;
                    lastLoginAt: z.ZodNullable<z.ZodDate>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    email: string;
                    lastLoginAt: Date | null;
                }, {
                    id: number;
                    email: string;
                    lastLoginAt: Date | null;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
    };
    profile: {
        get: {
            method: "GET";
            path: string;
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    title: z.ZodString;
                    bio: z.ZodString;
                    email: z.ZodString;
                    phone: z.ZodNullable<z.ZodString>;
                    location: z.ZodNullable<z.ZodString>;
                    avatarUrl: z.ZodNullable<z.ZodString>;
                    githubUrl: z.ZodNullable<z.ZodString>;
                    linkedinUrl: z.ZodNullable<z.ZodString>;
                    resumeUrl: z.ZodNullable<z.ZodString>;
                    adminId: z.ZodNullable<z.ZodNumber>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
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
                }, {
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
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        update: {
            method: "PATCH";
            body: z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                title: z.ZodOptional<z.ZodString>;
                bio: z.ZodOptional<z.ZodString>;
                email: z.ZodOptional<z.ZodString>;
                phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                avatarUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                githubUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                linkedinUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                resumeUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                title?: string | undefined;
                bio?: string | undefined;
                email?: string | undefined;
                phone?: string | null | undefined;
                location?: string | null | undefined;
                avatarUrl?: string | null | undefined;
                githubUrl?: string | null | undefined;
                linkedinUrl?: string | null | undefined;
                resumeUrl?: string | null | undefined;
            }, {
                name?: string | undefined;
                title?: string | undefined;
                bio?: string | undefined;
                email?: string | undefined;
                phone?: string | null | undefined;
                location?: string | null | undefined;
                avatarUrl?: string | null | undefined;
                githubUrl?: string | null | undefined;
                linkedinUrl?: string | null | undefined;
                resumeUrl?: string | null | undefined;
            }>;
            path: string;
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    title: z.ZodString;
                    bio: z.ZodString;
                    email: z.ZodString;
                    phone: z.ZodNullable<z.ZodString>;
                    location: z.ZodNullable<z.ZodString>;
                    avatarUrl: z.ZodNullable<z.ZodString>;
                    githubUrl: z.ZodNullable<z.ZodString>;
                    linkedinUrl: z.ZodNullable<z.ZodString>;
                    resumeUrl: z.ZodNullable<z.ZodString>;
                    adminId: z.ZodNullable<z.ZodNumber>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
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
                }, {
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
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
    };
    skills: {
        list: {
            query: z.ZodObject<{
                category: z.ZodOptional<z.ZodEnum<["BACKEND", "FRONTEND", "MOBILE", "DATABASE", "DEVOPS", "IOT", "TOOLS", "OTHER"]>>;
            }, "strip", z.ZodTypeAny, {
                category?: "BACKEND" | "FRONTEND" | "MOBILE" | "DATABASE" | "DEVOPS" | "IOT" | "TOOLS" | "OTHER" | undefined;
            }, {
                category?: "BACKEND" | "FRONTEND" | "MOBILE" | "DATABASE" | "DEVOPS" | "IOT" | "TOOLS" | "OTHER" | undefined;
            }>;
            method: "GET";
            path: string;
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    category: z.ZodEnum<["BACKEND", "FRONTEND", "MOBILE", "DATABASE", "DEVOPS", "IOT", "TOOLS", "OTHER"]>;
                    level: z.ZodNumber;
                    iconSlug: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                    category: "BACKEND" | "FRONTEND" | "MOBILE" | "DATABASE" | "DEVOPS" | "IOT" | "TOOLS" | "OTHER";
                    level: number;
                    iconSlug: string | null;
                }, {
                    id: number;
                    name: string;
                    category: "BACKEND" | "FRONTEND" | "MOBILE" | "DATABASE" | "DEVOPS" | "IOT" | "TOOLS" | "OTHER";
                    level: number;
                    iconSlug: string | null;
                }>, "many">;
            };
        };
        create: {
            method: "POST";
            body: z.ZodObject<Omit<{
                id: z.ZodNumber;
                name: z.ZodString;
                category: z.ZodEnum<["BACKEND", "FRONTEND", "MOBILE", "DATABASE", "DEVOPS", "IOT", "TOOLS", "OTHER"]>;
                level: z.ZodNumber;
                iconSlug: z.ZodNullable<z.ZodString>;
            }, "id">, "strip", z.ZodTypeAny, {
                name: string;
                category: "BACKEND" | "FRONTEND" | "MOBILE" | "DATABASE" | "DEVOPS" | "IOT" | "TOOLS" | "OTHER";
                level: number;
                iconSlug: string | null;
            }, {
                name: string;
                category: "BACKEND" | "FRONTEND" | "MOBILE" | "DATABASE" | "DEVOPS" | "IOT" | "TOOLS" | "OTHER";
                level: number;
                iconSlug: string | null;
            }>;
            path: string;
            responses: {
                201: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    category: z.ZodEnum<["BACKEND", "FRONTEND", "MOBILE", "DATABASE", "DEVOPS", "IOT", "TOOLS", "OTHER"]>;
                    level: z.ZodNumber;
                    iconSlug: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                    category: "BACKEND" | "FRONTEND" | "MOBILE" | "DATABASE" | "DEVOPS" | "IOT" | "TOOLS" | "OTHER";
                    level: number;
                    iconSlug: string | null;
                }, {
                    id: number;
                    name: string;
                    category: "BACKEND" | "FRONTEND" | "MOBILE" | "DATABASE" | "DEVOPS" | "IOT" | "TOOLS" | "OTHER";
                    level: number;
                    iconSlug: string | null;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        update: {
            pathParams: z.ZodObject<{
                id: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            method: "PATCH";
            body: z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                category: z.ZodOptional<z.ZodEnum<["BACKEND", "FRONTEND", "MOBILE", "DATABASE", "DEVOPS", "IOT", "TOOLS", "OTHER"]>>;
                level: z.ZodOptional<z.ZodNumber>;
                iconSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                name?: string | undefined;
                category?: "BACKEND" | "FRONTEND" | "MOBILE" | "DATABASE" | "DEVOPS" | "IOT" | "TOOLS" | "OTHER" | undefined;
                level?: number | undefined;
                iconSlug?: string | null | undefined;
            }, {
                name?: string | undefined;
                category?: "BACKEND" | "FRONTEND" | "MOBILE" | "DATABASE" | "DEVOPS" | "IOT" | "TOOLS" | "OTHER" | undefined;
                level?: number | undefined;
                iconSlug?: string | null | undefined;
            }>;
            path: string;
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    category: z.ZodEnum<["BACKEND", "FRONTEND", "MOBILE", "DATABASE", "DEVOPS", "IOT", "TOOLS", "OTHER"]>;
                    level: z.ZodNumber;
                    iconSlug: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    name: string;
                    category: "BACKEND" | "FRONTEND" | "MOBILE" | "DATABASE" | "DEVOPS" | "IOT" | "TOOLS" | "OTHER";
                    level: number;
                    iconSlug: string | null;
                }, {
                    id: number;
                    name: string;
                    category: "BACKEND" | "FRONTEND" | "MOBILE" | "DATABASE" | "DEVOPS" | "IOT" | "TOOLS" | "OTHER";
                    level: number;
                    iconSlug: string | null;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        delete: {
            pathParams: z.ZodObject<{
                id: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            method: "DELETE";
            body: typeof import("@ts-rest/core").ContractNoBody;
            path: string;
            responses: {
                200: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
    };
    projects: {
        list: {
            query: z.ZodObject<{
                page: z.ZodDefault<z.ZodNumber>;
                limit: z.ZodDefault<z.ZodNumber>;
            } & {
                type: z.ZodOptional<z.ZodEnum<["THESIS", "FREELANCE", "STARTUP", "PERSONAL", "ACADEMIC"]>>;
                status: z.ZodOptional<z.ZodEnum<["IN_PROGRESS", "COMPLETED", "ARCHIVED"]>>;
                featured: z.ZodOptional<z.ZodEffects<z.ZodEnum<["true", "false"]>, boolean, "true" | "false">>;
            }, "strip", z.ZodTypeAny, {
                page: number;
                limit: number;
                type?: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC" | undefined;
                status?: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED" | undefined;
                featured?: boolean | undefined;
            }, {
                page?: number | undefined;
                limit?: number | undefined;
                type?: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC" | undefined;
                status?: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED" | undefined;
                featured?: "true" | "false" | undefined;
            }>;
            method: "GET";
            path: string;
            responses: {
                200: z.ZodObject<{
                    data: z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        title: z.ZodString;
                        slug: z.ZodString;
                        description: z.ZodString;
                        longDesc: z.ZodNullable<z.ZodString>;
                        type: z.ZodEnum<["THESIS", "FREELANCE", "STARTUP", "PERSONAL", "ACADEMIC"]>;
                        status: z.ZodEnum<["IN_PROGRESS", "COMPLETED", "ARCHIVED"]>;
                        techStack: z.ZodArray<z.ZodString, "many">;
                        imageUrl: z.ZodNullable<z.ZodString>;
                        repoUrl: z.ZodNullable<z.ZodString>;
                        demoUrl: z.ZodNullable<z.ZodString>;
                        featured: z.ZodBoolean;
                        startDate: z.ZodDate;
                        endDate: z.ZodNullable<z.ZodDate>;
                        createdAt: z.ZodDate;
                        updatedAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        type: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC";
                        status: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
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
                    }, {
                        type: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC";
                        status: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
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
                    }>, "many">;
                    meta: z.ZodObject<{
                        total: z.ZodNumber;
                        page: z.ZodNumber;
                        limit: z.ZodNumber;
                        totalPages: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        page: number;
                        limit: number;
                        total: number;
                        totalPages: number;
                    }, {
                        page: number;
                        limit: number;
                        total: number;
                        totalPages: number;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    data: {
                        type: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC";
                        status: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
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
                        page: number;
                        limit: number;
                        total: number;
                        totalPages: number;
                    };
                }, {
                    data: {
                        type: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC";
                        status: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
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
                        page: number;
                        limit: number;
                        total: number;
                        totalPages: number;
                    };
                }>;
            };
        };
        getBySlug: {
            pathParams: z.ZodObject<{
                slug: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                slug: string;
            }, {
                slug: string;
            }>;
            method: "GET";
            path: string;
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    title: z.ZodString;
                    slug: z.ZodString;
                    description: z.ZodString;
                    longDesc: z.ZodNullable<z.ZodString>;
                    type: z.ZodEnum<["THESIS", "FREELANCE", "STARTUP", "PERSONAL", "ACADEMIC"]>;
                    status: z.ZodEnum<["IN_PROGRESS", "COMPLETED", "ARCHIVED"]>;
                    techStack: z.ZodArray<z.ZodString, "many">;
                    imageUrl: z.ZodNullable<z.ZodString>;
                    repoUrl: z.ZodNullable<z.ZodString>;
                    demoUrl: z.ZodNullable<z.ZodString>;
                    featured: z.ZodBoolean;
                    startDate: z.ZodDate;
                    endDate: z.ZodNullable<z.ZodDate>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    type: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC";
                    status: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
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
                }, {
                    type: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC";
                    status: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
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
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        create: {
            method: "POST";
            body: z.ZodObject<Omit<{
                id: z.ZodNumber;
                title: z.ZodString;
                slug: z.ZodString;
                description: z.ZodString;
                longDesc: z.ZodNullable<z.ZodString>;
                type: z.ZodEnum<["THESIS", "FREELANCE", "STARTUP", "PERSONAL", "ACADEMIC"]>;
                status: z.ZodEnum<["IN_PROGRESS", "COMPLETED", "ARCHIVED"]>;
                techStack: z.ZodArray<z.ZodString, "many">;
                imageUrl: z.ZodNullable<z.ZodString>;
                repoUrl: z.ZodNullable<z.ZodString>;
                demoUrl: z.ZodNullable<z.ZodString>;
                featured: z.ZodBoolean;
                startDate: z.ZodDate;
                endDate: z.ZodNullable<z.ZodDate>;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "id" | "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
                type: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC";
                status: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
                title: string;
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
            }, {
                type: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC";
                status: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
                title: string;
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
            path: string;
            responses: {
                201: z.ZodObject<{
                    id: z.ZodNumber;
                    title: z.ZodString;
                    slug: z.ZodString;
                    description: z.ZodString;
                    longDesc: z.ZodNullable<z.ZodString>;
                    type: z.ZodEnum<["THESIS", "FREELANCE", "STARTUP", "PERSONAL", "ACADEMIC"]>;
                    status: z.ZodEnum<["IN_PROGRESS", "COMPLETED", "ARCHIVED"]>;
                    techStack: z.ZodArray<z.ZodString, "many">;
                    imageUrl: z.ZodNullable<z.ZodString>;
                    repoUrl: z.ZodNullable<z.ZodString>;
                    demoUrl: z.ZodNullable<z.ZodString>;
                    featured: z.ZodBoolean;
                    startDate: z.ZodDate;
                    endDate: z.ZodNullable<z.ZodDate>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    type: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC";
                    status: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
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
                }, {
                    type: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC";
                    status: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
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
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                409: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        update: {
            pathParams: z.ZodObject<{
                id: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            method: "PATCH";
            body: z.ZodObject<{
                type: z.ZodOptional<z.ZodEnum<["THESIS", "FREELANCE", "STARTUP", "PERSONAL", "ACADEMIC"]>>;
                status: z.ZodOptional<z.ZodEnum<["IN_PROGRESS", "COMPLETED", "ARCHIVED"]>>;
                title: z.ZodOptional<z.ZodString>;
                slug: z.ZodOptional<z.ZodString>;
                description: z.ZodOptional<z.ZodString>;
                longDesc: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                techStack: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                repoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                demoUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                featured: z.ZodOptional<z.ZodBoolean>;
                startDate: z.ZodOptional<z.ZodDate>;
                endDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
            }, "strip", z.ZodTypeAny, {
                type?: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC" | undefined;
                status?: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED" | undefined;
                title?: string | undefined;
                slug?: string | undefined;
                description?: string | undefined;
                longDesc?: string | null | undefined;
                techStack?: string[] | undefined;
                imageUrl?: string | null | undefined;
                repoUrl?: string | null | undefined;
                demoUrl?: string | null | undefined;
                featured?: boolean | undefined;
                startDate?: Date | undefined;
                endDate?: Date | null | undefined;
            }, {
                type?: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC" | undefined;
                status?: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED" | undefined;
                title?: string | undefined;
                slug?: string | undefined;
                description?: string | undefined;
                longDesc?: string | null | undefined;
                techStack?: string[] | undefined;
                imageUrl?: string | null | undefined;
                repoUrl?: string | null | undefined;
                demoUrl?: string | null | undefined;
                featured?: boolean | undefined;
                startDate?: Date | undefined;
                endDate?: Date | null | undefined;
            }>;
            path: string;
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    title: z.ZodString;
                    slug: z.ZodString;
                    description: z.ZodString;
                    longDesc: z.ZodNullable<z.ZodString>;
                    type: z.ZodEnum<["THESIS", "FREELANCE", "STARTUP", "PERSONAL", "ACADEMIC"]>;
                    status: z.ZodEnum<["IN_PROGRESS", "COMPLETED", "ARCHIVED"]>;
                    techStack: z.ZodArray<z.ZodString, "many">;
                    imageUrl: z.ZodNullable<z.ZodString>;
                    repoUrl: z.ZodNullable<z.ZodString>;
                    demoUrl: z.ZodNullable<z.ZodString>;
                    featured: z.ZodBoolean;
                    startDate: z.ZodDate;
                    endDate: z.ZodNullable<z.ZodDate>;
                    createdAt: z.ZodDate;
                    updatedAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    type: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC";
                    status: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
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
                }, {
                    type: "THESIS" | "FREELANCE" | "STARTUP" | "PERSONAL" | "ACADEMIC";
                    status: "IN_PROGRESS" | "COMPLETED" | "ARCHIVED";
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
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        delete: {
            pathParams: z.ZodObject<{
                id: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            method: "DELETE";
            body: typeof import("@ts-rest/core").ContractNoBody;
            path: string;
            responses: {
                200: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
    };
    experience: {
        list: {
            query: z.ZodObject<{
                type: z.ZodOptional<z.ZodEnum<["WORK", "INTERNSHIP", "ORGANIZATION", "FREELANCE"]>>;
            }, "strip", z.ZodTypeAny, {
                type?: "FREELANCE" | "WORK" | "INTERNSHIP" | "ORGANIZATION" | undefined;
            }, {
                type?: "FREELANCE" | "WORK" | "INTERNSHIP" | "ORGANIZATION" | undefined;
            }>;
            method: "GET";
            path: string;
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    company: z.ZodString;
                    role: z.ZodString;
                    description: z.ZodString;
                    startDate: z.ZodDate;
                    endDate: z.ZodNullable<z.ZodDate>;
                    isCurrent: z.ZodBoolean;
                    location: z.ZodNullable<z.ZodString>;
                    type: z.ZodEnum<["WORK", "INTERNSHIP", "ORGANIZATION", "FREELANCE"]>;
                }, "strip", z.ZodTypeAny, {
                    type: "FREELANCE" | "WORK" | "INTERNSHIP" | "ORGANIZATION";
                    id: number;
                    location: string | null;
                    description: string;
                    startDate: Date;
                    endDate: Date | null;
                    company: string;
                    role: string;
                    isCurrent: boolean;
                }, {
                    type: "FREELANCE" | "WORK" | "INTERNSHIP" | "ORGANIZATION";
                    id: number;
                    location: string | null;
                    description: string;
                    startDate: Date;
                    endDate: Date | null;
                    company: string;
                    role: string;
                    isCurrent: boolean;
                }>, "many">;
            };
        };
        create: {
            method: "POST";
            body: z.ZodObject<Omit<{
                id: z.ZodNumber;
                company: z.ZodString;
                role: z.ZodString;
                description: z.ZodString;
                startDate: z.ZodDate;
                endDate: z.ZodNullable<z.ZodDate>;
                isCurrent: z.ZodBoolean;
                location: z.ZodNullable<z.ZodString>;
                type: z.ZodEnum<["WORK", "INTERNSHIP", "ORGANIZATION", "FREELANCE"]>;
            }, "id">, "strip", z.ZodTypeAny, {
                type: "FREELANCE" | "WORK" | "INTERNSHIP" | "ORGANIZATION";
                location: string | null;
                description: string;
                startDate: Date;
                endDate: Date | null;
                company: string;
                role: string;
                isCurrent: boolean;
            }, {
                type: "FREELANCE" | "WORK" | "INTERNSHIP" | "ORGANIZATION";
                location: string | null;
                description: string;
                startDate: Date;
                endDate: Date | null;
                company: string;
                role: string;
                isCurrent: boolean;
            }>;
            path: string;
            responses: {
                201: z.ZodObject<{
                    id: z.ZodNumber;
                    company: z.ZodString;
                    role: z.ZodString;
                    description: z.ZodString;
                    startDate: z.ZodDate;
                    endDate: z.ZodNullable<z.ZodDate>;
                    isCurrent: z.ZodBoolean;
                    location: z.ZodNullable<z.ZodString>;
                    type: z.ZodEnum<["WORK", "INTERNSHIP", "ORGANIZATION", "FREELANCE"]>;
                }, "strip", z.ZodTypeAny, {
                    type: "FREELANCE" | "WORK" | "INTERNSHIP" | "ORGANIZATION";
                    id: number;
                    location: string | null;
                    description: string;
                    startDate: Date;
                    endDate: Date | null;
                    company: string;
                    role: string;
                    isCurrent: boolean;
                }, {
                    type: "FREELANCE" | "WORK" | "INTERNSHIP" | "ORGANIZATION";
                    id: number;
                    location: string | null;
                    description: string;
                    startDate: Date;
                    endDate: Date | null;
                    company: string;
                    role: string;
                    isCurrent: boolean;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        update: {
            pathParams: z.ZodObject<{
                id: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            method: "PATCH";
            body: z.ZodObject<{
                type: z.ZodOptional<z.ZodEnum<["WORK", "INTERNSHIP", "ORGANIZATION", "FREELANCE"]>>;
                location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                description: z.ZodOptional<z.ZodString>;
                startDate: z.ZodOptional<z.ZodDate>;
                endDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
                company: z.ZodOptional<z.ZodString>;
                role: z.ZodOptional<z.ZodString>;
                isCurrent: z.ZodOptional<z.ZodBoolean>;
            }, "strip", z.ZodTypeAny, {
                type?: "FREELANCE" | "WORK" | "INTERNSHIP" | "ORGANIZATION" | undefined;
                location?: string | null | undefined;
                description?: string | undefined;
                startDate?: Date | undefined;
                endDate?: Date | null | undefined;
                company?: string | undefined;
                role?: string | undefined;
                isCurrent?: boolean | undefined;
            }, {
                type?: "FREELANCE" | "WORK" | "INTERNSHIP" | "ORGANIZATION" | undefined;
                location?: string | null | undefined;
                description?: string | undefined;
                startDate?: Date | undefined;
                endDate?: Date | null | undefined;
                company?: string | undefined;
                role?: string | undefined;
                isCurrent?: boolean | undefined;
            }>;
            path: string;
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    company: z.ZodString;
                    role: z.ZodString;
                    description: z.ZodString;
                    startDate: z.ZodDate;
                    endDate: z.ZodNullable<z.ZodDate>;
                    isCurrent: z.ZodBoolean;
                    location: z.ZodNullable<z.ZodString>;
                    type: z.ZodEnum<["WORK", "INTERNSHIP", "ORGANIZATION", "FREELANCE"]>;
                }, "strip", z.ZodTypeAny, {
                    type: "FREELANCE" | "WORK" | "INTERNSHIP" | "ORGANIZATION";
                    id: number;
                    location: string | null;
                    description: string;
                    startDate: Date;
                    endDate: Date | null;
                    company: string;
                    role: string;
                    isCurrent: boolean;
                }, {
                    type: "FREELANCE" | "WORK" | "INTERNSHIP" | "ORGANIZATION";
                    id: number;
                    location: string | null;
                    description: string;
                    startDate: Date;
                    endDate: Date | null;
                    company: string;
                    role: string;
                    isCurrent: boolean;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        delete: {
            pathParams: z.ZodObject<{
                id: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            method: "DELETE";
            body: typeof import("@ts-rest/core").ContractNoBody;
            path: string;
            responses: {
                200: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
    };
    education: {
        list: {
            method: "GET";
            path: string;
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    institution: z.ZodString;
                    degree: z.ZodString;
                    field: z.ZodString;
                    startYear: z.ZodNumber;
                    endYear: z.ZodNullable<z.ZodNumber>;
                    isCurrent: z.ZodBoolean;
                    gpa: z.ZodNullable<z.ZodNumber>;
                    description: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    description: string | null;
                    isCurrent: boolean;
                    institution: string;
                    degree: string;
                    field: string;
                    startYear: number;
                    endYear: number | null;
                    gpa: number | null;
                }, {
                    id: number;
                    description: string | null;
                    isCurrent: boolean;
                    institution: string;
                    degree: string;
                    field: string;
                    startYear: number;
                    endYear: number | null;
                    gpa: number | null;
                }>, "many">;
            };
        };
        create: {
            method: "POST";
            body: z.ZodObject<Omit<{
                id: z.ZodNumber;
                institution: z.ZodString;
                degree: z.ZodString;
                field: z.ZodString;
                startYear: z.ZodNumber;
                endYear: z.ZodNullable<z.ZodNumber>;
                isCurrent: z.ZodBoolean;
                gpa: z.ZodNullable<z.ZodNumber>;
                description: z.ZodNullable<z.ZodString>;
            }, "id">, "strip", z.ZodTypeAny, {
                description: string | null;
                isCurrent: boolean;
                institution: string;
                degree: string;
                field: string;
                startYear: number;
                endYear: number | null;
                gpa: number | null;
            }, {
                description: string | null;
                isCurrent: boolean;
                institution: string;
                degree: string;
                field: string;
                startYear: number;
                endYear: number | null;
                gpa: number | null;
            }>;
            path: string;
            responses: {
                201: z.ZodObject<{
                    id: z.ZodNumber;
                    institution: z.ZodString;
                    degree: z.ZodString;
                    field: z.ZodString;
                    startYear: z.ZodNumber;
                    endYear: z.ZodNullable<z.ZodNumber>;
                    isCurrent: z.ZodBoolean;
                    gpa: z.ZodNullable<z.ZodNumber>;
                    description: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    description: string | null;
                    isCurrent: boolean;
                    institution: string;
                    degree: string;
                    field: string;
                    startYear: number;
                    endYear: number | null;
                    gpa: number | null;
                }, {
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
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        update: {
            pathParams: z.ZodObject<{
                id: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            method: "PATCH";
            body: z.ZodObject<{
                description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                isCurrent: z.ZodOptional<z.ZodBoolean>;
                institution: z.ZodOptional<z.ZodString>;
                degree: z.ZodOptional<z.ZodString>;
                field: z.ZodOptional<z.ZodString>;
                startYear: z.ZodOptional<z.ZodNumber>;
                endYear: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                gpa: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            }, "strip", z.ZodTypeAny, {
                description?: string | null | undefined;
                isCurrent?: boolean | undefined;
                institution?: string | undefined;
                degree?: string | undefined;
                field?: string | undefined;
                startYear?: number | undefined;
                endYear?: number | null | undefined;
                gpa?: number | null | undefined;
            }, {
                description?: string | null | undefined;
                isCurrent?: boolean | undefined;
                institution?: string | undefined;
                degree?: string | undefined;
                field?: string | undefined;
                startYear?: number | undefined;
                endYear?: number | null | undefined;
                gpa?: number | null | undefined;
            }>;
            path: string;
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    institution: z.ZodString;
                    degree: z.ZodString;
                    field: z.ZodString;
                    startYear: z.ZodNumber;
                    endYear: z.ZodNullable<z.ZodNumber>;
                    isCurrent: z.ZodBoolean;
                    gpa: z.ZodNullable<z.ZodNumber>;
                    description: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    description: string | null;
                    isCurrent: boolean;
                    institution: string;
                    degree: string;
                    field: string;
                    startYear: number;
                    endYear: number | null;
                    gpa: number | null;
                }, {
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
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        delete: {
            pathParams: z.ZodObject<{
                id: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            method: "DELETE";
            body: typeof import("@ts-rest/core").ContractNoBody;
            path: string;
            responses: {
                200: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
    };
    certificates: {
        list: {
            method: "GET";
            path: string;
            responses: {
                200: z.ZodArray<z.ZodObject<{
                    id: z.ZodNumber;
                    title: z.ZodString;
                    issuer: z.ZodString;
                    issuedAt: z.ZodDate;
                    expiredAt: z.ZodNullable<z.ZodDate>;
                    credentialUrl: z.ZodNullable<z.ZodString>;
                    imageUrl: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    title: string;
                    imageUrl: string | null;
                    issuer: string;
                    issuedAt: Date;
                    expiredAt: Date | null;
                    credentialUrl: string | null;
                }, {
                    id: number;
                    title: string;
                    imageUrl: string | null;
                    issuer: string;
                    issuedAt: Date;
                    expiredAt: Date | null;
                    credentialUrl: string | null;
                }>, "many">;
            };
        };
        create: {
            method: "POST";
            body: z.ZodObject<Omit<{
                id: z.ZodNumber;
                title: z.ZodString;
                issuer: z.ZodString;
                issuedAt: z.ZodDate;
                expiredAt: z.ZodNullable<z.ZodDate>;
                credentialUrl: z.ZodNullable<z.ZodString>;
                imageUrl: z.ZodNullable<z.ZodString>;
            }, "id">, "strip", z.ZodTypeAny, {
                title: string;
                imageUrl: string | null;
                issuer: string;
                issuedAt: Date;
                expiredAt: Date | null;
                credentialUrl: string | null;
            }, {
                title: string;
                imageUrl: string | null;
                issuer: string;
                issuedAt: Date;
                expiredAt: Date | null;
                credentialUrl: string | null;
            }>;
            path: string;
            responses: {
                201: z.ZodObject<{
                    id: z.ZodNumber;
                    title: z.ZodString;
                    issuer: z.ZodString;
                    issuedAt: z.ZodDate;
                    expiredAt: z.ZodNullable<z.ZodDate>;
                    credentialUrl: z.ZodNullable<z.ZodString>;
                    imageUrl: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    title: string;
                    imageUrl: string | null;
                    issuer: string;
                    issuedAt: Date;
                    expiredAt: Date | null;
                    credentialUrl: string | null;
                }, {
                    id: number;
                    title: string;
                    imageUrl: string | null;
                    issuer: string;
                    issuedAt: Date;
                    expiredAt: Date | null;
                    credentialUrl: string | null;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        update: {
            pathParams: z.ZodObject<{
                id: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            method: "PATCH";
            body: z.ZodObject<{
                title: z.ZodOptional<z.ZodString>;
                imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                issuer: z.ZodOptional<z.ZodString>;
                issuedAt: z.ZodOptional<z.ZodDate>;
                expiredAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
                credentialUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                title?: string | undefined;
                imageUrl?: string | null | undefined;
                issuer?: string | undefined;
                issuedAt?: Date | undefined;
                expiredAt?: Date | null | undefined;
                credentialUrl?: string | null | undefined;
            }, {
                title?: string | undefined;
                imageUrl?: string | null | undefined;
                issuer?: string | undefined;
                issuedAt?: Date | undefined;
                expiredAt?: Date | null | undefined;
                credentialUrl?: string | null | undefined;
            }>;
            path: string;
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    title: z.ZodString;
                    issuer: z.ZodString;
                    issuedAt: z.ZodDate;
                    expiredAt: z.ZodNullable<z.ZodDate>;
                    credentialUrl: z.ZodNullable<z.ZodString>;
                    imageUrl: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    id: number;
                    title: string;
                    imageUrl: string | null;
                    issuer: string;
                    issuedAt: Date;
                    expiredAt: Date | null;
                    credentialUrl: string | null;
                }, {
                    id: number;
                    title: string;
                    imageUrl: string | null;
                    issuer: string;
                    issuedAt: Date;
                    expiredAt: Date | null;
                    credentialUrl: string | null;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        delete: {
            pathParams: z.ZodObject<{
                id: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            method: "DELETE";
            body: typeof import("@ts-rest/core").ContractNoBody;
            path: string;
            responses: {
                200: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
    };
    contact: {
        send: {
            method: "POST";
            body: z.ZodObject<Omit<{
                id: z.ZodNumber;
                name: z.ZodString;
                email: z.ZodString;
                subject: z.ZodString;
                message: z.ZodString;
                isRead: z.ZodBoolean;
                createdAt: z.ZodDate;
            }, "id" | "createdAt" | "isRead">, "strip", z.ZodTypeAny, {
                message: string;
                name: string;
                email: string;
                subject: string;
            }, {
                message: string;
                name: string;
                email: string;
                subject: string;
            }>;
            path: string;
            responses: {
                201: z.ZodObject<{
                    message: z.ZodString;
                    id: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                    id: number;
                }, {
                    message: string;
                    id: number;
                }>;
                400: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        list: {
            query: z.ZodObject<{
                page: z.ZodDefault<z.ZodNumber>;
                limit: z.ZodDefault<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                page: number;
                limit: number;
            }, {
                page?: number | undefined;
                limit?: number | undefined;
            }>;
            method: "GET";
            path: string;
            responses: {
                200: z.ZodObject<{
                    data: z.ZodArray<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        email: z.ZodString;
                        subject: z.ZodString;
                        message: z.ZodString;
                        isRead: z.ZodBoolean;
                        createdAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        id: number;
                        name: string;
                        email: string;
                        createdAt: Date;
                        subject: string;
                        isRead: boolean;
                    }, {
                        message: string;
                        id: number;
                        name: string;
                        email: string;
                        createdAt: Date;
                        subject: string;
                        isRead: boolean;
                    }>, "many">;
                    meta: z.ZodObject<{
                        total: z.ZodNumber;
                        page: z.ZodNumber;
                        limit: z.ZodNumber;
                        totalPages: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        page: number;
                        limit: number;
                        total: number;
                        totalPages: number;
                    }, {
                        page: number;
                        limit: number;
                        total: number;
                        totalPages: number;
                    }>;
                }, "strip", z.ZodTypeAny, {
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
                        page: number;
                        limit: number;
                        total: number;
                        totalPages: number;
                    };
                }, {
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
                        page: number;
                        limit: number;
                        total: number;
                        totalPages: number;
                    };
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        unreadSummary: {
            method: "GET";
            path: string;
            responses: {
                200: z.ZodObject<{
                    count: z.ZodNumber;
                    latest: z.ZodNullable<z.ZodObject<{
                        id: z.ZodNumber;
                        name: z.ZodString;
                        subject: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        id: number;
                        name: string;
                        subject: string;
                    }, {
                        id: number;
                        name: string;
                        subject: string;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    count: number;
                    latest: {
                        id: number;
                        name: string;
                        subject: string;
                    } | null;
                }, {
                    count: number;
                    latest: {
                        id: number;
                        name: string;
                        subject: string;
                    } | null;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        markRead: {
            pathParams: z.ZodObject<{
                id: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            method: "PATCH";
            body: typeof import("@ts-rest/core").ContractNoBody;
            path: string;
            responses: {
                200: z.ZodObject<{
                    id: z.ZodNumber;
                    name: z.ZodString;
                    email: z.ZodString;
                    subject: z.ZodString;
                    message: z.ZodString;
                    isRead: z.ZodBoolean;
                    createdAt: z.ZodDate;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                    id: number;
                    name: string;
                    email: string;
                    createdAt: Date;
                    subject: string;
                    isRead: boolean;
                }, {
                    message: string;
                    id: number;
                    name: string;
                    email: string;
                    createdAt: Date;
                    subject: string;
                    isRead: boolean;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
        delete: {
            pathParams: z.ZodObject<{
                id: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                id: number;
            }, {
                id: number;
            }>;
            method: "DELETE";
            body: typeof import("@ts-rest/core").ContractNoBody;
            path: string;
            responses: {
                200: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                401: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
                404: z.ZodObject<{
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                }, {
                    message: string;
                }>;
            };
        };
    };
};
