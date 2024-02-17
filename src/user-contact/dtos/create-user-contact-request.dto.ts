import { UserContactType } from '../enums/user-contact-type.enum';

export class CreateUserContactRequestDto {
  contact: string;
  type: UserContactType;
}
