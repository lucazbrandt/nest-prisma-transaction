import { Injectable } from '@nestjs/common';
import { PrismaRepository } from './prisma.repository';
import { Observable, lastValueFrom, of } from 'rxjs';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaTransactionExecutor {
  constructor(
    private readonly prismaRepository: PrismaRepository,
    private readonly prismaService: PrismaService,
  ) {}

  async executeInTransaction(
    process: Observable<Promise<any>>,
  ): Promise<Observable<any>> {
    const result = await this.prismaService.$transaction(
      async (tx: PrismaClient) => {
        this.prismaRepository.setPrismaInTransactionInstance(tx);

        const processResult = await lastValueFrom(process);

        return processResult;
      },
    );

    return of(result);
  }
}
