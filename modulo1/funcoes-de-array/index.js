// ATIVIDADE DA AULA FUNÇÕES DE ARRAY

// Exercícios de interpretação de código

// 1.
// a) { nome: "Amanda Rangel", apelido: "Mandi" } 0 [{ nome: "Amanda Rangel", apelido: "Mandi" },
//                                                  { nome: "Laís Petra", apelido: "Laura" },
//                                                  { nome: "Letícia Chijo", apelido: "Chijo" }]
// { nome: "Laís Petra", apelido: "Laura" } 1 [{ nome: "Amanda Rangel", apelido: "Mandi" },
//                                                  { nome: "Laís Petra", apelido: "Laura" },
//                                                  { nome: "Letícia Chijo", apelido: "Chijo" }]
// { nome: "Letícia Chijo", apelido: "Chijo" } 2 [{ nome: "Amanda Rangel", apelido: "Mandi" },
//                                                  { nome: "Laís Petra", apelido: "Laura" },
//                                                  { nome: "Letícia Chijo", apelido: "Chijo" }]

// 2.
// a)será impresso: ["Amanda Rangel","Laís Petra", "Letícia Chijo"]

// 3.
// a) será impresso: [{ nome: "Amanda Rangel", apelido: "Mandi" },
//                    { nome: "Laís Petra", apelido: "Laura" }]

// Exercícios de escrita de código

// 1.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ];

 // a)

 const nomesPets = pets.map((pet)=>{
     return pet.nome;
 });
 console.log(nomesPets);

 // b)

 const salsichinhas = pets.filter((pet) => {
     return pet.raca==="Salsicha"
 });

 console.log(salsichinhas);
 
 // c)
 const descontoPoodles = pets.filter((pet) => {
     return pet.raca === "Poodle"
 }).map((pet)=>{
     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
 });

 console.log(descontoPoodles);

 // 2.

const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
];

// a)

const nomeProdutos = produtos.map((produto) => {
    return produto.nome;
});

console.log(nomeProdutos);

// b)

// const produtosDesconto = produtos.map((produto) => {
//     return {nome: produto.nome,
//             preco: (produto.preco*0.95).toFixed(2)}
// });

// USANDO O SPREAD 
const produtosDesconto = produtos.map((produto) => {
    let{categoria, ...produtoSemCategoria}=produto;  // separa o objeto em duas variávei categoria e oresto do objeto é armazenado em produtoSermCategoria
    return {... produtoSemCategoria,
            preco: (produto.preco*0.95).toFixed(2)}
});

console.log(produtosDesconto);

// c) 

const produtosBebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas";
});

console.log(produtosBebidas);

// d)

const produtosYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê");
});

console.log(produtosYpe);

// e)

const propagandaYpe = produtosYpe.map((produto) => {
    return `Compre ${produto.nome} por ${produto.preco}`
});

console.log(propagandaYpe);

// DESAFIOS

// 1.

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ];

 // a)

 const ordenaNomePokemons = pokemons.map((pokemon) => {
     return pokemon.nome;
 }).sort();

 console.log(ordenaNomePokemons);

 // b)

// 1ª forma:

// const tipoPokemons = pokemons.map((pokemon) => {
//     return pokemon.tipo;
// })

//  const eliminaRepetido = tipoPokemons.filter((pokemon, index) => {
//     return tipoPokemons.indexOf(pokemon) == index
// });

// 2ª forma:

const tipoPokemons = [... new Set(pokemons.map((pokemon) => {
    return pokemon.tipo;
}))];

console.log(tipoPokemons)