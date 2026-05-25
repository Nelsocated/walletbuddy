import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    console.log('DATABASE_URL:', process.env.DATABASE_URL);

    const pool = new Pool({
      host: 'localhost',
      port: 5432,
      user: 'nelsocated',
      password: '120lago114',
      database: 'walletbuddy',
      ssl: false,
    });

    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
