import { InternalError } from "../errors/InternalError";
import { PostFormDTO } from "../model/DTOs/PostFormDTO";
import { SelectDataOutput } from "../model/types/SelectDataOutput";
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
            return sum[0].total
        } catch (error: any) {
            throw new InternalError(error.sqlMessage || error.message)
        }
    }

    public selectSUserData = async (): Promise<SelectDataOutput[]> => {
        try {
            const userData: SelectDataOutput[] = await BaseDataBase.connection(FormDataBase.tableName)
                .select('id','first_name as firstName', 'last_name as lastName', 'participation')
            return userData
        } catch (error: any) {
            throw new InternalError(error.sqlMessage || error.message)
        }
    }

    public deleteData = async (): Promise<void> => {
        try {
            await BaseDataBase.connection(FormDataBase.tableName)
                .delete()
        } catch (error: any) {
            throw new InternalError(error.sqlMessage || error.message)
        }
    }

}
