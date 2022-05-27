//=======================================================================
// Exercício 1:  O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
//=======================================================================

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

let minhaString: string = "sou uma string"
// minhaString = 3 -> não permite pois o tipo number n pode ser atibuído a uma variável do tipo string 

//-------------------------------------------------------------------------
// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

// Pode ser feito utilizando o **union type**
let meuNumero:number |string = '3'
meuNumero = 3

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}
const obj1:Pessoa = {
    nome:"Layane",
    idade:26,
    corFavorita:'preto'
}
const obj2:Pessoa = {
    nome:"Clarice",
    idade:26,
    corFavorita:"roxo"
}
const obj3:Pessoa = {
    nome:"Gabriel",
    idade:5,
    corFavorita:"verde"
}

// d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. Utilize um enum para isso.

enum CoresArcoIris {
    VERMELHO='vermelho', 
    LARANJA='laranja', 
    AMARELO='amarelo', 
    VERDE='verde', 
    AZUL='azul', 
    ANIL='anil', 
    VIOLETA='violeta'
}

type PessoaModificada = {
    nome: string,
    idade: number,
    corFavorita: CoresArcoIris
}

const obj1Modificado:Pessoa = {
    nome:"Layane",
    idade:26,
    corFavorita:CoresArcoIris.AMARELO
}
const obj2Modificado:Pessoa = {
    nome:"Clarice",
    idade:26,
    corFavorita:CoresArcoIris.AMARELO
}
const obj3Modificado:Pessoa = {
    nome:"Gabriel",
    idade:5,
    corFavorita:CoresArcoIris.AMARELO
}