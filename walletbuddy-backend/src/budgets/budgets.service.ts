import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { createBudget, Period } from 'src/interfaces/budget.interface';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BudgetsService {
  constructor(private prisma: PrismaService) {}

  async getBudget(
    userId: number,
  ): Promise<{ limit: number; remaining: number }> {
    try {
      const [budget, spent] = await Promise.all([
        this.prisma.budget.findUnique({
          where: { userId },
          select: { limit: true },
        }),
        this.prisma.transaction.aggregate({
          where: { userId, type: 'expense' },
          _sum: { amount: true },
        }),
      ]);

      const limit = budget?.limit ?? 0;
      const remaining = limit - (spent._sum.amount ?? 0);

      return { limit, remaining };
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
