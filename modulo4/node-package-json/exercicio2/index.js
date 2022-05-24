// Exercício 2

const mathOperation = process.argv[2]
const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])
if(firstNumber && secondNumber){

    switch(mathOperation){
        case 'add':
            console.log("\u001b[32m Resposta da soma:", firstNumber + secondNumber)
            break;
        case 'sub':
            console.log("\u001b[33m Resposta da subtração:", firstNumber - secondNumber)
            break;
        case 'mult':
            console.log("\u001b[35m Resposta da multiplicação:", firstNumber * secondNumber)
            break;
        case 'div':
            console.log("\u001b[36m Resposta da divisão:", firstNumber / secondNumber)
            break;
        default:
            console.log("\030[31m Verifique se você está passando uma operação válida: add, sub, mult, div")
            break;
    }
 
} else {
    console.log("\030[31m Por favor, você deve inserir dois números após a operação")
}
