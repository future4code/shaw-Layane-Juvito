import { FormDataBase } from "../data/FormDataBase";
import { BadRequestError } from "../errors/BadRequestError";
import { InternalError } from "../errors/InternalError";
import { PostFormDTO } from '../model/DTOs/PostFormDTO'
import { PostFormInputDTO } from "../model/DTOs/PostFormInputDTO";
import { FormModel } from "../model/FormModel";
import IdGenerator from "../services/IdGenerator";

export class FormBusiness {
    constructor(
        private formDataBase: FormDataBase,
        private idGenerator: IdGenerator
    ) { }

    public postForm = async (input: PostFormInputDTO): Promise<void> => {

        try {

            const { firstName, lastName, participation } = input

            if (!firstName || !lastName || !participation) {
                throw new BadRequestError("All fields are required.")
            }

            if(typeof firstName !== "string" || typeof lastName !== "string"){
                throw new BadRequestError("Please, check if the type of the fields 'firstName' and 'lastName' are 'string'.")
            }

            if(typeof participation !== "number"){
                throw new BadRequestError("Please, check if the type of the field 'participation' is a 'number'.")
            }

            if(participation < 0 || participation > 100){
                throw new BadRequestError("The participation field must be a value between 0-100.")
            }

            const sumParticipation = await this.formDataBase.selectSumParticipation()

            if((sumParticipation + participation) > 100){
                throw new BadRequestError("'participation' value exceeds the maximum value of the total sum of the participations")
            }

            const id = this.idGenerator.generateId()

            const inputDataBase: PostFormDTO = new FormModel(id, firstName, lastName, participation)
            await this.formDataBase.insertForm(inputDataBase)

        } catch (error: any) {

            if (error instanceof BadRequestError) {
                throw new BadRequestError(error.message)
            }

            throw new InternalError(error.sqlMessage || error.message)
        }

    }
}


