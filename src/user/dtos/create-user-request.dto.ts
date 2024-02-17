import { CreateUserContactRequestDto } from '@user-contact/dtos/create-user-contact-request.dto';

export class CreateUserRequestDto {
  email: string;

  name?: string;

  contacts?: CreateUserContactRequestDto[];
}
