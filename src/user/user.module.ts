import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserContactModule } from '@user-contact/user-contact.module';

@Module({
  imports: [UserContactModule],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}
