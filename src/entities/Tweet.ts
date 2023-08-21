import User from "./User";

export default class Tweet{
    private tweet: string;
    private user: User;

    constructor(tweet: string, user: User){
        this.tweet = tweet;
        this.user = user;
    }

    getTweet(){
        return this.tweet
    }

    getUser(){
        return this.user
    }
}