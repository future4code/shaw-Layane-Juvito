import { app } from './app'
import { UserController } from './endpoint/UserController'

const userController = new UserController()

app.post("/user", userController.signup)