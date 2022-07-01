import { app } from './app'
import { UserController } from './endpoint/UserController'

const userController = new UserController()
app.get("/user/profile", userController.getUserProfile)
app.get("/user/:id", userController.getOtherUserProfile)
app.post("/user/signup", userController.signup)
app.post("/user/login", userController.login)