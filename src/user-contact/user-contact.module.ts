import { Module } from '@nestjs/common';
import { UserContactRepository } from './user-contact.repository';
import { UserContactService } from './user-contact.service';

@Module({
  providers: [UserContactService, UserContactRepository],
  exports: [UserContactService],
})
export class UserContactModule {}
