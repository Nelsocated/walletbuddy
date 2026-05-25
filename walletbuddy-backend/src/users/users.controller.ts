import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import type { User } from 'src/interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('register')
  async create(@Body() user: User) {
    return this.usersService.create(user);
  }
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.usersService.login(body.email, body.password);
  }

  @Get()
  async getAll() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.usersService.getUsers(+id);
  }
}
