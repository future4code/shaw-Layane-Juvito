import { app } from './app'
import { RecipeController } from './endpoint/RecipeController'
import { UserController } from './endpoint/UserController'

const userController = new UserController()
const recipeController = new RecipeController()
app.get("/user/profile", userController.getUserProfile)
app.get("/user/:id", userController.getOtherUserProfile)
app.post("/user/signup", userController.signup)
app.post("/user/login", userController.login)
app.post("/recipe", recipeController.newRecipe)