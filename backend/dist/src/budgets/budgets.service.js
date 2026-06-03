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
exports.BudgetsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BudgetsService = class BudgetsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getBudget(userId) {
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
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to fetch budget.');
        }
    }
    async setLimit(userId, limit, period) {
        try {
            return this.prisma.budget.upsert({
                where: { userId },
                update: { limit, period },
                create: { userId, limit, period },
            });
        }
        catch {
            throw new common_1.InternalServerErrorException('Failed to set user limit.');
        }
    }
};
exports.BudgetsService = BudgetsService;
exports.BudgetsService = BudgetsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BudgetsService);
//# sourceMappingURL=budgets.service.js.map