import { Request, Response, NextFunction } from "express";
export interface AdminPayload {
    id: number;
    email: string;
}
declare global {
    namespace Express {
        interface Request {
            admin?: AdminPayload;
        }
    }
}
export declare function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<void>;
export declare function apiKeyMiddleware(req: Request, res: Response, next: NextFunction): void;
