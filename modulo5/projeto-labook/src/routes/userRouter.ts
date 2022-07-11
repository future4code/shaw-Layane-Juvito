import express from 'express'
import { UserBusiness } from '../business/UserBusiness';
import { UserController } from '../controller/UserController';
import { UserDB } from '../data/UserDB';


const userController = new UserController(
    new UserBusiness(
        new UserDB()
    )
)

export const userRouter = express.Router()

userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)