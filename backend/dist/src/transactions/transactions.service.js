"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TransactionsService = class TransactionsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUserTransaction(userId) {
        try {
            return this.prisma.transaction.findMany({
                where: { userId },
                orderBy: { createdAt: 'desc' },
            });
        }
        catch {
            throw new common_1.InternalServerErrorException("Failed to fetch user's transactions.");
        }
    }
    async getUserTodayExpense(userId) {
        try {
            const today = new Date();
            const start = new Date(today.setHours(0, 0, 0, 0));
            const end = new Date(today.setHours(23, 59, 59, 999));
            return this.prisma.transaction.findMany({
                where: { userId, type: 'expense', createdAt: { gte: start, lte: end } },
                orderBy: { createdAt: 'desc' },
            });
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to fetch today expenses.');
        }
    }
    async getTotalExpenseMonth(userId) {
        try {
            const today = new Date();
            const start = new Date(today.getFullYear(), today.getMonth(), 1);
            const end = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59);
            const expense = this.prisma.transaction.aggregate({
                where: { userId, type: 'expense', createdAt: { gte: start, lte: end } },
                _sum: { amount: true },
            });
            return (await expense)._sum.amount ?? 0;
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to fetch total expenses this month.');
        }
    }
    async getTotalExpense(userId) {
        try {
            const expense = await this.prisma.transaction.aggregate({
                where: { userId, type: 'expense' },
                _sum: {
                    amount: true,
                },
            });
            return expense._sum.amount ?? 0;
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to fetch total expenses.');
        }
    }
    async addTransaction(userId, tr) {
        try {
            return this.prisma.$transaction(async (tx) => {
                const user = await tx.user.findUnique({
                    where: { id: userId },
                });
                if (!user) {
                    throw new Error('User not found.');
                }
                else if (tr.type === 'expense' && user.balance < tr.amount) {
                    throw new Error('Not enough balance!');
                }
                const addTr = await tx.transaction.create({
                    data: { ...tr, userId },
                });
                const newBalance = tr.type === 'expense'
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
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to add transaction.');
        }
    }
    async deleteTr(id) {
        try {
            return this.prisma.transaction.delete({
                where: { id },
            });
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to delete this transaction.');
        }
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map