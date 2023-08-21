import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dtos/UserDTO';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post()
   create(@Body() createUserDto: CreateUserDTO) {
     return 'This action adds a new user';
   }

}
