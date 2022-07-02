import { Request, Response } from 'express'
import RecipeDB from '../data/RecipeDB'
import RecipeModel from '../model/RecipeModel'
import { Authenticator } from '../services/Authenticator'
import IdGenerator from '../services/IdGenerator'

export class RecipeController {
    public async newRecipe(req: Request, res: Response) {
        try {
            const { title, description } = req.body

            const token = req.headers.authorization

            if (!token) {
                res.statusCode = 401
                throw new Error("Não autorizado.")
            }

            const authenticator = new Authenticator()
            const userData = authenticator.getTokenData(token)

            if (!userData) {
                res.statusCode = 401
                throw new Error("Token expirado ou inválido.")
            }

            if (!title || !description) {
                res.statusCode = 422
                throw new Error("Todos os campos são obrigatórios.")
            }

            if (typeof title !== "string" || typeof description  !== "string") {
                res.statusCode = 422
                throw new Error("Todos os campos devem ser do tipo 'string'.")
            }

            const recipeId = new IdGenerator()
            const id = recipeId.idGenerator()

            const dateNow = new Date()
            const createdAt = dateNow.getFullYear() + '-' + (dateNow.getMonth() + 1) + '-' + dateNow.getDate();

            const recipe = new RecipeModel(id,title,description,createdAt,userData.id)

            const recipeDB = new RecipeDB()

           await recipeDB.createRecipe(recipe)

            res.status(201).send({ message: "Receita criada com sucesso" })

        } catch (error: any) {
            res.send({
                message: error.slqMessage || error.message
            })
        }
    }
    
}