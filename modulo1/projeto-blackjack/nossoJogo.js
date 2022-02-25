/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// Montando o jogo

// 1.
const mensagem = () => {
   console.log(`========================================
    Boas vindas ao jogo de Blackjack!
========================================`);
}
mensagem();

// 2.

const confirma = confirm("Quer iniciar uma nova rodada?");
// console.log(conrfima);
if(!confirma){
   console.log("O jogo acabou!")
} else {
   const incializaJogo = () =>{
      const usuario = [comprarCarta(), comprarCarta()];
      return usuario;
   }
   // Definindo a mão dos jogadores;
   let usuario = incializaJogo();
   let computador = incializaJogo();

   const somar = (array) => {
      let soma = 0;
      array.forEach(element => {
         soma += element;
      });

      return soma;
   }
   const cartas = (jogador) => {
      const carta = jogador.map((carta) => {
      return carta.texto;
      })
      return carta;
   };

   const pontuacao = (jogador) =>{
     const pontos =  jogador.map((carta) => {
      return carta.valor;
      });
      return pontos;
   };


   const mostraCartas = (carta,soma) => {
      let cartas = carta.toString().replace(",", " ");
      const frase = `cartas: ${cartas} - pontuação: ${soma}`;
      return frase;
   }  

   let pontuacaoUsuario = somar(pontuacao(usuario));
   let pontuacaoComputador = somar(pontuacao(computador));

   let cartasUsuario = cartas(usuario);
   let cartasComputador = cartas(computador);
  

  

   console.log(`Usuário - ${mostraCartas(cartasUsuario,pontuacaoUsuario)}`);
   console.log(`Usuário - ${mostraCartas(cartasComputador,pontuacaoComputador)}`);

   const vencedor = (pontosUsuario,pontosComputador) => {
      if(pontosUsuario > pontosComputador){
         console.log(`O usuário ganhou!`);
      } else if (pontosUsuario === pontosComputador){
         console.log(`Empate!`);
      } else {
         console.log(`O computador ganhou!`);
      }
   }

   vencedor(pontuacaoUsuario,pontuacaoComputador);

}

