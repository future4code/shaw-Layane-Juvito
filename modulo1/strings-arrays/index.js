// Exercícios de interpretação de código

// 1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa. 

// - console.log('a. ', array): a. undefined
// - console.log('b. ', array): b. null
// - console.log('c. ', array.length): c. 11
// - console.log('d. ', array[i]): d. 3
// - console.log('e. ', array): e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// - console.log('f. ', valor): f. 8

// 2. Qual será o valor impresso no console se a entrada do usuário for:"Subi num ônibus em Marrocos"?
// resposta será: SUBI NUM ÔNIBUS EM MIRROCOS 27

// Exercícios de escrita de código

// 1.

const nome = prompt("Olá, para iniciar seu cadastro precisamos que você nos informe seu nome");
const email = prompt("Por favor, informe o e-mail que deseja cadastrar");

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja Bem vinda(o), ${nome}`);

// 2.

let comidasFavoritas = ["rubacão", "lasanha", "pizza", "crepe", "brigadeirão"];

// a)
console.log(comidasFavoritas);

// b)
console.log(`Minha lista de comidas favoritas é: 
    1.${comidasFavoritas[0]}
    2.${comidasFavoritas[1]}
    3.${comidasFavoritas[2]}
    4.${comidasFavoritas[3]}
    5.${comidasFavoritas[4]}`
);

// c)
const comidaUsuario=prompt("Qual sua comida favorita?");

comidasFavoritas[1] = comidaUsuario;

console.log(`Nova lista: 
    1.${comidasFavoritas[0]}
    2.${comidasFavoritas[1]}
    3.${comidasFavoritas[2]}
    4.${comidasFavoritas[3]}
    5.${comidasFavoritas[4]}`
);

// 3.
// a)
let listaDeTarefas = [];

// b)
const tarefa1 = prompt("Digite sua primeira tarefa do dia:");
const tarefa2 = prompt("Digite sua segunda tarefa do dia:");
const tarefa3 = prompt("Digite sua terceira tarefa do dia:");

listaDeTarefas.push(tarefa1,tarefa2,tarefa3);

// c)

console.log(`Lista de tarefas do dia: 
1.${listaDeTarefas[0]}
2.${listaDeTarefas[1]}
3.${listaDeTarefas[2]}`
)

// d)

const tarefaConcluida = Number(prompt("Digite o índice (0, 1 ou 2) da tarefa concluída"));

// e)

listaDeTarefas.splice(tarefaConcluida,1);

// f)

console.log(`Lista atualizada:${listaDeTarefas}`);

// DESAFIOS

// 1.

const fraseUsuario = prompt("Insira uma frase");
const novaFrase=fraseUsuario.split(" ");
console.log(novaFrase);

// 2.

const listaFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
const indexAbacaxi = listaFrutas.indexOf("Abacaxi");
console.log(`O indíce do Abacaxi é ${indexAbacaxi} e a lista possui ${listaFrutas.length} elementos`);

