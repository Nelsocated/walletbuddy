import {
  Controller,
  Param,
  ParseIntPipe,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { createBudget, Period } from 'src/interfaces/budget.interface';

@Controller('budgets')
export class BudgetsController {
  constructor(private btService: BudgetsService) {}

  @Get(':userId')
  async getBudget(@Param('userId', ParseIntPipe) userId: number): Promise<{
    limit: { weekly: number; monthly: number };
    remaining: { weekly: number; monthly: number };
  }> {
    return this.btService.getBudget(userId);
  }

  @Post()
  async setLimit(
    @Body() body: { userId: number; limit: number; period: Period },
  ): Promise<createBudget> {
    return this.btService.setLimit(body.userId, body.limit, body.period);
  }
}
