import { Request, Response } from "express"
import { searchUsers, selectAllUsers } from "./queries"

export const getAllUsers = async (req: Request,res: Response): Promise<void> =>{
   const {name} = req.query
   let users = []
   try {
      if(!name){
         users = await selectAllUsers()
      }else{
         users = await searchUsers(name as string, 'name')   
      }

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



