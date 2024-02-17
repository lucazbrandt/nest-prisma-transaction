import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { PrismaTransactionExecutor } from './prisma-transaction.executor';

@Injectable()
export class TransactionalInterceptor implements NestInterceptor {
  constructor(private readonly executor: PrismaTransactionExecutor) {}

  intercept(
    _: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return this.executor.executeInTransaction(next.handle());
  }
}
