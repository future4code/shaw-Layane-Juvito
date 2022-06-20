import { Response, Request } from 'express'
import { connection } from '../connection';

export const getUserById = async (req: Request, res: Response) => {
    let errorCode = 400

    try {  
        const user = await connection("User")
        .where({id:req.params.id});
      
        if(user.length===0){
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }
        res.send({
            user:{
                id: user[0].id,
                nickname:user[0].nickname
            }
        })

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage )
    }
}