import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import UserDB from '../data/UserDB'
import { Authenticator } from '../services/Authenticator'
import { HashManage } from '../services/HashManage'
import { userInput, userLogin } from '../types/user'


export class UserController {

    public async signup(req: Request, res: Response) {

        try {

            const newUser: userInput = req.body
            
            const userBusiness = new UserBusiness()

            const token = await userBusiness.signup(newUser)
            
            res.status(201).send({ token })

        } catch (error: any) {
            res.status(500).send({ message: error.message})
        }

    }

    public async login(req: Request, res: Response) {

        try {

            const userLogin: userLogin = req.body

            const userBusiness = new UserBusiness()

            const token = await userBusiness.login(userLogin)

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    public async getProfile(req: Request, res: Response) {
        try {
            const token = req.headers.authorization
           
            const userBusiness = new UserBusiness()

            const user = await userBusiness.getProfile(token as string)

            res.send(user)

        } catch (error: any) {
            res.status(error.sqlStatusCode | 400).send({ message: error.message })
        }
    }

    public async deleteProfile(req: Request, res: Response) {
        try {
            const token = req.headers.authorization
            const {id} = req.params
           
            const userBusiness = new UserBusiness()

            await userBusiness.deleteProfile(id, token as string)

            res.send("Perfil deletado")

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }
} 