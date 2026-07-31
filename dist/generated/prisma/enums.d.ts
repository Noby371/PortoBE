export declare const SkillCategory: {
    readonly BACKEND: "BACKEND";
    readonly FRONTEND: "FRONTEND";
    readonly MOBILE: "MOBILE";
    readonly DATABASE: "DATABASE";
    readonly DEVOPS: "DEVOPS";
    readonly IOT: "IOT";
    readonly TOOLS: "TOOLS";
    readonly OTHER: "OTHER";
};
export type SkillCategory = (typeof SkillCategory)[keyof typeof SkillCategory];
export declare const ProjectType: {
    readonly THESIS: "THESIS";
    readonly FREELANCE: "FREELANCE";
    readonly STARTUP: "STARTUP";
    readonly PERSONAL: "PERSONAL";
    readonly ACADEMIC: "ACADEMIC";
};
export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType];
export declare const ProjectStatus: {
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly ARCHIVED: "ARCHIVED";
};
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];
export declare const ExperienceType: {
    readonly WORK: "WORK";
    readonly INTERNSHIP: "INTERNSHIP";
    readonly ORGANIZATION: "ORGANIZATION";
    readonly FREELANCE: "FREELANCE";
};
export type ExperienceType = (typeof ExperienceType)[keyof typeof ExperienceType];
