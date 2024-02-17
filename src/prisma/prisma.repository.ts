import { Injectable, Scope } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable({ scope: Scope.REQUEST })
export class PrismaRepository {
  private prismaInTransactionInstance: PrismaClient;

  constructor(private readonly prismaService: PrismaService) {}

  prisma(): PrismaClient {
    if (this.prismaInTransactionInstance) {
      console.log('usando transacao');
      return this.prismaInTransactionInstance;
    }
    console.log('usando instancia injetada');
    return this.prismaService;
  }

  setPrismaInTransactionInstance(
    prismaInTransactionInstance: PrismaClient,
  ): void {
    this.prismaInTransactionInstance = prismaInTransactionInstance;
  }
}
