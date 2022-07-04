import { app } from './app'
import { UserController } from './UserController'

const userController = new UserController()

app.post('/signup', userController.signup)
app.post('/login', userController.login)
app.get('/all', userController.getProfile)
