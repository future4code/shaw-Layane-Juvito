// Aividade aula Funções

// Exercícios de interpretação de código

// 1. 
// a) será impresso: 
// 10
// 50
// b)
// não apareceria nada no console, pois não foi informado 
// ao computador que deveria imprimir algo no console;

// 2. 
// a)
// essa função irá ter como entrada (ou parâmetro) um texto, e a função vai aplicar dois métodos
// a esse texto, vai transformar todos caractes do texto em minusculo e irá verificar se a string "cenoura"
// esta incluida ou não no texto. Portanto, a função verifica se existe a palavra cenoura dentro de um texto
// retornando true (caso sim) ou false (caso não);
// b) i. true;
//    ii. true;
//    iii.true;

// Exercícios de escrita de código

// 1.

//a)
function mensagem(){
    console.log("Eu sou Layane Bastos, tenho 26 anos, moro em Pedra Branca na Paraíba e sou estudade na Labenu :)");
}
mensagem();

// b)
const sobreMim = function (nome, idade, cidade, profissao){
    const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`;
    return frase;
}

console.log(sobreMim("layane",26,"Pedra Branca - PB", "estudante"));

//2.

//a) 

const soma = (num1,num2) => num1+num2;
console.log(soma(2,4));

//b) 
const ehMaior = (num1,num2) => num1>=num2;
console.log(ehMaior(2,4));

//c)
const ehPar = num => num%2===0;

console.log(ehPar(68));

//d)

const infoString = (texto) => {
    const tamanho = texto.length;
    const novoTexto = texto.toUpperCase();
    console.log(`Seu texto possui ${tamanho} caracteres e foi modificada para ${novoTexto}`);
}

// 3.

const soma2 = (num1,num2) => num1+num2;
const subtracao = (num1,num2) => num1-num2;
const multiplicacao = (num1,num2) => num1*num2;
const divisao = (num1,num2) => num1/num2;

const numero1 = Number(prompt("Insira um número"));
const numero2 = Number(prompt("Insira outro número"));

console.log(`Números inseridos: ${numero1} e ${numero2}
Soma: ${soma2(numero1,numero2)}
Diferença: ${subtracao(numero1,numero2)}
Multiplicação: ${multiplicacao(numero1,numero2)}
Divisão: ${divisao(numero1,numero2)}`);

// DESAFIOS \o/

//1.
//a)
const imprimeAlgo = (algo)=>console.log(algo);
imprimeAlgo("Olá pessoas!");

// b)

const entrada = (valor1, valor2) => {
    const soma = valor1 + valor2;
    imprimeAlgo(soma);
}

// 2.

const pitagoras = (cateto1, cateto2) => {
    const hipotenusa = (cateto1^2 + cateto2^2)^0.5;
    return hipotenusa;
}

console.log(pitagoras(4,8));

