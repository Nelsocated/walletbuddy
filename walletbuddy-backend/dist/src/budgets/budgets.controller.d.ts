import { BudgetsService } from './budgets.service';
import { createBudget, Period } from "../interfaces/budget.interface";
export declare class BudgetsController {
    private btService;
    constructor(btService: BudgetsService);
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
    setLimit(body: {
        userId: number;
        limit: number;
        period: Period;
    }): Promise<createBudget>;
}
