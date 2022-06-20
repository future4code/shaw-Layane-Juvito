import { app } from './app'
import { CreateTask } from './endpoints/createTask'
import { CreateUser } from './endpoints/createUser'
import { getTaskById } from './endpoints/getTaskById'
import { getUserById } from './endpoints/getUserById'
import { UpdateUser } from './endpoints/updateUser'

app.get('/user/:id', getUserById)
app.get('/task/:id', getTaskById)
app.post('/user', CreateUser)
app.post('/task', CreateTask)
app.put('/user/edit/:id', UpdateUser)