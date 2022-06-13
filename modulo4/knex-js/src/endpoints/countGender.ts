import { Request, Response } from 'express'
import connection from '../connection'

export const countGender = async (req: Request, res: Response): Promise<any> => {
    const {gender} = req.params
    try {
        let results = []
       
        results = await connection.raw(`SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"`)
      
        res.send({
            response:{
                quantity:results[0][0].count
            } 
    
        })

    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.messagem)
    }
}