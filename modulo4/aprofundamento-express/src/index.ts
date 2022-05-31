import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import * as fs from 'fs'


const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1 : teste

app.get("/ping", (req, res) => {
    res.send("Pong!")
})

// Exercício 2

type Task = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Exercicio 3 e 11 : ler o arquivo tasks.txt e atribui seu valor a variável tasks

let tasks:Task[] =[]

 fs.readFile('./src/tasks.txt', 'utf8', (err:any, data:any) => {
    if (err) throw err;
    tasks = JSON.parse(data)
});

// Exercicio 4 : getTasksByStatus

app.get('/tasks', (req: Request, res: Response) => {
    const status = req.query.status

    if (status === 'finished' || status === 'unfinished') {

        let statusTask: boolean
        status === 'finished' ? statusTask = true : statusTask = false

        const response = tasks.filter((task: Task): boolean => task.completed === statusTask)

        res.send({
            tasks: response
        })

    } else {
        res.status(400).send({
            message: 'Status inválido'
        })
    }

})

// Exercicio 5 e 11: createTasks

app.post('/users/:userId/tasks', (req: Request, res: Response) => {
    const userId: number = Number(req.params.userId)
    const { title } = req.body
    const id: number = tasks[tasks.length - 1].id + 1
    if (typeof title === 'string') {

        const newTask: Task = {
            userId: userId,
            id: id,
            title: title,
            completed: false
        }
      
        tasks.push(newTask)

        // atualiza o arquivo de tasks
        fs.writeFile('./src/tasks.txt', JSON.stringify(tasks), { flag: 'w+' }, (err:any) => {});
          
        res.status(200).send({
            tasks:tasks
        })
    } else {
        res.status(400).send({
            message: 'Certifique-se de passar ums string!'
        })
    }
})

// Exercício 6: updateTask

app.put('/users/:userId/tasks/:taskId', (req: Request, res: Response) => {
    const { completed } = req.body
    const userId = Number(req.params.userId)
    const taskId = Number(req.params.taskId)
    const indexTask: number = tasks.findIndex((task: Task): boolean => task.id === taskId)
    if(indexTask >= 0) {
        if (typeof completed === 'boolean'  && userId === tasks[indexTask].userId) {

            tasks[indexTask] = { ...tasks[indexTask], completed: completed }

            // atualiza o arquivo de tasks
            fs.writeFile('./src/tasks.txt', JSON.stringify(tasks), { flag: 'w+' }, (err:any) => {});

            res.status(200).send({
                tasks: tasks
            })
        } else {
            if (userId !== tasks[indexTask].userId) {
                res.status(401).send({
                    message: 'Usuário não autorizado!'
                })
            } else {
                res.status(400).send({
                    message: 'Certifique-se de passar um booleano!'
                })
            }
        }
    } else {
        res.status(404).send({
            message: 'Task não encontrada!'
        })
        
    }
})

// Exercicio 7: deletetask

app.delete('/users/:userId/tasks/:taskId', (req: Request, res: Response) => {
    const userId = Number(req.params.userId)
    const taskId = Number(req.params.taskId)
    const indexTask: number = tasks.findIndex((task: Task): boolean => task.id === taskId)
    if(indexTask >= 0) {
        if (userId === tasks[indexTask].userId) {

            tasks.splice(indexTask,1)

            // atualiza o arquivo de tasks
            fs.writeFile('./src/tasks.txt', JSON.stringify(tasks), { flag: 'w+' }, (err:any) => {});

            res.status(200).send({
                tasks:tasks
            })
        } else {
        
            res.status(401).send({
                message: 'Usuário não autorizado!'
            })
        }
    } else {
        res.status(404).send({
            message: 'Task não encontrada!'
        })
        
    }
})

// Exercicio 8 e 10: getUserTasks

app.get('/users/:userId/tasks', (req: Request, res: Response)=>{
    const userId:number = Number(req.params.userId)
    const userTasks:Task[] = tasks.filter((task:Task):boolean=>task.userId===userId)
    const others:Task[] = tasks.filter((task:Task):boolean=>task.userId !== userId)

    userTasks.length>0 ? res.status(200).send({
        all: {
            selectedUser: userTasks,
            others: others
        }
    }): res.status(404).send('Usuário não encontrado!')
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
})

