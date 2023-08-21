import { Body, Controller, Get, Post, Query, Param, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { TweetService } from 'src/services/tweet.services';
import { CreateTweetDTO } from 'src/dtos/TweetDTO';

@Controller('/tweets')
export class TweetController {
  constructor(private readonly TweetService: TweetService) { }

  @Get()
  getTweets(@Query('page') page: string) {
    return this.TweetService.gettweets(page);
  }

  @Post()
  @HttpCode(201)
  createTweet(@Body() body: CreateTweetDTO) {
    try{return this.TweetService.convertandcreate(body);}
    catch(error){
      if(error.message === "401"){
        throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
      }
      else{
        throw new HttpException(error.name, HttpStatus.INTERNAL_SERVER_ERROR)
      }
    }
  }

  @Get(':username')
  getTweetsByUsername(@Param('username') username: string){
    return this.TweetService.getTweetsByUserId(username);
  }

}