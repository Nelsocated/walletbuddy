export type Period = 'weekly' | 'monthly';

export interface createBudget {
  userId: number;
  limit: number;
  period: Period;
}
export interface Budget extends createBudget {
  id: number;
  createdAt: Date;
}
