import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User, Create } from 'src/interfaces/user.interface';
import * as bcrpt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(user: Create): Promise<Create> {
    try {
      const hashed = await bcrpt.hash(user.password, 10);
      return await this.prisma.user.create({
        data: { ...user, password: hashed },
      });
    } catch {
      throw new InternalServerErrorException('Failed to create user.');
    }
  }
  async login(email: string, password: string): Promise<User | null> {
    try {
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
    } catch {
      throw new InternalServerErrorException('Failed to fetch user.');
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      return await this.prisma.user.findMany({
        select: {
          id: true,
          email: true,
          name: true,
          balance: true,
          createdAt: true,
        },
      });
    } catch {
      throw new InternalServerErrorException('Failed to fetch all users.');
    }
  }
  async getUser(id: number): Promise<User | null> {
    try {
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
    } catch {
      throw new InternalServerErrorException('Failed to fetch user.');
    }
  }
}
