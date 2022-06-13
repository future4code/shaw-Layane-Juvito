// Exercício 2
    
// Observe a função a seguir, escrita em JavaScript:

// function obterEstatisticas(numeros) {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

//-------------------------------------------------------------------------
// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo.ts e faça a tipagem desses parâmetros

// entrada:numero(array de number) saída: estatisticas(objeto)

function obterEstatisticas(numeros:number[]):object{

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{maior:number, menor:number,media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log("a)", obterEstatisticas([2,4,56,7]))

//-------------------------------------------------------------------------
// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 

// a varivael de entrada deve ser um array de numeros, o a variavel numerosOrdenados irá receber um array de numeros tbm, devido o metodo sort, estatisticas recebe um objeto

//-------------------------------------------------------------------------
// c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
// const amostraDeIdades = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros) => {...}
// }



type Amostra = {
    numeros:number[],
    obterEstatisticas: (numeros:number[])=>object
}

const amostraDeIdades:Amostra = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros:number[]):object=>{

        const numerosOrdenados:number[] = numeros.sort(
            (a, b) => a - b
        )
    
        let soma:number = 0
    
        for (let num of numeros) {
            soma += num
        }
    
        const estatisticas:{maior:number, menor:number,media:number} = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: Number((soma / numeros.length).toFixed(2))
        }
    
        return estatisticas
    }
}

console.log("c)", amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))