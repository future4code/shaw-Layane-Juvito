
import { app } from "./app";
import { UserController } from "./endpoints/UserController";

const useController = new UserController()

app.post('/user/signup', useController.createUser)
app.post('/user/login', useController.login)