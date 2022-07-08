import { app } from './app'
import { UserController } from './UserController'

const userController = new UserController()

app.get('/all', userController.getProfile)
app.post('/signup', userController.signup)
app.post('/login', userController.login)
app.delete('/:id', userController.deleteProfile)
