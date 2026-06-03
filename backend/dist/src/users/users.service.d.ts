import { PrismaService } from "../prisma/prisma.service";
import { User, Create } from "../interfaces/user.interface";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(user: Create): Promise<Create>;
    login(email: string, password: string): Promise<User | null>;
    getAllUsers(): Promise<User[]>;
    getUser(id: number): Promise<User | null>;
}
