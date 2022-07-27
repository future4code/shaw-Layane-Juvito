import { PostFormDTO } from "./DTOs/PostFormDTO"

export class FormModel implements PostFormDTO {
    constructor(
        private id: string,
        private firstName: string,
        private lastName: string,
        private participation: number
    ){}

    public getId(){
        return this.id
    }
    public getFirstName(){
        return this.firstName
    }
    public getLastName(){
        return this.lastName
    }
    public getParticipation(){
        return this.participation
    }
}

