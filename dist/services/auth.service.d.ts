export declare class AuthService {
    login(email: string, password: string): Promise<{
        token: string;
        admin: {
            id: number;
            email: string;
            name: string | undefined;
        };
    } | null>;
    me(id: number): Promise<{
        id: number;
        email: string;
        lastLoginAt: Date | null;
    } | null>;
}
