import { TransactionsService } from './transactions.service';
import { createTr, Transaction } from "../interfaces/transaction.interface";
export declare class TransactionsController {
    private trService;
    constructor(trService: TransactionsService);
    addTr(body: {
        userId: number;
        tr: Transaction;
    }): Promise<createTr>;
    getUserTr(userId: number): Promise<Transaction[]>;
    getExpToday(userId: number): Promise<Transaction[]>;
    getExpMonth(userId: number): Promise<number>;
    getTotalExp(userId: number): Promise<number>;
    deleteTr(id: number): Promise<Transaction>;
}
