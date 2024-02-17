import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserContactRequestDto } from './dtos/create-user-contact-request.dto';
import { UserContactRepository } from './user-contact.repository';

@Injectable()
export class UserContactService {
  constructor(private readonly userContactRepository: UserContactRepository) {}

  async createMany(
    userId: number,
    contacts: CreateUserContactRequestDto[],
  ): Promise<void> {
    if (!contacts) {
      return;
    }

    await Promise.all(
      contacts.map(async (contact) => {
        if (!contact.contact) {
          throw new UnprocessableEntityException('Contact cannot be empty');
        }
        // se não tiver o await da crash na aplicacao
        // pois ele executa todas as promise e pode acontecer da transacao já estar fechada
        await this.userContactRepository.create(userId, contact);
      }),
    );
  }
}
