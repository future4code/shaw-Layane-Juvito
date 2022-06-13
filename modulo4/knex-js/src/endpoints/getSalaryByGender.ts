import { Request, Response } from 'express'
import connection from '../connection'

export const getSalaryByGender = async (req: Request, res: Response): Promise<any> => {
    try {
        const results = await connection
        .avg('salary as average')
        .from('Actor')
        .where({gender:req.query.gender})
      
        res.send({
            response: {
                avarageSalary: results[0].average
            }
        })
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.messagem)
    }
}