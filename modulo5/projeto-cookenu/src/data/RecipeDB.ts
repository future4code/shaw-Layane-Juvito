import BaseDB from './BaseDB'
import RecipeModel from '../model/RecipeModel'


export default class RecipeDB extends BaseDB {

    public async createRecipe (recipe: RecipeModel):Promise<void> {
        await BaseDB.connection("recipe")
        .insert({
            id: recipe.getId(),
            title: recipe.getTitle(),
            description: recipe.getDescription(),
            created_at: recipe.getCratedAt(),
            user_id: recipe.getUserId()
        })
    }

    public async getRecipe (id: string) {
        const recipe = await BaseDB.connection("recipe")
        .select("id", "title", "created_at as createdAt", "description")
        .where({id})

        return recipe
    }
}