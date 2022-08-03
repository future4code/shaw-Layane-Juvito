import express from 'express'
import { PostBusiness } from '../business/PostBusiness';
import { UserBusiness } from '../business/UserBusiness';
import { PostController } from '../controller/PostController';
import { PostDB } from '../data/PostDB';
import { UserDB } from '../data/UserDB';


const postController = new PostController(
    new PostBusiness(
        new UserDB(),
        new PostDB()
    )
)

export const postRouter = express.Router()

postRouter.post('/create', postController.createPost)
postRouter.get('/:id', postController.getPostById)