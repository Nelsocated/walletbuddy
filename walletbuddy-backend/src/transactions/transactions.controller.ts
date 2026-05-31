import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { createTr, Transaction } from 'src/interfaces/transaction.interface';

@Controller('transactions')
export class TransactionsController {
  constructor(private trService: TransactionsService) {}

  @Post()
  async addTr(
    @Body() body: { userId: number; tr: Transaction },
  ): Promise<createTr> {
    return this.trService.addTransaction(body.userId, body.tr);
  }

  @Get(':userId')
  async getUserTr(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<Transaction[]> {
    return this.trService.getUserTransaction(userId);
  }
  @Get(':userId/today-expenses')
  async getExpToday(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<Transaction[]> {
    return this.trService.getUserTodayExpense(userId);
  }
  @Get(':userId/month-expenses')
  async getExpMonth(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<number> {
    return this.trService.getTotalExpenseMonth(userId);
  }
  @Get(':userId/total-expenses')
  async getTotalExp(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<number> {
    return this.trService.getTotalExpense(userId);
  }

  @Delete(':id')
  async deleteTr(@Param('id', ParseIntPipe) id: number): Promise<Transaction> {
    return this.trService.deleteTr(id);
  }
}
