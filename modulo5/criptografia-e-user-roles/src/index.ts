
import { app } from "./app";
import { UserController } from "./endpoints/UserController";

const userController = new UserController()

app.post('/user/signup', userController.createUser)
app.post('/user/login', userController.login)
app.get('/user/profile', userController.getProfile)