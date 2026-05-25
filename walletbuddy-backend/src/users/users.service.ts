import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/interfaces/user.interface';
import * as bcrpt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(user: User) {
    const hashed = await bcrpt.hash(user.password, 10);
    return await this.prisma.user.create({
      data: { ...user, password: hashed },
    });
  }
  async login(email: string, password: string) {
    const found = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!found) {
      throw new Error('No user found.');
    }
    const isMatch = await bcrpt.compare(password, found.password);
    if (!isMatch) {
      throw new Error("Password doesn't match.");
    }

    return this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        balance: true,
        createdAt: true,
      },
    });
  }

  async getAllUsers() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        balance: true,
        createdAt: true,
      },
    });
  }
  async getUsers(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        balance: true,
        createdAt: true,
      },
    });
  }
}
