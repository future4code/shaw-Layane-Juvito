// Exercício 2
    
// Crie uma função que receba um parâmetro qualquer e que imprima no console o tipo da variável.

const tipoVar = (variavel:any):any=>{
    console.log(variavel)
    return typeof variavel
}

console.log(tipoVar(1))
console.log(tipoVar('oi'))
console.log(tipoVar({mala:'aberta', boca:"fechada"}))
console.log(tipoVar([1,2,3,4]))
console.log(tipoVar(undefined))