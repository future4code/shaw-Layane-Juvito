import { Request, Response } from 'express'
import connection from '../connection'

export const createMovie = async (req: Request, res: Response): Promise<any> => {
  
    try {
        await connection
        .insert({
          id: Date.now().toString(),
          name: req.body.name,
          synopsis: req.body.synopsis,
          release_date: new Date(req.body.releaseDate), 
          playing_limit_date: new Date(req.body.playingLimitDate),
          rating: req.body.rating
        })
        .into("Movies");
      
        res.send({
            response: "Filme cadastrado com sucesso."
        })

    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.messagem)
    }
}