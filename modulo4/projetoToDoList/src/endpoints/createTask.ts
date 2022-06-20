import { Response, Request } from 'express'
import { users } from '../app';
import { connection } from '../connection';
import { User } from '../types';

export const CreateTask = async (req: Request, res: Response) => {
    let errorCode = 500
    const {title, description, limitDate, creatorUserId} = req.body
    const limitDateFormat = limitDate.split('/').reverse().join("-")

    try {
        if(!title || !description || !limitDate || !creatorUserId){
            errorCode = 422
            throw new Error ("Todos os campos são obrogatórios.")
        }
        if(typeof title !=="string"){
            errorCode = 422
            throw new Error ("O campo name deve ser do tipo 'string'.")
        }
        if( typeof description !=="string"){
            errorCode = 422
            throw new Error ("O campo nickname deve ser do tipo 'string'.")
        }
        if( typeof creatorUserId !=="string"){
            errorCode = 422
            throw new Error ("O campo nickname deve ser do tipo 'string'.")
        }
        if(typeof limitDate!=="string"){
            errorCode = 422
            throw new Error ("O campo limitDate deve ser do tipo 'string'.")
        } 
        if (!Date.parse(limitDateFormat)) {
            errorCode = 422
            throw new Error("Verifique se está passando o formato de data correto (DD/MM/AAAA) ou se a mesma possui um valor válido.")
          }       

        const index:number = (await users).findIndex((user:User) => creatorUserId === user.id)
        
        if(index<0){
            errorCode = 404
            throw new Error("Usuário não cadastrado.")
        }

        await connection
        .insert({
            id: Date.now().toString(),
            title,
            description,
            limit_Date: limitDateFormat,
            user_id: creatorUserId
        })
        .into("Task");
      
        res.send({
            response: "Tarefa cadastrado com sucesso."
        })

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage )
    }
}