import { Injectable } from '@nestjs/common';
import Tweet from 'src/entities/Tweet';
import { CreateTweetDTO } from 'src/dtos/TweetDTO';
import User from 'src/entities/User';
import { UserService } from './user.service';

@Injectable()
export class TweetService {

  private tweets: Tweet[];

  constructor(private readonly userService: UserService) {
    let ar : Tweet[] = []
    this.tweets = ar;
  }

  gettweets(page: string) {
    let p = Number(page);
    let ar = [];
    for(const i of this.tweets){
      let obj : {username: string, avatar: string, tweet: string} = {username: "a", avatar: "b", tweet: "c"}
      obj.tweet = i.getTweet();
      obj.username = i.getUser().getUserName();
      obj.avatar = i.getUser().getAvatar();
      ar.push(obj);
    }
    if(!page){
       ar = ar.slice(0,15).reverse();
       return ar;
    }
    ar = ar.slice(15*(p-1), 15*p).reverse();
    return ar;
  }

  getTweetsByUserId(username: string){
    let ar = []
    for(const i of this.tweets){
      if(i.getUser().getUserName() === username){
        let obj : {username: string, avatar: string, tweet: string} = {username: "a", avatar: "b", tweet: "c"}
      obj.tweet = i.getTweet();
      obj.username = i.getUser().getUserName();
      obj.avatar = i.getUser().getAvatar();
      ar.push(obj);
      }
    }
    return ar.reverse();
  }

  convertandcreate(TweetDTO: CreateTweetDTO){
    const users = this.userService.getUsers();

    let hasuser = false;
    for(const i of users){
      if(i.getUserName() === TweetDTO.username){
        hasuser = true;
        let tweet = new Tweet(TweetDTO.tweet, i);
        return this.tweets.push(tweet);
      }
    }
    if(!hasuser){
      let err = new Error();
      err.name = "UNAUTHORIZED"
      err.message = "401";
      throw err;
    }
  }

  create(TweetDTO: CreateTweetDTO) {
    return this.tweets.push(new Tweet("a", new User("a", "b")));
  }

}