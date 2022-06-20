
export type Statement = {
    value:number,
    date: string,
    description: string
}

export type Client = {
    id:string,
    name: string,
    cpf: string,
    birthday: string,
    accountBalance:number,
    accountStatement:Statement[]
}

