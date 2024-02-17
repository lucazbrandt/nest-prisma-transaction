import { Injectable } from '@nestjs/common';
import { UserContactService } from 'src/user-contact/user-contact.service';
import { CreateUserResponseDto } from './dtos/create-user-response.dto';
import { UserRepository } from './user.repository';
import { CreateUserRequestDto } from './dtos/create-user-request.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userContactService: UserContactService,
  ) {}

  async create(request: CreateUserRequestDto): Promise<CreateUserResponseDto> {
    const persistedUser = await this.userRepository.create(request);

    await this.userContactService.createMany(
      persistedUser.id,
      request.contacts,
    );

    return { id: persistedUser.id };
  }
}
