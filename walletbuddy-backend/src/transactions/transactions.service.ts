import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createTr, Transaction } from 'src/interfaces/transaction.interface';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async getUserTransaction(userId: number): Promise<Transaction[]> {
    try {
      return this.prisma.transaction.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      });
    } catch {
      throw new InternalServerErrorException(
        "Failed to fetch user's transactions.",
      );
    }
  }
  async getUserTodayExpense(userId: number): Promise<Transaction[]> {
    try {
      const today = new Date();
      const start = new Date(today.setHours(0, 0, 0, 0));
      const end = new Date(today.setHours(23, 59, 59, 999));

      return this.prisma.transaction.findMany({
        where: { userId, type: 'expense', createdAt: { gte: start, lte: end } },
        orderBy: { createdAt: 'desc' },
      });
    } catch {
      throw new InternalServerErrorException('Failed to fetch today expenses.');
    }
  }
  async getTotalExpenseMonth(userId: number): Promise<number> {
    try {
      const today = new Date();
      const start = new Date(today.getFullYear(), today.getMonth(), 1);
      const end = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0,
        23,
        59,
        59,
      );

      const expense = this.prisma.transaction.aggregate({
        where: { userId, type: 'expense', createdAt: { gte: start, lte: end } },
        _sum: { amount: true },
      });

      return (await expense)._sum.amount ?? 0;
    } catch {
      throw new InternalServerErrorException(
        'Failed to fetch total expenses this month.',
      );
    }
  }
  async getTotalExpense(userId: number): Promise<number> {
    try {
      const expense = await this.prisma.transaction.aggregate({
        where: { userId, type: 'expense' },
        _sum: {
          amount: true,
        },
      });

      return expense._sum.amount ?? 0;
    } catch {
      throw new InternalServerErrorException('Failed to fetch total expenses.');
    }
  }

  async addTransaction(userId: number, tr: Transaction): Promise<createTr> {
    try {
      return this.prisma.$transaction(async (tx) => {
        const user = await tx.user.findUnique({
          where: { id: userId },
        });

        if (!user) {
          throw new Error('User not found.');
        } else if (tr.type === 'expense' && user.balance < tr.amount) {
          throw new Error('Not enough balance!');
        }

        const addTr = await tx.transaction.create({
          data: { ...tr, userId },
        });

        const newBalance =
          tr.type === 'expense'
            ? user.balance - tr.amount
            : user.balance + tr.amount;

        await tx.user.update({
          where: { id: userId },
          data: {
            balance: newBalance,
          },
        });

        return addTr;
      });
    } catch {
      throw new InternalServerErrorException('Failed to add transaction.');
    }
  }

  async deleteTr(id: number): Promise<Transaction> {
    try {
      return this.prisma.transaction.delete({
        where: { id },
      });
    } catch {
      throw new InternalServerErrorException(
        'Failed to delete this transaction.',
      );
    }
  }
}
