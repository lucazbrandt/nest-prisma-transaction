import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'src/prisma/prisma.repository';
import { CreateUserContactRequestDto } from './dtos/create-user-contact-request.dto';

@Injectable()
export class UserContactRepository {
  constructor(private readonly prismaRepository: PrismaRepository) {}

  async create(
    userId: number,
    request: CreateUserContactRequestDto,
  ): Promise<void> {
    const data = {
      userId,
      ...request,
    };

    await this.prismaRepository.prisma().userContact.create({ data });
  }
}
