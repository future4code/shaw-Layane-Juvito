import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { CustomError } from "../error/CustomError";
import { getPostByIdDTO, post, postInputDTO } from "../model/post";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) { }

    public createPost = async (req: Request, res: Response) => {
        try {
            const { photo, description, type } = req.body
            const token = req.headers.authorization


            const newPost: postInputDTO = {
                photo,
                description,
                type,
                token: token as string
            }

            await this.postBusiness.createPost(newPost)

            res.status(201).send({ message: "Post created successfully" })

        } catch (error: any) {
            if (error instanceof CustomError) {
                res.status(error.statusCode).send({ message: error.message })
            } else {
                res.status(500).send({ message: error.sqlMessage })
            }


        }

    }

    public getPostById = async (req: Request, res: Response) => {
        try {

            const token = req.headers.authorization
            const {id} = req.params

            const input: getPostByIdDTO = {
                id,
                token: token as string
            }

            const post: post[] = await this.postBusiness.getPostById(input)

            res.status(200).send({ post: {
                    id: post[0].id,
                    photo: post[0].photo,
                    description: post[0].description,
                    createdAt: post[0].createdAt,
                    type: post[0].type,
                    userId: post[0].userId
            } })

        } catch (error: any) {
            if (error instanceof CustomError) {
                res.status(error.statusCode).send({ message: error.message })
            } else {
                res.status(500).send({ message: error.sqlMessage})
            }

        
        }

    }
}