import { PostType } from "./post"

export default class PostModel {
    private createdAt: string
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: PostType,
        private userId: string
    ){
        this.createdAt = ''
    }

    public getId(){
        return this.id
    }
    public getPhoto(){
        return this.photo
    }
    public getDescription(){
        return this.description
    }
    public getCreatedAt(){
        return this.createdAt
    }
    public getType(){
        return this.type
    }
    public getUserId(){
        return this.userId
    }
}
