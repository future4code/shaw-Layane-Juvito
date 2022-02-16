// Atividade Operadores

// Exercícios de interpretação de código

// 1. Indique todas as mensagens impressas no console:

// a. false
// b. false
// c. true
// d. boolean

// 2. O retorno do método prompt é uma string, portanto o resultado da soma
// é a concatenação entre duas strings, ele deve usar o método Number() para
// transformar o retorno em um número e só então realizar a soma.

// 3. sugestão:
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// Exercícios de escrita de código

// 1.

const idadeUsuario = Number(prompt("Qual a sua idade?"));
const idadeAmig = Number(prompt("Qual a idade do seu melhor amigo(a)?"));

console.log("Sua idade é maior do que a do seu melhor amigo(a)?", idadeUsuario>idadeAmig);
console.log("A diferença entre a sua idade e de seu amigo(a) é:", idadeUsuario-idadeAmig);

//2.

const numPar = Number(prompt("Insira um número par!"));
console.log(`O resto da divisão de ${numPar} por 2 é igual a`,numPar%2);
// O resto sempre será igual a 0 se o número for par 
// e igual a 1 se o número de entrada for ímpar.

//3.
const idade = Number(prompt("Quantos aninhos de vida você tem?"));
const idadeMes = idade*12;
const idadeDia = idade*365;
const idadeHoras = idade*24*365;

console.log(`Sua idade corresponde a ${idadeMes} meses ou ${idadeDia} dias ou ainda a aproximadamente ${idadeHoras} horas!! Massa né?!`);

//4. 
const num1 = Number(prompt("Insira um número!"));
const num2 = Number(prompt("Insira outro número!"));

console.log("O primeiro número é maior que segundo?", num1>num2);
console.log("O primeiro número é igual ao segundo?", num1===num2);
console.log("O primeiro número é divisível pelo segundo?", num1%num2===0);
console.log("O segundo número é divisível pelo primeiro?", num2%num1===0);

//DESAFIOS
//1.
const temperaturaF = 77;
let fParaK = Math.round((temperaturaF-32)*(5/9)+273.15);
console.log(`${temperaturaF}°F corresponde, aproximadamente, a ${fParaK}K`);
let temperaturaC = 80;
let cParaF = Math.round((temperaturaC)*(5/9)+32);
console.log(`${temperaturaC}°C corresponde, aproximadamente, a ${cParaF}°F`);
temperaturaC = Number(prompt("Insira atemperatura em graus Celsius que deseja converter"));
cParaF = Math.round((temperaturaC)*(5/9)+32);
fParaK = Math.round((cParaF-32)*(5/9)+273.15);

console.log(`${temperaturaC}°C corresponde, aproximadamente, a ${cParaF}°F`);
console.log(`${temperaturaC}°C corresponde, aproximadamente, a ${fParaK}K`);

//2.

const consumoResidencia = Number(prompt("Insira a quantidade de quilowatts consumida por sua residência"));
//a
let valorPagar= consumoResidencia*0.05;
console.log(`Sua residência consumiu ${consumoResidencia} quilowatt-hora e com base nisso você irá pagar R$${valorPagar}`);
//b
const desconto =0.15;
valorPagar = valorPagar-0.15*valorPagar;
console.log(`Sua residência consumiu ${consumoResidencia} quilowatt-hora e com desconto de 15% você irá pagar apenas R$${valorPagar}`);
