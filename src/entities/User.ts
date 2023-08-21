export default class User{
    private avatar: string;
    private username: string;

    constructor(avatar: string, username: string){
        this.avatar = avatar;
        this.username = username;
    }

    getUserName(){
        return this.username
    }

    getAvatar(){
        return this.avatar
    }

}