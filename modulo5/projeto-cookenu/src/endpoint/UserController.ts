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

        } catch (error: any) {
            res.send({
                message: error.slqMessage || error.message
            })
        }
    }

    public async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 422
                throw new Error("Todos os campos são obrigatórios.")
            }

            if (typeof email !== "string" || typeof password !== "string") {
                res.statusCode = 422
                throw new Error("Todos os campos devem ser do tipo 'string'.")
            }

            if (password.length < 6) {
                res.statusCode = 422
                throw new Error("Senha inválida.")
            }

            if (!email.includes('@')) {
                res.statusCode = 422
                throw new Error("Email inválido.")
            }

            const userDB = new UserDB
            const checkEmailDB = await userDB.getUserByEmail(email)

            if (checkEmailDB.length === 0) {
                res.statusCode = 409
                throw new Error("Email não cadastrado.")
            }

            const hashManage = new HashManage()
            const checkPassword: boolean = await hashManage.compare(password, checkEmailDB[0].password)

            if (!checkPassword) {
                res.statusCode = 409
                throw new Error("Senha inválidos.")
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id: checkEmailDB[0].id, email })

            res.status(200).send({ access_token: token })

        } catch (error: any) {
            res.send({
                message: error.slqMessage || error.message
            })
        }
    }

    public async getUserProfile(req: Request, res: Response) {
        try {
            const token = req.headers.authorization

            if (!token) {
                res.statusCode = 401
                throw new Error("Não autorizado.")
            }

            const authenticator = new Authenticator()
            const userData = authenticator.getTokenData(token)

            if (!userData) {
                res.statusCode = 401
                throw new Error("Token expirado ou inválido.")
            }

            const userDB = new UserDB()
            const userInfo = await userDB.getUserByEmail(userData.email)

            res.status(200).send({
                id: userInfo[0].id,
                name: userInfo[0].name,
                email: userInfo[0].email,
            })

        } catch (error: any) {
            res.send({
                message: error.slqMessage || error.message
            })
        }
    }

    public async getOtherUserProfile(req: Request, res: Response) {
        try {
            const token = req.headers.authorization
            const {id} =  req.params

            if (!token) {
                res.statusCode = 401
                throw new Error("Não autorizado.")
            }

            const authenticator = new Authenticator()
            const userData = authenticator.getTokenData(token)

            if (!userData) {
                res.statusCode = 401
                throw new Error("Token expirado ou inválido.")
            }

            const userDB = new UserDB()
            const userInfo = await userDB.getUserById(id)

            if(userInfo.length === 0){
                res.statusCode = 404
                throw new Error("Usuário não encontrado.")
            }

            res.status(200).send({
                id: userInfo[0].id,
                name: userInfo[0].name,
                email: userInfo[0].email,
            })

        } catch (error: any) {
            res.send({
                message: error.slqMessage || error.message
            })
        }
    }

    public async followUser(req: Request, res: Response){
        try {
            const token = req.headers.authorization
            const {userToFollowId} =  req.body

            if (!token) {
                res.statusCode = 401
                throw new Error("Não autorizado.")
            }

            const authenticator = new Authenticator()
            const userData = authenticator.getTokenData(token)

            if (!userData) {
                res.statusCode = 401
                throw new Error("Token expirado ou inválido.")
            }

            if (!userToFollowId) {
                res.statusCode = 401
                throw new Error("Deve informar o id do usuário a ser seguido.")
            }

            const userDB = new UserDB()
            const checkId = await userDB.getUserById(userToFollowId)
            
            if(checkId.length === 0){
                res.statusCode = 404
                throw new Error("Não há um usuário cadastrado com o 'id' fornecido.")
            }
            
            await userDB.followUser(userData.id, userToFollowId)
            

            res.status(200).send({
                message: "Usuário seguido com sucesso."
            })
        } catch (error:any) {
            res.send({
                message: error.slqMessage || error.message    
            })
        }
    }
}