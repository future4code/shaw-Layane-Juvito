import { Request, Response } from 'express'
import { FormBusiness } from '../business/FormBusiness'
import { CustomError } from '../errors/CustomError'
import { PostFormInputDTO } from '../model/DTOs/PostFormInputDTO'


export class FormController {
    constructor(
        private formBusiness: FormBusiness
    ) { }

    public postForm = async (req: Request, res: Response) => {

        try {

            const { firstName, lastName, participation } = req.body

            const inputBusiness: PostFormInputDTO = {
                firstName,
                lastName,
                participation
            }

            await this.formBusiness.postForm(inputBusiness)

            res.status(200).send({ message: "Your informations was saved." })

        } catch (error: any) {

            if (error instanceof CustomError ) {
                res.status(error.statusCode).send({ error: error.message })
            } else {
                res.status(400).send({ error: error.message })
            }


        }
    }
}