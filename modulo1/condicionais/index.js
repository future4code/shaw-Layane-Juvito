// Exercícios aula de condicionais

// Exercícios de interpretação de código

// 1.
// a) o código armazena um valor fornecido pelo usuário em uma variável numero,
// e em seguida verifica se esse valor é divisível por 2, se isso for verdade ele imprime
// uma mensagem na tela, se não for imprime outra.

// b) números pares 

// c) números impares ou se o valor for 0

// 2.
// a) apresenta o valor da fruta escolhida pelo usuário

// b) O preço da fruta Maçã é R$ 2.25

// c) O preço da fruta Pêra é R$ 5.5

//3.
// a) pede para o usuário inserir um valo, converte esse valor para o tipo number e o armazena na variável numero

// b) se digitar 10 apaarecerá a messagem: essa mensagem é secreta, se digitar -10 aparecerá undefined,

// c) Mensagem só é definida dentro do bloco do if (variável local), assim ela só será definida se o numero satisfazer a condição do if e não pode ser acessada fora do bloco if

// Exercícios de escrita de código

// 1.

// a) 
// b)
// const idade = Number(prompt("Insira sua idade:"));

// //c)
// if(idade >= 18){
//     console.log("Você pode dirigir.")
// } else {
//     console.log("Você não pode dirigir.");
// }

// // 2.

// const turno = prompt("Olá, em qual turno do dia você estuda? responda: M para Matutino, V para Vespertino ou N para Noturno");

// if(turno === "M"){
//     console.log("Bom Dia!")
// } else if (turno === V){
//     console.log("Boa Tarde!")
// } else {
//     console.log("Boa Noite!")
// }

// // 3.

// switch(turno){
//     case "M":
//         console.log("Bom Dia!");
//         break;
//     case "V":
//         console.log("Boa Tarde!");
//         break;
//     case "N":
//         console.log("Boa Noite!");
//         break;
//     default:
//         console.log("Opção inválida");
//         break;
// }

// // 4.

// const generoFilme = prompt("Qual o gênero do filme que você deseja assistir?");
// const precoFilme = Number(prompt("Qual o preço do ingresso?"));

// if(generoFilme.toLowerCase()==="fantasia" && precoFilme < 15){
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

// // DESAFIOS

// // 1.
// if(generoFilme.toLowerCase()==="fantasia" && precoFilme < 15){
//     const lanchinho = prompt("Qual lancinho você escolheu pra saborear nesse momento?")
//     console.log(`Bom filme! Aproveite o seu ${lanchinho}`);
// } else {
//     console.log("Escolha outro filme :(")
// }

// 2.

const nome = prompt("Insira seu nome completo:");
const tipoJogo = prompt("Escolha o tipo de jogo, digite: IN se o jogo for Internacional ou DO se for Doméstico.");
const etapaJogo = prompt("Qual a etapa? digite: SF para semi-final, DT para Decisão de terceiro lugar e FI para Final");
const categoria = Number(prompt("Qual a categoria do seu jogo? Escolha um valor entre 1, 2, 3 ou 4:"));
const quantidadeIngresso = Number(prompt("Qual a quantidade de ingressos comprados?"));

//TABELA VALORES
let precoUnitario 
if(etapaJogo === "SF" && categoria === 1){
    precoUnitario = 1320;
} else if(etapaJogo === "SF" && categoria === 2){
    precoUnitario = 880;
} else if(etapaJogo === "SF" && categoria === 3){
    precoUnitario = 550;
} else if(etapaJogo === "SF" && categoria === 4){
    precoUnitario = 220;
} else if (etapaJogo==="DT" && categoria === 1){
    precoUnitario = 660;
} else if(etapaJogo === "DT" && categoria === 2){
    precoUnitario = 440;
} else if(etapaJogo === "DT" && categoria === 3){
    precoUnitario = 330;
} else if(etapaJogo === "DT" && categoria === 4){
    precoUnitario = 170;
} else if (etapaJogo==="FI" && categoria === 1){
    precoUnitario = 1980;
} else if(etapaJogo === "FI" && categoria === 2){
    precoUnitario = 1320;
} else if(etapaJogo === "FI" && categoria === 3){
    precoUnitario = 880;
} else if(etapaJogo === "FI" && categoria === 4){
    precoUnitario = 330;
} else {
    precoUnitario = "Entrada invalida"
}

// TIPO JOGO
let tipo;
switch(tipoJogo){
    case "IN":
        tipo = "Internacional";
        break;
    case "DO":
        tipo = "Nacional"
        break
    default:
        etapa="Entrada inválida";
        break;
}

// ETAPA JOGO

let etapa;
switch(etapaJogo){
    case "SF":
        etapa = "Semi-final";
        break;
    case "DT":
        etapa = "Decisão de terceiro lugar";
        break;
    case "FI":
    etapa = "Final";
    break;
    default:
        etapa="Entrada inválida";
        break;
}

// VALOR TOTAL
let valorTotal
switch(tipoJogo){
    case "IN":
         valorTotal = quantidadeIngresso * precoUnitario / 4.1;
         valorTotal = `U$ ${valorTotal}`
        break;
    case "DO":
         valorTotal = quantidadeIngresso * precoUnitario;
         valorTotal = `R$ ${valorTotal}`
        break;
    default:
        valorTotal = "Entrada inválida";
        break;

}

// VALOR UNITÁRIO
let valorUnitario;
switch(tipoJogo){
    case "IN":
        valorUnitario=precoUnitario / 4.1;
        break;
    case "DO":
        valorUnitario=precoUnitario;
        break;
    default:
        valorUnitario = "Entrada inválida";
        break;
}


console.log(`
-------------------- Dados da Compra --------------------
Nome do Cliente: ${nome}
Tipo do jogo: ${tipo}
Etapa do jogo: ${etapa}
Categoria: ${categoria}
Quantidade de ingressos: ${quantidadeIngresso}
------------------------ Valores ------------------------
Valor do ingresso: ${valorUnitario}
Valor total: ${valorTotal}
`)
