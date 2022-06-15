import { Request, Response } from "express";
import { connection } from "../data/connection";
import { addressByCEP } from "../services/addressByCep";


export const postAddress =async (req: Request, res: Response) => {

    try {
        const {zipCode, number, complement} = req.body

        if(!zipCode || !number){
            res.statusCode = 422
            throw new Error("Os campos 'zipCode' e 'number' são obrigatórios")
        }

        const address = await addressByCEP(zipCode)
        if(!address){
            res.statusCode = 400
            throw new Error("CEP inválido.")
        }
        console.log(address)
        await connection
        .insert({
            zip_code: zipCode,
            street: address.street,
            number: number,
            complement: complement,
            borough: address.borough,
            city: address.city,
            state: address.state
        })
        .into("Address");
        res.send({
            message: "Endereço cadastrado."
        })
    } catch (error:any) {
        res.send(error.message)
    }
    
}