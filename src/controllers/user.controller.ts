import { Body, Controller, Get, Post, HttpCode } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { CreateUserDTO } from 'src/dtos/UserDTO';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('/sign-up')
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('/sign-up')
  @HttpCode(200)
  createUser(@Body() body: CreateUserDTO) {
    return this.userService.create(body);
  }

}