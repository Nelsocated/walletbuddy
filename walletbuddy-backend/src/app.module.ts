import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';
import { BudgetsService } from './budgets/budgets.service';
import { BudgetsController } from './budgets/budgets.controller';
import { BudgetsModule } from './budgets/budgets.module';

@Module({
  imports: [PrismaModule, UsersModule, TransactionsModule, BudgetsModule],
  controllers: [AppController, BudgetsController],
  providers: [AppService, BudgetsService],
})
export class AppModule {}
