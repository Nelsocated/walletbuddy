import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { createBudget, Period } from 'src/interfaces/budget.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BudgetsService {
  constructor(private prisma: PrismaService) {}

  async getBudget(userId: number): Promise<{
    limit: { weekly: number; monthly: number };
    remaining: { weekly: number; monthly: number };
  }> {
    try {
      const [weekly, monthly, spent] = await Promise.all([
        this.prisma.budget.findUnique({
          where: { userId, period: 'weekly' },
          select: { limit: true },
        }),
        this.prisma.budget.findUnique({
          where: { userId, period: 'monthly' },
          select: { limit: true },
        }),
        this.prisma.transaction.aggregate({
          where: { userId, type: 'expense' },
          _sum: { amount: true },
        }),
      ]);

      const weeklyLim = weekly?.limit ?? 0;
      const monthlyLim = monthly?.limit ?? 0;
      const weeklyRem = weeklyLim - (spent._sum.amount ?? 0);
      const monthlyRem = monthlyLim - (spent._sum.amount ?? 0);

      return {
        limit: { weekly: weeklyLim, monthly: monthlyLim },
        remaining: { weekly: weeklyRem, monthly: monthlyRem },
      };
    } catch {
      throw new InternalServerErrorException('Failed to fetch budget.');
    }
  }

  async setLimit(
    userId: number,
    limit: number,
    period: Period,
  ): Promise<createBudget> {
    try {
      return this.prisma.budget.upsert({
        where: { userId },
        update: { limit, period },
        create: { userId, limit, period },
      });
    } catch {
      throw new InternalServerErrorException('Failed to set user limit.');
    }
  }
}
