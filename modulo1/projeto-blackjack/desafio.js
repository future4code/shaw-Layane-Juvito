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
alert(`=============================
          Boas vindas ao jogo Blackjack!
=============================`)

let jogarNovamente = confirm(`Quer iniciar uma nova rodada?`);
let vitoriasUsuario = 0;
let vitoriasComputador = 0;
let empate = 0;
while (jogarNovamente) {
      const incializaJogo = () => {
         const usuario = [comprarCarta(), comprarCarta()];
         return usuario;
      }
      // Definindo a mão dos jogadores;
      let usuario = incializaJogo();
      let computador = incializaJogo();

      const somar = (num1, num2) => {
         let soma = 0;
         soma = num1 + num2;

         return soma;
      }
      const cartas = (jogador) => {
         const carta = jogador.map((carta) => {
            return carta.texto;
         })
         return carta;
      };

      const pontuacao = (jogador) => {
         const pontos = jogador.map((carta) => {
            return carta.valor;
         });
         return pontos.reduce((acc,cur)=>{return acc+cur});
      };


      const verificaAs = (jogador) => {
         let jogadorVerificado = jogador.map((array) => {
            let usuario
            if (array.texto[0].includes("A") && array.texto[1].includes("A")) {
               usuario = incializaJogo();
            } else {
               usuario = array;
            }
            return usuario;
         });

         return jogadorVerificado;
      };

      let usuarioVerficado = verificaAs(usuario);
      let computadorVerficado = verificaAs(computador);

      let cartasUsuario = cartas(usuarioVerficado);
      let cartasComputador = cartas(computadorVerficado);

      let pontuacaoUsuario = pontuacao(usuarioVerficado);
      let pontuacaoComputador = pontuacao(computadorVerficado);

      let compraMaisUma = true;


      while ((pontuacaoUsuario <= 21) && compraMaisUma) {
         compraMaisUma = confirm(`Suas cartas são ${cartasUsuario.toString().replaceAll(",", " ")}. A carta revelada do computador é ${cartasComputador[0].toString().replace(",", " ")}
Deseja comprar mais uma carta? `);

         if (compraMaisUma) {
            const novaCarta = comprarCarta();
            usuarioVerficado.push(novaCarta);
            cartasUsuario = cartas(usuarioVerficado);
            pontuacaoUsuario = somar(pontuacaoUsuario, novaCarta.valor);
         }

      };

      
      const vencedor = (pontosUsuario, pontosComputador) => {
         if (pontosUsuario > pontosComputador && pontosUsuario <= 21) {
            vitoriasUsuario ++;
            return `O usuário ganhou!`;
         } else if (pontosUsuario === pontosComputador) {
            empate++;
            return `Empate!`;
         } else {
            vitoriasComputador ++;
            return `O computador ganhou!`;
         }
      }

      confirm(`Suas cartas são ${cartasUsuario.toString().replaceAll(",", " ")}. Sua pontuação é ${pontuacaoUsuario}
As cartas do computador são ${cartasComputador.toString().replaceAll(",", " ")}. A pontuação do computador é ${pontuacaoComputador}
${vencedor(pontuacaoUsuario, pontuacaoComputador)}`);


   // }

   jogarNovamente = confirm("Deseja jogar novamente?");

}

if (!jogarNovamente) {
      alert(`Foi muito bom jogar com você!
=============================
Você teve ${vitoriasUsuario} vitórias
O computador venceu ${vitoriasComputador} vezes
Tivemos um total de ${empate} empates
=============================`)
} 