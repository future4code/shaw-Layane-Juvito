import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CustomError } from "../error/CustomError";
import { UserInputDTO, UserLoginDTO } from "../model/user";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }


    public signup = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body


            const newUser: UserInputDTO = {
                name,
                email,
                password
            }

            const token = await this.userBusiness.signup(newUser)

            res.status(201).send({ token })

        } catch (error: any) {
            if (error instanceof CustomError) {
                res.status(error.getStatusCode()).send({ message: error.message })
            } else {
                res.status(500).send({ message: error.sqlMessage})
            }
        }

    }

    public login = async (req: Request, res: Response) => {

        try {
            const { email, password } = req.body

            const userLogin: UserLoginDTO = {
                email,
                password
            }

            const token = await this.userBusiness.login(userLogin)

            res.status(200).send({ token })

        } catch (error: any) {

            if (error instanceof CustomError) {
                res.status(error.getStatusCode()).send({ message: error.message })
            } else {
                res.status(500).send({ message: error.sqlMessage})
            }
        }
    }


}