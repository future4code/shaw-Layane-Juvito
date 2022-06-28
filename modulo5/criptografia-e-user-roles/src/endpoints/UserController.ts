import { Request, Response } from 'express'
import UserDB from '../data/UserDB'
import UserModel from '../model/UserModel'
import { Authenticator } from '../services/Authenticator'
import { HashMenage } from '../services/HashManage'
import IdGenerator from '../services/IdGenerator'
import { AuthenticationData, User } from '../types'


export class UserController {

    public async createUser(req: Request, res: Response) {

        try {
            let { email, password, role } = req.body

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

            if (!role) {
                role = "normal"
            }
            
            if (role !== "normal" && role !== "admin") {
                res.statusCode = 422
                throw new Error("O campo 'role' só pode assumir os valores 'normal' ou 'admin'.")
            }

            const newId = new IdGenerator()
            const id = newId.idGenerator()

            const hashMenage = new HashMenage()
            const hash = await hashMenage.generateHash(password)

            const newUser: UserModel = new UserModel(id, email, hash, role)

            const userController = new UserDB()
            userController.createUser(newUser)

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id, role })

            res.status(201).send({ token })

        } catch (error: any) {
            res.status(500).send(error.message)
        }

    }

    public async login(req: Request, res: Response) {

        try {

            const { email, password } = req.body

            const userController = new UserDB()
            const checkUser = await userController.getUserByEmail(email)

            if (!checkUser) {
                res.statusCode = 404
                throw new Error("Usuário não cadastrado")
            }

            const hashMenage = new HashMenage()
            const passwordIsCorrect: boolean = await hashMenage.compare(password, checkUser.password)

            if (!passwordIsCorrect) {
                res.statusCode = 409
                throw new Error("Senha ou email inválidos.")
            }

            if (!email || !email.includes("@")) {
                res.statusCode = 422
                throw new Error("Email inválido.")
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id: checkUser.id, role: checkUser.role })

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    public async getProfile(req: Request, res: Response) {
        try {
            const token = req.headers.authorization
            if (!token) {
                throw new Error("Token não enviado.")
            }
            const authenticator = new Authenticator()
            const data = authenticator.getTokenData(token)

            if (!data) {
                res.statusCode = 404
                throw new Error("Token inválido")
            }

            if (data.role !== "normal") {
                res.statusCode = 401
                throw new Error("Usuário não autorizado.")
            }

            const userDB = new UserDB()
            const user = await userDB.getUserById(data.id)

            if (!user) {
                res.sendStatus(404)
                throw new Error("Usuário não encontrado.")
            }

            res.send({
                user: {
                    email: user.email,
                    id: user.id
                }
            })


        } catch (error: any) {
            res.send({ message: error.message })
        }
    }
}