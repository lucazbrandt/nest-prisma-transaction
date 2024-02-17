import { Global, Module } from '@nestjs/common';
import { PrismaTransactionRunner } from './prisma-transaction.runner';
import { PrismaRepository } from './prisma.repository';
import { PrismaService } from './prisma.service';
import { TransactionalInterceptor } from './transactional.interceptor';

@Global()
@Module({
  providers: [
    PrismaService,
    PrismaRepository,
    TransactionalInterceptor,
    PrismaTransactionRunner,
  ],
  exports: [
    PrismaService,
    PrismaRepository,
    TransactionalInterceptor,
    PrismaTransactionRunner,
  ],
})
export class PrismaModule {}
