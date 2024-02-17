import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { UserContactModule } from './user-contact/user-contact.module';

@Module({
  imports: [PrismaModule, UserModule, UserContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
