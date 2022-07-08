import { Request, Response } from 'express'
import UserDB from '../data/UserDB'
import UserModel from '../model/UserModel'
import { Authenticator } from '../services/Authenticator'
import IdGenerator from '../services/IdGenerator'
import { User } from '../types'


export class UserController {

    public async createUser(req: Request, res: Response){

        try {
            const { email, password } = req.body

            if (typeof email !== "string") {
                res.statusCode = 422
                throw new Error("O campo 'email' deve ser do tipo string.")
            }
            if (typeof password !== "string") {
                res.statusCode = 422
                throw new Error("O campo 'password' deve ser do tipo string.")
            }
            if (!email || !email.includes("@")) {
                res.statusCode = 422
                throw new Error("Email inválido.")
            }

            if (!password || password.length < 6) {
                res.statusCode = 422
                throw new Error("Senha inválida.")
            }

            const newId = new IdGenerator()
            const id = newId.idGenerator()
            const newUser: UserModel = new UserModel(id, email, password)
            const userController = new UserDB()

            userController.createUser(newUser)

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id })

            res.status(201).send({ token })

        } catch (error: any) {
            res.status(500).send(error.message)
        }

    }

    public async login(req:Request, res:Response){

        try {

        const {email, password} = req.body

        const userController = new UserDB()
        const checkUser = await userController.getUserByEmail(email)

        if(!checkUser){
            res.statusCode = 404
            throw new Error("Usuário não cadastrado")
        }

        if(checkUser.password !== password){
            res.statusCode = 409
            throw new Error("Senha ou email inválidos.")
        }

        if (!email || !email.includes("@")) {
            res.statusCode = 422
            throw new Error("Email inválido.")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({ id:checkUser.id })

        res.status(200).send({ token })
        
        } catch (error:any) {
            res.status(500).send(error.message)
        }
        

    }
}