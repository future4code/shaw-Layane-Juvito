// ATIVIDADE AULA SOBRE LAÇOS (LOOP)

// Exercícios de interpretação de código

// 1. o código irá, a cada iteração, somar à variavel valor o valor armazenado no iterador i.

// 2.

// a) 
// 19
// 21
// 23
// 25
// 27
// 30

// b) sim. poderia ser feito o seguinte:
// let indice = []
// for(let numero of lista){
//     indice.push(lista.indexOf(numero)) 

// }

// 3.
// *
// **
// ***
// ****

// Exercícios de escrita de código

// 1.
const quantidadePets = Number(prompt("Quantos pets você tem?"));

let nomesPets = [];
let nomePets;
if(quantidadePets === 0){
    console.log("Que pena! Você pode adotar um pet!");
}else{ 
    console.log("dentro else");
    for(let i = 1; i <= quantidadePets; i++){
        nomePets = prompt("Insira o nome de seu pet:");
        nomesPets.push(nomePets);
    }
}

console.log(nomesPets);

// 2.

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// a)
for(let numero of arrayOriginal){
    console.log(numero);
}

// b)

for(let numero of arrayOriginal){
    divisao = numero/10;
    console.log(divisao);
}

// c)
let numerosPares = [];
for(let numero of arrayOriginal){
    if(numero%2 === 0){
        numerosPares.push(numero);
    }
}
console.log(numerosPares)

// d)
let stringArrayOriginal = [];
let itemString;
for(let i = 0; i <arrayOriginal.length; i++){
    itemString = `O elemento do índex ${i} é: ${arrayOriginal[i]}`;
    stringArrayOriginal.push(itemString)
}
console.log(stringArrayOriginal);

// e) 
let maior = 0;
let menor = 1000;
for(let i = 0; i < arrayOriginal.length; i++){
    if(maior < arrayOriginal[i]){
        maior = arrayOriginal[i];
    }

    if(menor > arrayOriginal[i]){
        menor = arrayOriginal[i];
    }
}

console.log(`O maior número é ${maior} e o menor número é ${menor}`);
// com função

// maiorNum = Math.max(... arrayOriginal);
// menorNum = Math.min(... arrayOriginal);

// console.log(`O maior número é ${maiorNum} e o menor é ${menorNum}`)

// DESAFIOS

// 1.
// a)
const numeroPensado = Number(prompt("Não deixe seu coleguinha ver ein!! Fala ai qual o número que você imaginou?"));
console.log("Bora jogar");

// b) e c)
let acertou = false;

let numeroTentativas = 0;

while (!acertou){

    let numeroChute = Number(prompt("Qual o seu palpite?"));
    numeroTentativas = numeroTentativas + 1;

    if(numeroChute === numeroPensado){
        acertou = true;
        console.log(`Acertou, Parabéns!!
O número de tentativas foi: ${numeroTentativas}`)
    } else if (numeroChute < numeroPensado){
        console.log(`Você errou :(
Você escolheu o número ${numeroChute} porém ele é menor que o número que pensei`)
    } else {
        console.log(`Você errou :(
Você escolheu o número ${numeroChute} porém ele é maior que o número que pensei`)
    }
    
}

// 2.

const numeroSecreto = Math.round(Math.random() * 10 + 1);
console.log(`Agora o seu adversário será o computador.
O número está entre 1 e 100. 
Boa sorte!`);
let acertouNum = false;

let numTentativas = 0;

while (!acertouNum){
    
    let numeroChute = Number(prompt("Qual o seu palpite?"));
    numTentativas = numTentativas + 1;

    if(numeroChute === numeroSecreto){
        acertouNum = true;
        console.log(` Acertou, Parabéns!!
 O número de tentativas foi: ${numTentativas}`)
    } else if (numeroChute < numeroSecreto){
        console.log(` Você errou :(
 Você escolheu o número ${numeroChute} porém ele é menor que o número secreto`)
    } else {
        console.log(` Você errou :(
 Você escolheu o número ${numeroChute} porém ele é maior que o número secreto`)
    }
    
    
}

