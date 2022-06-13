import { Request, Response } from 'express'
import connection from '../connection'

export const getActorById = async (req: Request, res: Response): Promise<any> => {
    try {
        const results = await connection
        .from('Actor')
        .where({id:req.params.id})
      
        res.send({
            response: results
        })
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.messagem)
    }
}