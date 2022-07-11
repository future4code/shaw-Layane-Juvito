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
                throw new CustomError(401, "Token não enviado.")
            }

            const userInformation = Authenticator.getTokenData(token)
    
            if (!userInformation ) {
                throw new CustomError(401,"Token inválido")
            }

            const checkUser: user[] = await this.userDB.getUserById(userInformation.id)

            if (checkUser.length === 0) {
                throw new CustomError(401, "Usuário não cadastrado.")
            }

            if ( !photo || !description || !type) {
                throw new CustomError(422, "Todos os campos são obrogatórios.")
            }

            if (typeof photo !== "string" || typeof description !== "string") {
                throw new CustomError(422, "Os campos 'photo'e 'description' devem ser do tipo string.")
            }

            if(type !== PostType.EVENT && type !== PostType.NORMAL){
                throw new CustomError(422, "O campo 'type' deve assumir o valor 'NORMAL' ou 'EVENT'.")
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
                throw new CustomError(401, "Token não enviado.")
            }

            const userInformation = Authenticator.getTokenData(token)
    
            if (!userInformation ) {
                throw new CustomError(401,"Token inválido")
            }

            const checkUser: user[] = await this.userDB.getUserById(userInformation.id)

            if (checkUser.length === 0) {
                throw new CustomError(409, "Usuário não cadastrado.")
            }        

            const post:post[] = await this.postDB.getPostById(id)
            

            if (post.length === 0) {
                throw new CustomError(404, "Post não encontrado.")
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