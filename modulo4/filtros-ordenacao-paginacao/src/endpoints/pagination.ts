import { Request, Response } from "express"
import { pages } from "./queries"

export const pagination = async(req: Request,res: Response): Promise<void> =>{
    try {

        let page = Number(req.query.page)

        if(page < 1 || isNaN(page)) {
           page = 1
        }
  
       const users = await pages(page)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }