"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const users_module_1 = require("./users/users.module");
const transactions_module_1 = require("./transactions/transactions.module");
const budgets_service_1 = require("./budgets/budgets.service");
const budgets_controller_1 = require("./budgets/budgets.controller");
const budgets_module_1 = require("./budgets/budgets.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, users_module_1.UsersModule, transactions_module_1.TransactionsModule, budgets_module_1.BudgetsModule],
        controllers: [app_controller_1.AppController, budgets_controller_1.BudgetsController],
        providers: [app_service_1.AppService, budgets_service_1.BudgetsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map