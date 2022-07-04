import { Request, Response } from 'express'
import UserDB from '../data/UserDB'
import UserModel from '../model/UserModel'
import { Authenticator } from '../services/Authenticator'
import { HashManage } from '../services/HashManage'
import IdGenerator from '../services/IdGenerator'
import { user, userInput, userLogin, userRoles } from '../types/user'


export class UserBusiness {

    public async signup(user: userInput) {

        let { name, email, password, role } = user
        
        if (!name || !email || !password || !role) {
            throw new Error("Todos os campos são obrogatórios.")
        }

        if (typeof name !== "string") {
            throw new Error("O campo 'name' deve ser do tipo string.")
        }

        if (typeof email !== "string") {
            throw new Error("O campo 'email' deve ser do tipo string.")
        }

        if (typeof password !== "string") {
            throw new Error("O campo 'password' deve ser do tipo string.")
        }

        if (!email.includes("@")) {
            throw new Error("Email inválido.")
        }

        if (password.length < 6) {
            throw new Error("Senha inválida.")
        }
        const userDB = new UserDB()
        const checkEmail = await userDB.getUserByEmail(email)

        if(checkEmail.length > 0){
            throw new Error("Email já cadastrado.")
        }

        if (!role) {
            role = userRoles.NORMAL
        }
  
        if (role !== "NORMAL" && role !== "ADMIN") {
            throw new Error("O campo 'role' só pode assumir os valores 'normal' ou 'admin'.")
        }

        const newId = new IdGenerator()
        const id: string = newId.idGenerator()

        const hashManage = new HashManage()
        const hash = await hashManage.generateHash(password)


        const newUser: UserModel = new UserModel(id, name, email, hash, role)

        
        await userDB.signup(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({ id, role })

        return token

    }

    public async login(user: userLogin) {

        const { email, password } = user

        const userController = new UserDB()
        const checkUser = await userController.getUserByEmail(email)

        if (checkUser.length === 0) {
            throw new Error("Usuário não cadastrado")
        }

        const hashManage = new HashManage()
        const passwordIsCorrect: boolean = await hashManage.compare(password, checkUser[0].password)

        if (!passwordIsCorrect) {
            throw new Error("Senha ou email inválidos.")
        }

        if (!email || !email.includes("@")) {
            throw new Error("Email inválido.")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({ id: checkUser[0].id, role: checkUser[0].role })

        return token
    }

    public async getProfile(token: string) {

        if (!token) {
            throw new Error("Token não enviado.")
        }
        const authenticator = new Authenticator()
        const data = authenticator.getTokenData(token)

        if (!data) {
            throw new Error("Token inválido")
        }

        if (data.role !== "ADMIN") {
            throw new Error("Usuário não autorizado.")
        }

        const userDB = new UserDB()
        const users = await userDB.getUser()

        if (!users) {
            throw new Error("Nenhum usuário cadastrado.")
        }

        const usersMap = users.map((user:user) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role
              }
        })

        return usersMap

    }
} 