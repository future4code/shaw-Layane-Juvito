import { Response, Request } from 'express'
import { connection } from '../connection'
import { users } from '../app'
import { User } from '../types'

export const UpdateUser = async (req: Request, res: Response) => {
    let errorCode = 500
    const {name, nickname} = req.body

    try {
        if(!name || !nickname){
            errorCode = 422
            throw new Error ("Todos os campos são obrogatórios.")
        }
        if(typeof name !=="string"){
            errorCode = 422
            throw new Error ("O campo name deve ser do tipo 'string'.")
        }
        if( typeof nickname !=="string"){
            errorCode = 422
            throw new Error ("O campo nickname deve ser do tipo 'string'.")
        }      
        const index:number = (await users).findIndex((user:User) => req.params.id === user.id)
        
        if(index<0){
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        await connection("User")
        .update({
          name: name,
          nickname: nickname,
        })
        .where({id:req.params.id})
      
        res.send({
            response: "Usuário atualizado com sucesso."
        })

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage )
    }
}