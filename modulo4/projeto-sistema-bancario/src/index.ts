import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import * as fs from 'fs'
import { Client, Statement } from './types'

const app = express()
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`);
  }
})

let clients: Client[] = []

// Ler o arquivo .txt que armazena os dados
fs.readFile('./src/data/clients.txt', 'utf8', (err: any, data: any) => {
  if (err) throw err;
  clients = JSON.parse(data)
});

// pega a data atual no formato sesejado
const dateNow = () => {
  let date = new Date(),
      day = date.getDate().toString().padStart(2, '0'),
      month = (date.getMonth() + 1).toString().padStart(2, '0'),
      year = date.getFullYear()

  return {day, month, year}
}

// faz as verificações envolvendo datas
const checkDate = (birthday: string, checkType:string): boolean => {
  const {day, month, year} = dateNow()
  let response:boolean = false

  const [dayClient, monthClient, yearClient] = birthday.split('/')
  const checkYear = year - Number(yearClient)
  const checkMonth = Number(month) - Number(monthClient)
  const checkDay = Number(day) - Number(dayClient)
// Math.floor((Date.now() - newDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000))

  switch(checkType){
    case 'age':
      if ((checkYear === 18 && checkMonth < 0) || checkYear < 18 || (checkYear === 18 && checkMonth === 0 && checkDay < 0)) {
        response = false
      } else {
        response = true
      }

      break
    case 'datePast':
      if(checkYear>0 || (checkYear===0 && checkMonth>0) || (checkYear === 0 && checkMonth === 0 && checkDay > 0)){
        response = false
      }else{
        response = true
      }

  }

  return response
}

// retorna todos os clientes
app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(clients)
})

// retorna o saldo de um cliente
app.get("/users/:name", (req: Request, res: Response) => {
  let errorCode = 400
  const cpf = req.headers.authorization
  const {name} = req.params

  try {
    if(!cpf){
      errorCode = 401
      throw new Error("Credenciais ausentes.")
    }

    const indexClient: number = clients.findIndex((client:Client):boolean => client.cpf === cpf && client.name===name)

    if(indexClient<0){
      errorCode = 401
      throw new Error("Credenciais inválidas.")
    }
    res.send({
      response:{
        accountBalance: clients[indexClient].accountBalance
      }
    })
  } catch (error:any) {
    res.status(errorCode).send({
      message: error.message
    })
  }

}) 

// cadastra cliente
app.post("/users", (req: Request, res: Response) => {
  let errorCode = 400
  const { name, cpf, birthday } = req.body

  try {
    if (!name || !cpf || !birthday) {
      errorCode = 422
      throw new Error("Todos os campos são obrigatórios.")
    }
    if (typeof name !== "string") {
      errorCode = 422
      throw new Error("Certifique-se que o campo 'name' é do tipo string.")
    }
    if (typeof cpf !== "string") {
      errorCode = 422
      throw new Error("Certifique-se que o campo 'cpf' é do tipo string.")
    }
   
    if (typeof birthday !== "string") {
      errorCode = 422
      throw new Error("Certifique-se que o campo 'birthday' é do tipo string.")
    }

    if(!Date.parse(birthday)){
      errorCode = 422
      throw new Error("Verifique se está passando o formato de data correto (DD/MM/AAAA) ou se a mesma possui um valor válido.")
    }

    if (!checkDate(birthday, 'age')) {
      errorCode = 403
      throw new Error("Nossos clientes devem ser maiores de idade.")
    }

    const checkCpf: number = clients.findIndex((client: Client): boolean => client.cpf === cpf)

    if (checkCpf >= 0) {
      errorCode = 422
      throw new Error("Já existe um cliente cadastrado com o CPF informado.")
    }
    const newClient: Client = {
      id: Date.now().toString(),
      name,
      cpf,
      birthday,
      accountBalance: 0,
      accountStatement: []
    }

    clients.push(newClient)

    // atualiza o arquivo de dados
    fs.writeFile('./src/data/clients.txt', JSON.stringify(clients), { flag: 'w+' }, (err: any) => { });

    res.status(201).send({
      message: "Cliente cadastrado com sucesso!"
    })

  } catch (error: any) {

    res.status(errorCode).send({
      message: error.message
    })
  }

})

// adiciona saldo
app.put("/users/:name", (req:Request, res: Response) => {
  const {value} = req.body
  const cpf = req.headers.authorization
  const {name} = req.params
  let errorCode:number = 400
  try {
    if(!cpf){
      errorCode = 401
      throw new Error("Credenciais ausentes.")
    }
    if(!value){
      errorCode = 422
      throw new Error("O campo 'value' é obrigatório.")
    }
    if (typeof value !== "number") {
      errorCode = 422
      throw new Error("Certifique-se que o campo 'value' é do tipo number.")
    }
    const index:number = clients.findIndex((client:Client):boolean => client.cpf===cpf && client.name === name)

    if(index<0){
      errorCode = 404
      throw new Error("Não existe um usuário cadastrado com essas credenciais.")
    }
    const client:Client = {...clients[index]}
    const {day, month, year} = dateNow()

    // atualiza o extrato
    const accountStatement:Statement = {
      value: value,
      date:`${day}/${month}/${year}`,
      description: `Depósito de R$ ${value.toFixed(2).replace('.',',')}.`
    }

    client.accountStatement.push(accountStatement)

    // atualiza o saldo
    const newAccountBalance = client.accountBalance + value

    clients[index]={
      ... client,
      accountBalance: newAccountBalance  
    }

    // atualiza o arquivo de dados
    fs.writeFile('./src/data/clients.txt', JSON.stringify(clients), { flag: 'w+' }, (err:any) => {});

    res.send({
      response:{
        message: "Saldo adicionado com sucesso.",
        accountBalance: newAccountBalance
      }
    })

  } catch (error:any) {
    res.status(errorCode).send({
      message:error.message
    })
  }
})

// realiza um pagamento
app.post("/users/:name/payment", (req:Request, res: Response) => {
  const {value, description, paymentDate} = req.body
  const cpf = req.headers.authorization
  const {name} = req.params
  let message:string = `Pagamento agendado para o dia ${paymentDate}.`
  let errorCode:number = 400

  try {
    if(!cpf){
      errorCode = 401
      throw new Error("Credenciais ausentes.")
    }
    if(!value || !description){
      errorCode = 422
      throw new Error("Os campos 'value' e 'description' são obrigatório.")
    }
    if (typeof value !== "number") {
      errorCode = 422
      throw new Error("Certifique-se que o campo 'value' é do tipo number.")
    }
    if (typeof description !== "string") {
      errorCode = 422
      throw new Error("Certifique-se que o campo 'description' é do tipo string.")
    }
    if(paymentDate && typeof paymentDate !== "string") {
      errorCode = 422
      throw new Error("Certifique-se que o campo 'paymentDate' é do tipo string.")
    }
    if(paymentDate && !Date.parse(paymentDate)){
      errorCode = 422
      throw new Error("Verifique se está passando o formato de data correto (DD/MM/AAAA) ou se a mesma possui um valor válido.")
    }
    
    if(paymentDate && !checkDate(paymentDate, 'datePast') ){
      errorCode = 422
      throw new Error("Não é possível agendar um pagamento para um dia que já passou.")
    }

    const index:number = clients.findIndex((client:Client):boolean => client.cpf===cpf && client.name === name)

    if(index < 0){
      errorCode = 404
      throw new Error("Não existe um usuário cadastrado com essas credenciais.")
    }
    const client:Client = {...clients[index]}

    if(value > client.accountBalance){
      errorCode = 422
      throw new Error("Saldo insuficiente.")
    }

    const {day, month, year} = dateNow()

    const accountStatement:Statement = {
      value,
      date: paymentDate ? paymentDate : `${day}/${month}/${year}`,
      description
    }
    client.accountStatement.push(accountStatement)

    // se o pagamento for para hj ele ja atualiza o saldo
    if(paymentDate && paymentDate === `${day}/${month}/${year}`){
      const newAccountBalance = client.accountBalance - value
      clients[index]={
        ... client,
        accountBalance: newAccountBalance  
      }
      message = 'Pagamento realizado com sucesso.'
    }

    
    fs.writeFile('./src/data/clients.txt', JSON.stringify(clients), { flag: 'w+' }, (err:any) => {});

    res.send({
      response:{
        message: message,
        accountBalance: clients[index].accountBalance
      }
    })

  } catch (error:any) {
    res.status(errorCode).send({
      message:error.message
    })
  }
})

// realiza tranfêrencia entre clientes do banco
app.post("/users/:name/transfer", (req:Request, res: Response) => {
  const {value, receiverName, receiverCpf} = req.body
  const cpf = req.headers.authorization
  const {name} = req.params
  
  let errorCode:number = 400

  try {
    if(!cpf){
      errorCode = 401
      throw new Error("Credenciais ausentes.")
    }
    if(!value || !receiverName || !receiverCpf){
      errorCode = 422
      throw new Error("\todos os campos são obrigatório.")
    }
    if (typeof value !== "number") {
      errorCode = 422
      throw new Error("Certifique-se que o campo 'value' é do tipo number.")
    }
    if (typeof receiverName !== "string") {
      errorCode = 422
      throw new Error("Certifique-se que o campo 'receiverName' é do tipo string.")
    }
    if(typeof receiverCpf !== "string") {
      errorCode = 422
      throw new Error("Certifique-se que o campo 'receiverCpf' é do tipo string.")
    }

    const receiverIndex:number = clients.findIndex((client:Client):boolean => client.cpf===receiverCpf && client.name === receiverName)

    if(receiverIndex<0){
      errorCode = 404
      throw new Error("O destinatário não possui cadastro no nosso sistema.")
    }
    
    const index:number = clients.findIndex((client:Client):boolean => client.cpf===cpf && client.name === name)

    if(index < 0){
      errorCode = 404
      throw new Error("Não existe um usuário cadastrado com essas credenciais.")
    }
    const client:Client = {...clients[index]}

    if(value > client.accountBalance){
      errorCode = 422
      throw new Error("Saldo insuficiente.")
    }
    const receiver:Client = {...clients[receiverIndex]}

    const {day, month, year} = dateNow()

    // definir a descrição de acordo com o usuário que está recebendo ou realizando a tranferência e assim atualizar o extrato
    const accountStatement = (user:string):Statement => {
      let description:string = ''
      user === "client" ?
      description = `${name} tranferiu R$ ${value.toFixed(2).replace('.',',')} para ${receiverName}`
      :
      description = `${receiverName} recebeu R$ ${value.toFixed(2).replace('.',',')} de ${name}`

      return {
        value,
        date: `${day}/${month}/${year}`,
        description:description
      }
    }

    client.accountStatement.push(accountStatement("client"))
    receiver.accountStatement.push(accountStatement("receiver"))

    // atualiza o saldo do usuário que reaiza a tranferência
    clients[index] = {...client,
      accountBalance: client.accountBalance - value
    }

    // atualiza o saldo do usuário que recebe a transferÊncia
    clients[receiverIndex] = {...receiver,
      accountBalance: receiver.accountBalance + value
    }

    // atualiza o arquivo de dados
    fs.writeFile('./src/data/clients.txt', JSON.stringify(clients), { flag: 'w+' }, (err:any) => {});

    res.send({
      response:{
        message: "Transferência realizada com sucesso.",
        accountBalance: clients[index].accountBalance
      }
    })

  } catch (error:any) {
    res.status(errorCode).send({
      message:error.message
    })
  }
})

// PRECISA FAZER A REQUESIÇÃO DE ATUALIZAR SALDO 




