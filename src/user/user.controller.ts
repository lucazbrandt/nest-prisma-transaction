import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { TransactionalInterceptor } from 'src/prisma/transactional.interceptor';
import { CreateUserRequestDto } from './dtos/create-user-request.dto';
import { CreateUserResponseDto } from './dtos/create-user-response.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sem')
  async criaUsuarioSemTransacao(
    @Body() request: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    const result = await this.userService.create(request);

    return result;
  }

  @Post()
  @UseInterceptors(TransactionalInterceptor)
  async criaUsuarioComTransacao(
    @Body() request: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    // const result = await this.userService.create(request);

    // return result;
    return this.userService.create(request);
  }
}
