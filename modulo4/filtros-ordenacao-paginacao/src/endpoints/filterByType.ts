import { Request, Response } from "express"
import { searchUsers } from "./queries"

export const filterByType = async (req: Request,res: Response): Promise<void> =>{
   const {type} = req.params
   try {
     
    const users = await searchUsers(type, 'type')   

      if(!users.length){
         res.statusCode = 404
         throw new Error("User not found")
      }

      res.status(200).send(users)
      
   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}


