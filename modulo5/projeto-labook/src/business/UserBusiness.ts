import { UserDB } from '../data/UserDB'
import { CustomError } from '../error/CustomError'
import { RequestFriendshipDTO, user, UserInputDTO, UserLoginDTO } from '../model/user'
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
                throw new CustomError(422, "Name, email and password are required.")
            }

            if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
                throw new CustomError(422, "Invalid input.")
            }
            const regexp = /\S+@\S+\.\S+/

            if (!regexp.test(email)) {
                throw new CustomError(422, "Invalid Email.")
            }

            if (password.length < 6) {
                throw new CustomError(422, "Invalid password. Password must have at least 6 characters")
            }

            const checkEmail: user[] = await this.userDB.getUserByEmail(email)

            if (checkEmail.length > 0) {
                throw new CustomError(409, "Email already registered.")
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

            if(!email || password){
                throw new CustomError(422, "Name, email and password are required.")
            }

            const checkUser = await this.userDB.getUserByEmail(email)

            if (checkUser.length === 0) {
                throw new CustomError(401, "Invalid credentials.")
            }

            const passwordIsCorrect: boolean = await HashManage.compare(password, checkUser[0].password)

            if (!passwordIsCorrect) {
                throw new CustomError(401, "Invalid credentials.")
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

    public  requestFriendship  = async (input: RequestFriendshipDTO) => {

        try {
            const { friendId, token } = input

            if (!token) {
                throw new CustomError(401, "This request needs authorization, please login to get your access token.")
            }

            const userInformation = Authenticator.getTokenData(token)
    
            if (!userInformation ) {
                throw new CustomError(401,"Invalid token.")
            }

            if (!friendId || friendId === ":id") {
                throw new CustomError(422, "Fill the :id with the user id")
            }
        
            const checkFriend: user[] = await this.userDB.getUserById(friendId)
            
            if (checkFriend.length === 0) {
                throw new CustomError(404, "Invalid credentials, no id registration.")
            }

            const checkFriendship = await this.userDB.checkFriends(userInformation.id, friendId)

            if (checkFriendship.length > 0) {
                throw new CustomError(409, "This friendship already exists.")
            }
            await this.userDB.requestFriendship(userInformation.id, friendId)

            
        } catch (error: any) {
            
            if (error instanceof CustomError) {
                throw new CustomError(error.statusCode,  error.message)
            }

            throw new CustomError(500,  error.message)
            
        }

    }

    public  deleteFriendship  = async (input: RequestFriendshipDTO) => {

        try {
            const { friendId, token } = input

            if (!token) {
                throw new CustomError(401, "This request needs authorization, please login to get your access token.")
            }

            const userInformation = Authenticator.getTokenData(token)
    
            if (!userInformation ) {
                throw new CustomError(401,"Invalid token.")
            }

            if (!friendId || friendId === ":id") {
                throw new CustomError(422, "Fill the :id with the user id")
            }
        
            const checkFriend: user[] = await this.userDB.getUserById(friendId)
            
            if (checkFriend.length === 0) {
                throw new CustomError(404, "Invalid credentials, no id registration.")
            }

            const checkFriendship = await this.userDB.checkFriends(userInformation.id, friendId)

            if (checkFriendship.length === 0) {
                throw new CustomError(404, "Non Existing Friendship.")
            }
            await this.userDB.deleteFriendship(userInformation.id, friendId)

            
        } catch (error: any) {
            
            if (error instanceof CustomError) {
                throw new CustomError(error.statusCode,  error.message)
            }

            throw new CustomError(500,  error.message)
            
        }

    }
}