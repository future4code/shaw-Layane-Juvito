import { PostDB } from '../data/PostDB'
import { UserDB } from '../data/UserDB'
import { CustomError } from '../error/CustomError'
import { getPostByIdDTO, post, postInputDTO, PostType } from '../model/post'
import PostModel from '../model/PostModel'
import { user } from '../model/user'
import { Authenticator } from '../services/Authenticator'
import IdGenerator from '../services/IdGenerator'


export class PostBusiness {
    constructor(
        private userDB: UserDB,
        private postDB: PostDB
    ) {}

    public createPost = async (post: postInputDTO) => {
        try {
            const { photo, description, type, token }  = post

            if (!token) {
                throw new CustomError(401, "This request needs authorization, please login to get your access token.")
            }

            const userInformation = Authenticator.getTokenData(token)
    
            if (!userInformation ) {
                throw new CustomError(401,"Invalid token.")
            }

            if ( !photo || !description || !type) {
                throw new CustomError(422, "Photo, description and type are required.")
            }

            if (typeof photo !== "string" || typeof description !== "string") {
                throw new CustomError(422, "Invalid input.")
            }

            if(type !== PostType.EVENT && type !== PostType.NORMAL){
                throw new CustomError(422, "Invalid type. Type must be NORMAL or EVENTO.")
            }

            const id = IdGenerator.idGenerator()

            const newPost: PostModel = new PostModel( 
                id,
                photo, 
                description,
                type,
                userInformation.id
            )

            await this.postDB.createPost(newPost)


        } catch (error: any) {
            if (error instanceof CustomError) {
                throw new CustomError(error.statusCode,  error.message)
            }

            throw new CustomError(500,  error.message)
        }

    }

    public getPostById = async (input: getPostByIdDTO) => {
        try {
            const { id, token }  = input

            if (!token) {
                throw new CustomError(401, "This request needs authorization, please login to get your access token.")
            }

            const userInformation = Authenticator.getTokenData(token)
    
            if (!userInformation ) {
                throw new CustomError(401,"Invalid token.")
            }     

            const post:post[] = await this.postDB.getPostById(id)
            
            if (post.length === 0) {
                throw new CustomError(404, "Post not found.")
            }   

            return post


        } catch (error: any) {
            if (error instanceof CustomError) {
                throw new CustomError(error.statusCode,  error.message)
            }

            throw new CustomError(500,  error.message)
        }

    }
}