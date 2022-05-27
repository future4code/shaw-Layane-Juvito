// Desafio 4 : Exercicio 8

// Um parente seu decidiu abrir um restaurante; e, recentemente, ele descobriu que você está fazendo um curso de programação. Além de pedir para você arrumar alguns computadores antigos dele, configurar a internet e outros pedidos clássicos, ele prometeu te pagar caso você implementasse um sistema para o restaurante. Os pratos deste restaurante possuem  um nome, um custo, um valor de venda, e um array de ingredientes. Cada uma das vendas deve conter o nome do prato e o nome do cliente que realizou a compra.

//-------------------------------------------------------------------------
// a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.

type Pratos = {
    nome:string,
    custo:number,
    valorVenda: number,
    ingredientes:string[]
}

const pratos:Pratos[]=[
    {
        nome:'sopa',
        custo:25,
        valorVenda: 50,
        ingredientes:[
            'água',
            'verdura',
            'carne'
        ]
    }
]

const cadastrarPrato = (prato:Pratos):void => {
    pratos.push(prato)
}

console.log('a) cardápio')
cadastrarPrato( {
    nome:'rubacão',
    custo:50,
    valorVenda: 79,
    ingredientes:[
        'arroz',
        'feijão',
        'charque',
        'queijo',
        'creme de leite'
    ]
})
console.table(pratos)

//-------------------------------------------------------------------------
// b) Escreva uma função que recebe um nome e devolve o valor do produto com este nome.

const verificaPreco = (nome:string):number|string => {
    const produto:Pratos[] = pratos.filter((item:Pratos):boolean=>{
        return item.nome===nome
    })

    return produto.length>0 ? produto[0].valorVenda : "Produto não encontrado"
}

console.log('b)', verificaPreco('rubacao'))

//-------------------------------------------------------------------------
// c) Escreva uma função para que ele venda um prato. Salve as vendas em um array no escopo global.

type Venda = {
    nomePrato:string,
    cliente:string
}

const vendas:Venda[] = [
    {
        nomePrato:'rubacão',
        cliente:'Layane'
    }
]

const realizaVenda = (venda:Venda):void => {
    vendas.push(venda)
}
realizaVenda({nomePrato:"sopa", cliente:"Marileide"})
console.log('c) Vendas')
console.table(vendas)

//-------------------------------------------------------------------------
// d) Escreva uma função que determine o lucro do restaurante.

const verificaLucro = (vendas:Venda[], pratos:Pratos[]):number => {
    let total:number = 0
    vendas.forEach((item:Venda)=>{
        pratos.forEach((prato:Pratos):void=>{
            item.nomePrato === prato.nome ? total = prato.valorVenda-prato.custo + total : total
        })
    })
    return total

}

console.log('d)', verificaLucro(vendas, pratos))