// Exercício 2

const mathOperation = process.argv[2]
const firstNumber = Number(process.argv[3])
const secondNumber = Number(process.argv[4])
if(firstNumber && secondNumber){

    switch(mathOperation){
        case 'add':
            console.log("\u001b[35m Resposta da soma:", firstNumber + secondNumber)
            break;
        case 'sub':
            console.log("\u001b[35m Resposta da subtração:", firstNumber - secondNumber)
            break;
        case 'mult':
            console.log("\u001b[35m Resposta da multiplicação:", firstNumber * secondNumber)
            break;
        case 'div':
            console.log("\u001b[35m Resposta da divisão:", firstNumber / secondNumber)
            break;
        default:
            console.log("\033[41;1;32m Verifique se você está passando uma operação válida: add, sub, mult, div. \033[0m")
            break;
    }
 
} else {
    console.log("\033[41;1;32m Por favor, você deve inserir dois números após a operação \033[0m")
}