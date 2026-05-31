import { PrismaService } from "../prisma/prisma.service";
import { createTr, Transaction } from "../interfaces/transaction.interface";
export declare class TransactionsService {
    private prisma;
    constructor(prisma: PrismaService);
    getUserTransaction(userId: number): Promise<Transaction[]>;
    getUserTodayExpense(userId: number): Promise<Transaction[]>;
    getTotalExpenseMonth(userId: number): Promise<number>;
    getTotalExpense(userId: number): Promise<number>;
    addTransaction(userId: number, tr: Transaction): Promise<createTr>;
    deleteTr(id: number): Promise<Transaction>;
}
