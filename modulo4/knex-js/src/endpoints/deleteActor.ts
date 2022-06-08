import { Request, Response } from 'express'
import connection from '../connection'

export const deleteActor = async (req: Request, res: Response): Promise<any> => {

    try {
        await connection("Actor")
        .delete()
        .where({ id: req.params.id })
      
        res.send({
            response: "Usuário excluído com sucesso!"
        })

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.messagem)
    }
}