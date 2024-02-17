import { Global, Module } from '@nestjs/common';
import { PrismaTransactionExecutor } from './prisma-transaction.executor';
import { PrismaRepository } from './prisma.repository';
import { PrismaService } from './prisma.service';
import { TransactionalInterceptor } from './transactional.interceptor';

@Global()
@Module({
  providers: [
    PrismaService,
    PrismaRepository,
    TransactionalInterceptor,
    PrismaTransactionExecutor,
  ],
  exports: [
    PrismaService,
    PrismaRepository,
    TransactionalInterceptor,
    PrismaTransactionExecutor,
  ],
})
export class PrismaModule {}
