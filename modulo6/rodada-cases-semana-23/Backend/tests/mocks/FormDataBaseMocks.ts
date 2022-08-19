import { PostFormDTO } from "../../src/model/DTOs/PostFormDTO"
import { SelectDataOutput } from "../../src/model/types/SelectDataOutput"
import { dataMock1, dataMock2, dataMock3 } from "./DataMock"

export class FormDataBaseMocks {

    public insertForm = async (input: PostFormDTO): Promise<void> => {}

    public selectSumParticipation = async (): Promise<number> => {

        return 50

    }

    public selectSUserData = async (): Promise<SelectDataOutput[]> => {
            const userData: SelectDataOutput[] = [
                dataMock1,
                dataMock2,
                dataMock3
            ]
            return userData
    }

    public deleteData = async (): Promise<void> => {}

}