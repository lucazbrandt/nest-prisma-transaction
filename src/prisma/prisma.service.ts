import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      log: ['query', 'info', 'warn'],
    });
  }
  async onModuleInit() {
    console.log('conectando prisma!');
    await this.$connect();
  }
}
