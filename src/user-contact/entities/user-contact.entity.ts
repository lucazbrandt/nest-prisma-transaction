import { UserContactType } from '@user-contact/enums/user-contact-type.enum';

export class UserContacEntity {
  userId: number;
  contact: string;
  type: UserContactType;
}
