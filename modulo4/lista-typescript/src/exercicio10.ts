// Exercício 10

// Você deve criar uma função que receba o CPF no formato “xxx.xxx.xxx-xx” e faça uma validação do valor recebido. Caso o CPF recebido seja válido retorne um True e caso seja inválido retorne False

const checaNumero = (numeros:string[], countNumber:number):number => {
    let soma:number = 0
    numeros.forEach((numero:string, index:number):void=>{
        soma = soma + Number(numero)*(countNumber-index)
    })
    let verifiqueNumero = 11 - (soma%11)
    verifiqueNumero >=10 ? verifiqueNumero=0 : verifiqueNumero
    return verifiqueNumero
}

const hasDuplicates = (array:string[]):boolean => {
    return (new Set(array)).size === 1;
}

const validaCPF = (cpf:string):boolean => {

    const numeros:string[] = cpf.split('-').join('').split('.').join('').split('')

    // verifica se todos os números são iguais
    const naoValido:boolean = hasDuplicates(numeros)
   
    if (naoValido) {

        return false
    }else {


        // verifica o primeiro digigito do DV do cpf
        const numerosteste:string[] = numeros.slice(0,9)
        const penultimoDigito = checaNumero(numerosteste,10)


        // verifica o segundo digigito do DV do cpf
        numerosteste.push(penultimoDigito.toString())
        const ultimoDigito = checaNumero(numerosteste,11)


        return penultimoDigito === Number(numeros[9]) && ultimoDigito===Number(numeros[10])

    }
}

console.log(validaCPF('145.382.206-20'))
console.log(validaCPF('111.111.111-11'))
console.log(validaCPF('145.352.206-21'))