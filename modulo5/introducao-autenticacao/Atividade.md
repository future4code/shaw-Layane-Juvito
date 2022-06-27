# Exercício: Introdução a Autenticação

## Exercício 1:

a) As strings permitem adicionar uma maior variedade de caracteres o que pode tornar os id mais fortes, seguros e abrangentes. Sim.

b)

```
import { v4 } from "uuid";

export default class IdGenerator {
    public idGenerator():string{
        return v4 ()
    }
}
```

## Exercício 2:

a) Primeiro foi estabelecida a conexão com o banco de dados por meio do knex, em seguida foi construido o método responsável por criar um novo usuário no banco de dados usando aquela conexão.

b)
```
CREATE TABLE user (
	id VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    CHECK (LENGTH (password) >= 8)
);
```

c)

```
import { BaseDB } from './BaseDB'

const tableName = "user"

export default class UserDB extends BaseDB{
    public createUser = async (id: string, email: string, password: string) => {
        await BaseDB.connection
          .insert({
            id,
            email,
            password,
          })
          .into(tableName);
      };
}
```

## Exercício 3:

a) `as String` irá falar que a variável deve ser considerada como sendo do tipo `string`. 

O typescript entende que a variável que vem do arquivo ***.env*** pode ser do tipo `string` ou `undefined`(caso a variável não seja declarada), porém estamos garantindo que ela será criada e portanto será do tipo `string`.

b)

classe:

```
import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";


const expiresIn = "1min"

export class Authenticator {
    
    // private static expiresIn = "1min"

    public generateToken = (payload: AuthenticationData): string => {
        
      const token = jwt.sign( 
        payload,
        process.env.JWT_KEY as string,
        { expiresIn }
      );

      return token;
    }
}
```
type:
```
export type AuthenticationData = {
    id: string;
}
```

## Exercício 4:

a)

```
import { Request, Response } from 'express'
import UserDB from '../data/UserDB'
import UserModel from '../model/UserModel'
import { Authenticator } from '../services/Authenticator'
import IdGenerator from '../services/IdGenerator'


export class UserController {

public async createUser(req: Request, res: Response) {

        try {
            const { email, password } = req.body

            if (typeof email !== "string") {
                res.statusCode = 422
                throw new Error("O campo 'email' deve ser do tipo string.")
            }
            if (typeof password !== "string") {
                res.statusCode = 422
                throw new Error("O campo 'password' deve ser do tipo string.")
            }
            if (!email || !password) {
                res.statusCode = 422
                throw new Error("Senha e/ou email inválidos.")
            }

          

            const newId = new IdGenerator()
            const id = newId.idGenerator()
            const newUser: UserModel = new UserModel(id, email, password)
            const userController = new UserDB()

            userController.createUser(newUser)

            const authenticator = new Authenticator()
            const token  = authenticator.generateToken({id})
        
            res.status(201).send({token})

        } catch (error: any) {
            res.status(500).send(error.message)
        }

    }

}
```

b)
```
if (!email || !email.includes("@")) {
  res.statusCode = 422
  throw new Error("Email inválido.")
}
```
c)
```
if(!password || password.length < 6){
    res.statusCode = 422
    throw new Error("Senha inválida.")
}
```

## Exercício 5:

a)

```
public async getUserByEmail(email:string):Promise<User | null>{
      
        const user:User[] = await BaseDB.connection
        .select("*")
        .where({email})
        .from(tableName)

        if(user.length){
          return {
            id:user[0].id,
            email:user[0].email,
            password: user[0].password
          }
        } else {
          return null
        }
}
```

## Exercicio 6:

a) e b)

```
public async login(req:Request, res:Response){

        try {

        const {email, password} = req.body

        const userController = new UserDB()
        const checkUser = await userController.getUserByEmail(email)

        if(!checkUser){
            res.statusCode = 404
            throw new Error("Usuário não cadastrado")
        }

        if(checkUser.password !== password){
            res.statusCode = 409
            throw new Error("Senha ou email inválidos.")
        }

        if (!email || !email.includes("@")) {
            res.statusCode = 422
            throw new Error("Email inválido.")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({ id:checkUser.id })

        res.status(200).send({ token })
        
        } catch (error:any) {
            res.status(500).send(error.message)
        }  

    }
```

## Exercício 7:

a) `as any` irá falar que a variável deve ser considerada como sendo do tipo `any`. 

O typescript entende que a variável que vem do arquivo ***jwt.verify(token, process.env.JWT_KEY as string)*** não possui um tipo definido, porém estamos garantindo que ela será do tipo `any`.

b) 
```
public getTokenData = (token: string): AuthenticationData | null => {
      try {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
        return data
      } catch (error) {
        return null
      }
  }
```
