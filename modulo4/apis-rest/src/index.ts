import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'

enum Type {
  ADMIN = 'ADMIN',
  NORMAL = 'NORMAL'
}
type User = {
  id: number,
  name: string,
  email: string,
  type: Type,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: Type.ADMIN,
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: Type.NORMAL,
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: Type.NORMAL,
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: Type.NORMAL,
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: Type.ADMIN,
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: Type.ADMIN,
    age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`);
  }
})


// Exercicio 1, 2 e 3: método: GET, entidade: /users, usando query pois é para realizar uma busca por tipo ou por nome
app.get("/users", (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const { type, search } = req.query

    if (!type && !search) {
      res.send({
        response: {
          quantity: users.length,
          users: users
        }
      })
    } 

    if(type && type !== Type.ADMIN && type !== Type.NORMAL){
      errorCode = 422
      throw new Error("Só são aceitos os tipos 'ADMIN' ou 'NORMAL'.")
    }

    let userFilter:User[] =[]

    type && search ? 
    userFilter = users.filter((user:User):boolean => user.type === type).filter((user:User):boolean => user.name.toLowerCase().includes((search as string).toLowerCase())) 
    : type && !search ?
    userFilter = users.filter((user:User):boolean => user.type === type)
    : userFilter = users.filter((user:User):boolean => user.name.toLowerCase().includes((search as string).toLowerCase()))
    
    if (userFilter.length===0){
      errorCode = 404
      throw new Error("Usuário não encontrado.")
    }
    
    res.send({
      response: {
        quantity: userFilter.length,
        users: userFilter
      }
    })
    

  } catch (error:any) {
      res.status(errorCode).send(error.message)
  }

})

// Exercicio 4: usando put não mudou nada, funcinou da mesma forma. Porém acredito que o post é o método apropriado, pois a função desse endpoint é criar um novo usuário, o put é indicado para atualizações.
app.post('/users', (req:Request, res: Response) => {
  let errorCode = 400

  try {
    const {name, email, type, age} = req.body

    if(!name || !email || !type || !age){
      errorCode = 422
      throw new Error("Verifique se está passando todos os campos.")
    }
    if(typeof name !== "string"){
      errorCode = 422
      throw new Error("O campo 'name' deve ser do tipo string.")
    }
    if(typeof email !== "string"){
      errorCode = 422
      throw new Error("O campo 'email' deve ser do tipo string.")
    }
    const checkEmail: User | undefined = users.find((user:User):boolean => user.email === email)

    if(checkEmail){
      errorCode = 409
      throw new Error("Email já cadastrado.")
    }
    if(typeof age !== "number"){
      errorCode = 422
      throw new Error("O campo 'age' deve ser do tipo number.")
    }
    if( type !== Type.ADMIN && type !== Type.NORMAL){
      errorCode = 422
      throw new Error("O campo 'type' deve passar um dos valores: NORMAL ou ADMIN.")
    }
    const newUser: User = {
      id: users[users.length-1].id+1,
      name,
      email,
      type,
      age
    } 

    users.push(newUser)

    res.status(201).send({
      response: {
        message: "Usuário criado.",
        quantity: users.length,
        users:users
      }
    })
  //  
  } catch (error:any) {
    res.status(errorCode).send(error.message)
  }
})

// Exercicio 5 
app.put('/users/:id', (req:Request, res:Response) =>{
  let errorCode = 400
  try {
    const name:string = req.body.name as string 
    const id :number = Number(req.params.id)
    if(!name){
      errorCode=422
      throw new Error("Campo 'name' obrigatório")
    }
    if(typeof name !== "string"){
      errorCode=422
      throw new Error("Campo 'name' deve ser do tipo string")
    }

    const index = users.findIndex((user:User):boolean =>user.id===id)

    if(index < 0){
      errorCode=404
      throw new Error("Usuário não encontrado.")
    }

    users[index] = {...users[index], name:name+'-ALTERADO'}
    res.end()
    
  } catch (error:any) {
    res.status(errorCode).send(error.message)
  }
})

// Exercicio 6
app.patch('/users/:id', (req:Request, res:Response) =>{
  let errorCode = 400
  try {
    const name:string = req.body.name as string 
    const id :number = Number(req.params.id)
    if(!name){
      errorCode=422
      throw new Error("Campo 'name' obrigatório")
    }
    if(typeof name !== "string"){
      errorCode=422
      throw new Error("Campo 'name' deve ser do tipo string")
    }

    const index = users.findIndex((user:User):boolean =>user.id===id)

    if(index < 0){
      errorCode=404
      throw new Error("Usuário não encontrado.")
    }

    users[index] = {...users[index], name:name+'-REALTERADO'}
    res.end()
    
  } catch (error:any) {
    res.status(errorCode).send(error.message)
  }
})

// Exercicio 7
app.delete('/users/:id', (req:Request, res:Response) =>{
  let errorCode = 400
  try {
    const id :number = Number(req.params.id)

    const index = users.findIndex((user:User):boolean =>user.id===id)

    if(index < 0){
      errorCode=404
      throw new Error("Usuário não encontrado.")
    }

    users.splice(index,1)

    res.send({
      response:{
        message: "Usuário excluído.",
        users:users
      }
    })
    
  } catch (error:any) {
    res.status(errorCode).send(error.message)
  }
})