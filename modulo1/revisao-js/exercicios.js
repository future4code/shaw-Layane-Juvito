// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let newArray = [];
    //  USANDO O FOR:
    //   for(let i=0;i<array.length;i++){
    //       newArray[i]=array[array.length-1-i]
    //   }
    //  USANDO MAP:
    return newArray = array.map((element, index) => {
        return element = array[array.length - 1 - index]
    });

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let arrayOrdenado = [];
    const n = array.length
    for (let i = 0; i < n; i++) {
        arrayOrdenado.push(Math.min.apply(null, array));
        let index = array.indexOf(arrayOrdenado[i]);
        array.splice(index, 1);
    }
    return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    let arrayPares = [];
    for (element of array) {
        if (element % 2 === 0 && element !== 0) {
            arrayPares.push(element)
        }
    }
    return arrayPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((element) => {
        return element % 2 === 0 && element !== 0;
    }).map((element) => {
        return element * element;
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max.apply(null, array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const maior = retornaMaiorNumero([num1, num2]);
    let menor;
    if (num1 === num2) {
        menor = num1;
    } else {
        for (element of [num1, num2]) { if (element < maior) { menor = element } };
    }
    let obj = {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maior % menor === 0,
        diferenca: maior - menor
    };

    return obj;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pares = [];
    let i = 0;
    let count = 0;
    while(count<n){
        if(i%2===0){
            pares.push(i);
            count++;
        }
        i++
    }
    return pares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let tipoTriangulo;
    if(ladoA === ladoB && ladoA===ladoC){
        tipoTriangulo="Equilátero";
    }else if(ladoA === ladoB || ladoA===ladoC || ladoB===ladoC){
        tipoTriangulo="Isósceles";
    }else {
        tipoTriangulo="Escaleno";
    }
    return tipoTriangulo;
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    ordenar=(a,b)=>{
        return a-b
    }
    array.sort(ordenar);
    return [array[array.length-2],array[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {...pessoa,
            nome:"ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter((pessoa)=>{
        return pessoa.idade>14 && pessoa.altura>=1.5 && pessoa.idade<60
    });
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa)=>{
        return pessoa.idade<=14 || pessoa.altura<1.5 || pessoa.idade>60
    });
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for(let i=0; i<contas.length;i++){
        let aPagar;
        console.log(contas[i].compras)
        if(contas[i].compras.length===0){
            aPagar=0;
        }else{
            aPagar=contas[i].compras.reduce((acc,cur)=>{return acc+cur});
        }
        contas[i].saldoTotal=contas[i].saldoTotal-aPagar;
        contas[i].compras=[];
    };
    
    return contas;
   
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}