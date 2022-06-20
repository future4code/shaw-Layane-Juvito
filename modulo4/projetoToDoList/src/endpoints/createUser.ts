import { Response, Request } from 'express'
import { users } from '../app';
import { connection } from '../connection';
import { User } from '../types';

export const CreateUser = async (req: Request, res: Response) => {
    let errorCode = 500
    const {name, nickname, email} = req.body
    try {
        if(!name || !nickname || !email){
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
        if(typeof email!=="string"){
            errorCode = 422
            throw new Error ("O campo email deve ser do tipo 'string'.")
        }        

        const index:number = (await users).findIndex((user:User) => email === user.email)
        console.log(index)
        if(index>=0){
            errorCode = 404
            throw new Error("Email já cadastrado.")
        }

        await connection
        .insert({
          id: Date.now().toString(),
          name: name,
          nickname: nickname,
          email: email
        })
        .into("User");
      
        res.send({
            response: "Usuário cadastrado com sucesso."
        })

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage )
    }
}