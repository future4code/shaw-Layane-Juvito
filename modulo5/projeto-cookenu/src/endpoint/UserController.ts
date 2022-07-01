import { Request, Response } from 'express'
import UserDB from '../data/UserDB'
import UserModel from '../model/UserModel'
import { Authenticator } from '../services/Authenticator'
import { HashManage } from '../services/HashManage'
import IdGenerator from '../services/IdGenerator'

export class UserController {
    public async signup(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body

            if (!name || !email || !password) {
                res.statusCode = 422
                throw new Error("Todos os campos são obrigatórios.")
            }

            if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
                res.statusCode = 422
                throw new Error("Todos os campos devem ser do tipo 'string'.")
            }

            if (password.length < 6) {
                res.statusCode = 422
                throw new Error("O campo 'password' deve ter pelo menos 6 caracteres.")
            }

            if (!email.includes('@')) {
                res.statusCode = 422
                throw new Error("Email inválido.")
            }

            const userDB = new UserDB
            const checkEmailDB = await userDB.getUserByEmail(email)

            if (checkEmailDB.length > 0) {
                res.statusCode = 409
                throw new Error("Email já cadastrado.")
            }

            const userId = new IdGenerator()
            const id = userId.idGenerator()

            const hashManage = new HashManage()
            const hash = await hashManage.generateHash(password)

            const user = new UserModel(id, name, email, hash)

            userDB.createUser(user)

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id, email })

            res.status(201).send({ access_token: token })

        } catch (error:any) {
            res.send(error.message)
        }
    }

    public async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 422
                throw new Error("Todos os campos são obrigatórios.")
            }

            if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
                res.statusCode = 422
                throw new Error("Todos os campos devem ser do tipo 'string'.")
            }

            if (password.length < 6) {
                res.statusCode = 422
                throw new Error("O campo 'password' deve ter pelo menos 6 caracteres.")
            }

            if (!email.includes('@')) {
                res.statusCode = 422
                throw new Error("Email inválido.")
            }

            const userDB = new UserDB
            const checkEmailDB = await userDB.getUserByEmail(email)

            if (checkEmailDB.length > 0) {
                res.statusCode = 409
                throw new Error("Email já cadastrado.")
            }

            const userId = new IdGenerator()
            const id = userId.idGenerator()

            const hashManage = new HashManage()
            const hash = await hashManage.generateHash(password)

            const user = new UserModel(id, name, email, hash)

            userDB.createUser(user)

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id, email })

            res.status(201).send({ access_token: token })

        } catch (error:any) {
            res.send(error.message)
        }
    }
}