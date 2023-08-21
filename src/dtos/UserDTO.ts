import { IsNotEmpty, IsString, IsStrongPassword, IsUrl } from "class-validator";
import User from "src/entities/User";

export class CreateUserDTO {

  @IsNotEmpty()
  username: string;

  @IsUrl()
  avatar: string;



  toUser() {
    return new User(this.avatar,this.username);
  }
}