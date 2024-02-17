import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { PrismaTransactionRunner } from './prisma-transaction.runner';

@Injectable()
export class TransactionalInterceptor implements NestInterceptor {
  constructor(private readonly executor: PrismaTransactionRunner) {}

  intercept(
    _: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return this.executor.run(next.handle());
  }
}
