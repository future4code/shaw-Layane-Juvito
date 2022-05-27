// desafio3: Exercício 7
    
//     Não é segredo para ninguém que as lojas tendem a lucrar bastante próximo ao período natalino. O faturamento delas é o principal indicativo disto. Normalmente, em documentos contáveis, representa-se um valor negativo com a cor vermelha; e um valor positivo com a cor preta. Esta é a razão pela qual a sexta-feira depois da Ação de Graças é chamada de **Black Friday**, indicando que as empresas tendem a ter um faturamento muito alto. Neste exercício, você vai implementar uma funcionalidade importante de uma loja de roupas o valor final do produto durante a black friday. Para isto, ela classifica as roupas em: de verão, de inverno, para banho e íntimas. Cada uma tem a sua própria porcentagem de desconto: 5% (verão), 10% (inverno), 4% (banho) e 7% (íntimas).

// a) Escreva uma função que receba um array de produtos com nome, preço e classificação; e retorne um array com essas informações e um campo mais: "preço com desconto"

type Produto = {
    nome:string,
    preco:number,
    classificacao:string,
    precoDesconto?: number
}

const produtos:Produto[] = [
    {
        nome:"Camisa pólo",
        preco:35,
        classificacao:'verão'
    },
    {
        nome:"Bermuda",
        preco:65.35,
        classificacao:'banho'
    },
    {
        nome:"Moletom",
        preco:145.78,
        classificacao:'inverno'
    },
    {
        nome:"Calcinha com aviamento",
        preco:10.69,
        classificacao:'íntimas'
    },
    {
        nome:"Vestido curto florido",
        preco:104.75,
        classificacao:'verão'
    },
    {
        nome:"Casaco Floribela",
        preco:295,
        classificacao:'inverno'
    },
    {
        nome:"Bermuda nadador",
        preco:75,
        classificacao:'banho'
    }
]

const retornaDesconto = (produtos:Produto[]):Produto[] => {
    return produtos.map((produto:Produto)=>{
        let desconto:number
        switch(produto.classificacao){
            case "verão":
                desconto = 0.95
            case "inverno":
                desconto = 0.90
            case "banho":
                desconto = 0.96
            case "íntimas":
                desconto = 0.93
        }

        const valorDesconto = produto.preco*desconto

        return {...produto,precoDesconto:Number(valorDesconto.toFixed(2))}
    })
}

console.table(retornaDesconto(produtos))