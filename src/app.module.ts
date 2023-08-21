import { Module } from '@nestjs/common';
import { TweetController } from './controllers/tweet.controller';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { TweetService } from './services/tweet.services';

@Module({
  imports: [],
  controllers: [UserController, TweetController],
  providers: [UserService, TweetService],
})
export class AppModule {}
