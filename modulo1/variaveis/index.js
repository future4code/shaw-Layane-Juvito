/* Exercício de interpretação de código

// 1. será exibido: 
// 10
// 10 5

// 2. será impresso:

// 10 10 10

// 3. renomear a variável:
// - p para horasTrabalhadasPorDia 
// - t para remuneracaoPorDia
*/

// Exercícios de escrita de código

// 1.
let nome;
let idade;
console.log("O tipo inicial da variável nome é:", typeof nome);
console.log("O tipo inicial da variáve idade é:", typeof idade);

// O tipo é undefined porque os valores das variáveis
//não foram definidos, elas foram apenas declaradas

nome = prompt("Digite seu nome:");
idade = prompt("Digite sua idade:");
console.log("O tipo atual da variável nome é:", typeof nome);
console.log("O tipo atual da variável idade é:", typeof idade);

console.log(`Olá ${nome}, você tem ${idade} anos`);

// 2.
alert("responda apenas com SIM ou NÃO")
const texto1 = "Você está animado(a) nessa segunda-feira?";
const texto2 = "Você gosta de plantar bananeiras enquanto come papa de aveia?";
const texto3 = "Você usa sabonete com frequência?";
const pergunta1 = prompt(texto1);
const pergunta2 = prompt(texto2);
const pergunta3 = prompt(texto3);

console.log(texto1,pergunta1);
console.log(texto2,pergunta2);
console.log(texto3,pergunta3);

//3.

let a = Number(prompt("Atribua um número para a variável a:"));
let b = Number(prompt("Atribua um número para a variável b:"));
console.log("Você atribuiu a variável a o valor", a);
console.log("Você atribuiu a variável b o valor", b);

let c =a;
a = b;
b = c;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b); 


// DESAFIO

let numero1 = Number(prompt("Digite um número:"));;
let numero2 = Number(prompt("Digite um segundo número:"));;
let soma = numero1 + numero2;
let multiplicacao = numero1 * numero2;

console.log (`O número ${numero1} somado ao número ${numero2} resulta em: ${soma}`);
console.log (`O número ${numero1} multiplicado pelo número ${numero2} resulta em: ${multiplicacao}`);

