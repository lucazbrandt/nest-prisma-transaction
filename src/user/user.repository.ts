import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'src/prisma/prisma.repository';
import { UserEntity } from './entities/user.entity';
import { CreateUserRequestDto } from './dtos/create-user-request.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaRepository: PrismaRepository) {}

  async create(request: CreateUserRequestDto): Promise<UserEntity> {
    const data = {
      email: request.email,
      name: request.name,
    };
    return this.prismaRepository.prisma().user.create({ data });
  }
}
