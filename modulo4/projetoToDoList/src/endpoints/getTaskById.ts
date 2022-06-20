import { Response, Request } from 'express'
import { connection } from '../connection';
import { Task } from '../types';

export const getTaskById = async (req: Request, res: Response) => {
    let errorCode = 400

    try {  
        const user = await connection('Task')
        .join('User', 'User.id', 'Task.user_id')
        .select('Task.id as taskId', 'Task.title', 'Task.description', 'Task.limit_date as limitDate', 'Task.status', 'Task.user_id as creatorUserId', 'User.nickname as creatorUserNickname')
        .where({'Task.id': req.params.id})

        if(user.length===0){
            errorCode = 404
            throw new Error("Nenhuma tarefa cadastrada para esse usuário.")
        }
        
        res.send({
            user: user
        })

    } catch (error:any) {
        res.status(errorCode).send(error.message || error.sqlMessage )
    }
}