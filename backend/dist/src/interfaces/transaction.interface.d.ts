type TransactionType = 'expense' | 'income';
type TrCategory = 'food' | 'transport' | 'shopping' | 'utilities' | 'work' | 'health' | 'allowance' | 'salary' | 'gift' | 'refund' | 'others';
export interface createTr {
    type: TransactionType;
    amount: number;
    category: TrCategory;
    note?: string | null;
}
export interface Transaction extends createTr {
    id: number;
    userId: number;
    createdAt: Date;
}
export {};
