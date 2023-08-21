import { Body } from "@nestjs/common";
import { IsNotEmpty, IsNotEmptyObject, IsString, IsStrongPassword, IsUrl } from "class-validator";
import Tweet from "src/entities/Tweet";
import User from "src/entities/User";

export class CreateTweetDTO {


  @IsNotEmpty()
  tweet: string

  @IsNotEmpty()
  username: string;



}