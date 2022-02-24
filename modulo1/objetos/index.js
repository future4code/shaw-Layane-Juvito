// Resolução do Exercício da aula de Objetos

// Exercícios de interpretação de código

// 1 .
// a)
// ---> "Matheus Nachtergaele"
// ---> "Virginia Cavendish"
// ---> {canal: "Globo", horario: "14h"}

//2.
//a)
//{
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

//{
// 	nome: "Juba", 
// 	idade: 3, 
// 	raca: "SRD"
// }

//{
// 	nome: "Jubo", 
// 	idade: 3, 
// 	raca: "SRD"
// }
//b) ele faz uma cópia da estrutura e valores do objeto

//3.
//a) 
// false
// undefined

//b) pq n existe a propriedade altura no objeto pessoa

// Exercícios de escrita de código

//1.
// a)
const pessoa = {
    nome:"Layane",
    apelido:["Lay", "Laynha", "Lalá"]
}

function imprimePessoa(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}.`)
}
imprimePessoa(pessoa);
//b)

const novaPessoa = {
    ... pessoa,
    apelido:["Lulu", "Lu", "Luluzinha"]
}

imprimePessoa(novaPessoa);

//2.

//a)
const objeto1 = {
    nome:"Ana",
    idade:26,
    profissao:"Cantora"
}

const objeto2 = {
    nome:"Joana",
    idade:34,
    profissao:"Professora"
}

function retornaArray(objeto){
    let arrayDoObjeto = [];
    arrayDoObjeto.push(objeto.nome,objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length);
    return arrayDoObjeto;
}

console.log(retornaArray(objeto1));
console.log(retornaArray(objeto2));

//3.
//a)
const carrinho = [];

//b)
const fruta1 ={
    nome:"Maçã",
    disponibilidade:true
}

const fruta2 ={
    nome:"Limão",
    disponibilidade:true
}

const fruta3 ={
    nome:"Ameixa",
    disponibilidade:true
}

//c)
function adicionaNoCarrinho(objeto){
    carrinho.push(objeto)
}
adicionaNoCarrinho(fruta1);
adicionaNoCarrinho(fruta2);
adicionaNoCarrinho(fruta3);

//d)
console.log(carrinho)

//DESAFIOS

//1.
function profile(){
    const nome = prompt("Insira seu nome:");
    const idade = Number(prompt("Insira sua idade:"));
    const profissao = prompt("Insira sua profissão:");

    const pessoa = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }

    console.log(pessoa)
    console.log(typeof(pessoa))
}
profile();

// 2

const filme1 = {
    anoLancamento:2016,
    nome:"Deadpool"
}
const filme2 = {
    anoLancamento:2008,
    nome:"ABatman: O Cavaleiro das Trevas"
}

function comparaFilme(objeto1, objeto2){
    const primeiroLancado = objeto1.anoLancamento < objeto2.anoLancamento;
    const lancadoJunto = objeto1.anoLancamento === objeto2.anoLancamento;

    console.log(`
    O primeiro filme foi lançado antes do segundo? ${primeiroLancado}
    O primeiro filme foi lançado no mesmo ano do segundo? ${lancadoJunto}
    `)
}

comparaFilme(filme1,filme2)

//3.
function disponibilidade(objeto){
    objeto.disponibilidade=false;
    return objeto;
}

console.log(disponibilidade(fruta1))
