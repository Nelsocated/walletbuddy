import { UsersService } from './users.service';
import type { User, Create } from "../interfaces/user.interface";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(user: Create): Promise<Create>;
    login(body: {
        email: string;
        password: string;
    }): Promise<User | null>;
    getAll(): Promise<User[]>;
    getOne(id: string): Promise<User | null>;
}
