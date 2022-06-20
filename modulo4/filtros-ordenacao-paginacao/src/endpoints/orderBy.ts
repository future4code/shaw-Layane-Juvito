import { Request, Response } from "express"
import { orderUsers } from "./queries"

export const orderBy = async(req: Request,res: Response): Promise<void> =>{
   let {sort, order} = req.query
   try {

      if(order !== 'asc' && order !== 'desc') {
         order = 'asc'
      }

       if(sort !== 'name' && sort !== 'type') {
         sort = 'email'
      }


      const users = await orderUsers(sort, order)

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