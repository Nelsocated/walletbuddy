import { createBudget, Period } from "../interfaces/budget.interface";
import { PrismaService } from "../prisma/prisma.service";
export declare class BudgetsService {
    private prisma;
    constructor(prisma: PrismaService);
    getBudget(userId: number): Promise<{
        limit: {
            weekly: number;
            monthly: number;
        };
        remaining: {
            weekly: number;
            monthly: number;
        };
    }>;
    setLimit(userId: number, limit: number, period: Period): Promise<createBudget>;
}
