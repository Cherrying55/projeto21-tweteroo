import { Injectable } from '@nestjs/common';
import User from 'src/entities/User';
import { CreateUserDTO } from 'src/dtos/UserDTO';

@Injectable()
export class UserService {

  private users: User[]

  constructor() {
    let ar : User[] = []
    this.users = ar;
  }

  getUsers() {
    return this.users;
  }

  create(userDTO: CreateUserDTO) {
    this.users.push(userDTO.toUser());
  }

}