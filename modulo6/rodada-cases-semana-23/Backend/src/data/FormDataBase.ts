import { InternalError } from "../errors/InternalError";
import { PostFormDTO } from "../model/DTOs/PostFormDTO";
import { BaseDataBase } from "./BaseDataBase";


export class FormDataBase extends BaseDataBase {
    private static tableName = "data_cubos_test"

    public insertForm = async (input: PostFormDTO): Promise<void> => {
        try {
            await BaseDataBase.connection(FormDataBase.tableName)
                .insert({
                    id: input.getId(),
                    first_name: input.getFirstName(),
                    last_name: input.getLastName(),
                    participation: input.getParticipation()
                })
        } catch (error: any) {
            throw new InternalError(error.sqlMessage || error.message)
        }
    }

    public selectSumParticipation = async (): Promise<number> => {
        try {
            const sum:Array<{total:number}> = await BaseDataBase.connection(FormDataBase.tableName)
                .sum('participation as total')
            console.log(sum)
            return sum[0].total
        } catch (error: any) {
            throw new InternalError(error.sqlMessage || error.message)
        }
    }

}
