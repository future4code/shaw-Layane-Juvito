export class CustomError extends Error {
    constructor(private statusCode: number, message: string){
        super(message)
    }

    getStatusCode(){
        return this.statusCode
    }
}
