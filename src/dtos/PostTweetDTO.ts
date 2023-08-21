import { Body } from "@nestjs/common";
import { IsNotEmpty, IsNotEmptyObject, IsString, IsStrongPassword, IsUrl } from "class-validator";
import Tweet from "src/entities/Tweet";
import User from "src/entities/User";

export class CreateTweetDTO {


  @IsNotEmpty()
  user: User;

  @IsUrl()
  avatar: string;


  toTweet() {
    return new Tweet(this.avatar,this.user);
  }
}