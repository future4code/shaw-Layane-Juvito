// Exercício 1

// a) usando o process.argv[2]

// b)

// const name = process.argv[2]
// const age = process.argv[3]

// console.log(`Olá ${name}! Você tem ${age} anos.`)

// c)

// const futureAge = Number(age) + 7

// console.log(`Olá ${name}! Você tem ${age} anos. Em sete anos você terá ${futureAge}`)

// Exercício 2

// const mathOperation = process.argv[2]
// const firstNumber = Number(process.argv[3])
// const secondNumber = Number(process.argv[4])

// switch(mathOperation){
//     case 'add':
//         console.log("Resposta da soma:", firstNumber + secondNumber)
//         break;
//     case 'sub':
//         console.log("Resposta da subtração:", firstNumber - secondNumber)
//         break;
//     case 'mult':
//         console.log("Resposta da multiplicação:", firstNumber * secondNumber)
//         break;
//     case 'div':
//         console.log("Resposta da divisão:", firstNumber / secondNumber)
//         break;
//     default:
//         console.log("Verifique se você está passando uma operação válida: add, sub, mult, div")
//         break;
// }

// Exercício 3

// const tasks = ["Revisar front", "Fazer a atividade do dia", "Ir pra academia"]

// tasks.push(process.argv[2])
// console.log('A tarefa foi adicionada com sucesso!')
// console.log(tasks)