import { UserDB } from '../data/UserDB'
import { CustomError } from '../error/CustomError'
import { user, UserInputDTO, UserLoginDTO } from '../model/user'
import UserModel from '../model/UserModel'
import { Authenticator } from '../services/Authenticator'
import { HashManage } from '../services/HashManage'
import IdGenerator from '../services/IdGenerator'


export class UserBusiness {
    constructor(
        private userDB: UserDB
    ) {}

    public signup = async (user: UserInputDTO) => {
        try {
            const { name, email, password } = user

            if (!name || !email || !password) {
                throw new CustomError(422, "Todos os campos são obrogatórios.")
            }

            if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
                throw new CustomError(422, "Os campos 'name', 'email' e 'password' devem ser do tipo string.")
            }

            if (!email.includes("@")) {
                throw new CustomError(401, "Email inválido.")
            }

            if (password.length < 6) {
                throw new CustomError(401, "Senha inválida.")
            }

            const checkEmail: user[] = await this.userDB.getUserByEmail(email)

            if (checkEmail.length > 0) {
                throw new CustomError(409, "Email já cadastrado.")
            }

            const id: string = IdGenerator.idGenerator()
            console.log(id)

            const hash = await HashManage.generateHash(password)


            const newUser: UserModel = new UserModel(id, name, email, hash)


            await this.userDB.signup(newUser)

            const token = Authenticator.generateToken({ id, email })

            return token

        } catch (error: any) {
            throw new CustomError(error.statusCode || 500, error.sqlMessage || error.message)
        }

    }

    public  login = async (user: UserLoginDTO) => {

        try {
            const { email, password } = user

            const checkUser = await this.userDB.getUserByEmail(email)

            if (checkUser.length === 0) {
                throw new CustomError(401, "Usuário não cadastrado")
            }

            const passwordIsCorrect: boolean = await HashManage.compare(password, checkUser[0].password)

            if (!passwordIsCorrect) {
                throw new CustomError(401, "Senha ou email inválidos.")
            }

            if (!email || !email.includes("@")) {
                throw new CustomError(401, "Email inválido.")
            }

            const token = Authenticator.generateToken({ id: checkUser[0].id, email: checkUser[0].email })

            return token
        } catch (error: any) {
            
            if (error instanceof CustomError) {
                throw new CustomError(error.statusCode,  error.message)
            }

            throw new CustomError(500,  error.message)
            
        }

    }


}