import { Request, Response } from 'express'
import connection from '../connection'

export const searchMovies = async (req: Request, res: Response): Promise<any> => {
  
    try {
        const result = await connection("Movies").where('synopsis' || 'name', 'like', `%${req.query.search}%`)
      
        res.send({
            response: result
        })

    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.messagem)
    }
}