import { connection } from '../data/connection'

export async function selectAllUsers():Promise<any> {
    const result = await connection('aula48_exercicio')
 
    return result
 }

 export async function searchUsers(filter: string, prop: string):Promise<any> {
    const result = await connection('aula48_exercicio').where(`${prop}`, "like", `%${filter}%`)
 
    return result
 }

 export async function orderUsers(sort: string, order: string):Promise<any> {
   const result = await connection('aula48_exercicio')
   .orderBy(sort, order)

   return result
}
 export async function pages(page: number):Promise<any> {
   const size = 5
   let offset = (page-1) * size

   const result = await connection('aula48_exercicio')
   .limit(size)
   .offset(offset)

   return result
}

export async function selectAllUsersNoFilter(page: number, sort: string, order: string ):Promise<any> {
   const size = 5
   let offset = (page-1) * size
   console.log(sort, order, page )
   const result = await connection('aula48_exercicio')
   .orderBy(sort, order)
   .limit(size)
   .offset(offset)

   return result
}

export async function selectAllUserComplete(page: number, sort: string, order: string, name:string, type: string ):Promise<any> {
   const size = 5
   let offset = (page-1) * size
   
   const result = await connection('aula48_exercicio')
   .where("name", "like", `%${name}%`)
   .where("type", "like", `%${type}%`)
   .orderBy(sort, order)
   .limit(size)
   .offset(offset)

   return result
}



