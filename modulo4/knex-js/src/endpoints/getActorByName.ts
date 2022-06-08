import { Request, Response } from 'express'
import connection from '../connection'

export const getActorByName = async (req: Request, res: Response): Promise<any> => {
    const { name } = req.query
    try {
        let results = []
      
        name ?  results = await connection.raw(`SELECT * FROM Actor WHERE name LIKE "%${name}%"`):results =  await connection.raw(`SELECT * FROM Actor`)
      
        res.send({
            response: results[0]
        })

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.messagem)
    }
}