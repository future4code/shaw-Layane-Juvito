import { Request, Response } from 'express'
import connection from '../connection'

export const updateSalary = async (req: Request, res: Response): Promise<any> => {

    try {
        await connection('Actor').update({
            salary:req.body.salary
        }).where({
            id:req.params
        })
      
        res.send({
            response: "Usuário atualizado com sucesso!"
        })

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.messagem)
    }
}