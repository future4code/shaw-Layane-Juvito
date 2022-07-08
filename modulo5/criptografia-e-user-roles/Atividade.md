# Exercício: Criptografia e User Roles


## Exercício 1:

a)
salt: consiste em simplesmente prefixar a senha com um dado aleatório antes que a mesma seja hasheada. Esse salt é criado durante o registro da senha, e então armazenado junto à mesma no BD.
round: fator cost que está realicionado à segurança da senha, quanto maior seu valor, maiorr o tempo de execução do algoritmo. Usei 12, por ser o padrão na
maioria das libs.

b)
```
import {genSalt, hash} from "bcryptjs"

export class HashMenage {
    public generateHash = async (password: string) => {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await genSalt(rounds)
        const result = await hash(password, salt) 

        return result
    }
}
```
c)
```
public compare = async (password: string, hash: string): Promise<boolean> => {
  const result = await compare(password, hash)
  return result
}
```

## Exercicio 2:
a) O cadastro, pois é nele que a senha é criada, então deve ser criptografada antes de ser armazenada no BD.

b)
```
public async createUser(req: Request, res: Response){

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
    if (!email || !email.includes("@")) {
        res.statusCode = 422
        throw new Error("Email inválido.")
    }

    if (!password || password.length < 6) {
        res.statusCode = 422
        throw new Error("Senha inválida.")
    }

    const newId = new IdGenerator()
    const id = newId.idGenerator()

    const hashMenage = new HashMenage()
    const hash = await hashMenage.generateHash(password)

    const newUser: UserModel = new UserModel(id, email, hash)

    const userController = new UserDB()
    userController.createUser(newUser)

    const authenticator = new Authenticator()
    const token = authenticator.generateToken({ id })

    res.status(201).send({ token })

  } catch (error: any) {
    res.status(500).send(error.message)
  }

}
```

c)

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
  
  const hashMenage = new HashMenage()
  const passwordIsCorrect: boolean = await hashMenage.compare(password, checkUser.password)

  if(!passwordIsCorrect){
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

d) não, pois o getprofile faz uso do token gerado no login, portanto não precisa gerar ou verificar senha.

## Exercicio 3:

a)
```
CREATE TABLE user (
	id VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM ("normal","admin") DEFAULT "normal",
    CHECK (LENGTH (password) >= 6)
);
```

b)
```
import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

export class Authenticator {

    public generateToken = (payload: AuthenticationData): string => {
      
      const token = jwt.sign( 
        payload,
        process.env.JWT_KEY as string,
        { expiresIn: "1min" }
      );

      return token;
    }

    public getTokenData = (token: string): AuthenticationData | null => {
      try {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
        
        return {
          id: data.id,
          role: data.role
        }
      } catch (error) {
        return null
      }
  }
}
```
c)
```
public async createUser(req: Request, res: Response){

        try {
            let { email, password, role } = req.body

            if (typeof email !== "string") {
                res.statusCode = 422
                throw new Error("O campo 'email' deve ser do tipo string.")
            }
            if (typeof password !== "string") {
                res.statusCode = 422
                throw new Error("O campo 'password' deve ser do tipo string.")
            }
            if (!email || !email.includes("@")) {
                res.statusCode = 422
                throw new Error("Email inválido.")
            }

            if (!password || password.length < 6) {
                res.statusCode = 422
                throw new Error("Senha inválida.")
            }

            if(!role){
                role = "normal"
            }
            if(role !== "normal" || role !== "admin"){
                res.statusCode = 422
                throw new Error("O campo 'role' só pode assumir os valores 'normal' ou 'admin'.")
            }

            const newId = new IdGenerator()
            const id = newId.idGenerator()

            const hashMenage = new HashMenage()
            const hash = await hashMenage.generateHash(password)

            const newUser: UserModel = new UserModel(id, email, hash, role)

            const userController = new UserDB()
            userController.createUser(newUser)

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({ id,role })

            res.status(201).send({ token })

        } catch (error: any) {
            res.status(500).send(error.message)
        }

    }
```
d)
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
        
        const hashMenage = new HashMenage()
        const passwordIsCorrect: boolean = await hashMenage.compare(password, checkUser.password)

        if(!passwordIsCorrect){
            res.statusCode = 409
            throw new Error("Senha ou email inválidos.")
        }

        if (!email || !email.includes("@")) {
            res.statusCode = 422
            throw new Error("Email inválido.")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({ id:checkUser.id, role: checkUser.role })

        res.status(200).send({ token })
        
        } catch (error:any) {
            res.status(500).send(error.message)
        }
    }
```

## Exercício 4:

a)
```
public async getProfile(req: Request, res: Response) {
        try {
            const token = req.headers.authorization
            if (!token) {
                throw new Error("Token não enviado.")
            }
            const authenticator = new Authenticator()
            const data = authenticator.getTokenData(token)

            if (!data) {
                res.statusCode = 404
                throw new Error("Token inválido")
            }

            if (data.role !== "normal") {
                res.statusCode = 401
                throw new Error("Usuário não autorizado.")
            }

            const userDB = new UserDB()
            const user = await userDB.getUserById(data.id)

            if (!user) {
                res.sendStatus(404)
                throw new Error("Usuário não encontrado.")
            }

            res.send({
                user: {
                    email: user.email,
                    id: user.id
                }
            })


        } catch (error: any) {
            res.send({ message: error.message })
        }
    }
```

