// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let newArray=[];
//  USANDO O FOR:
//   for(let i=0;i<array.length;i++){
//       newArray[i]=array[array.length-1-i]
//   }
//  USANDO MAP:
    return newArray = array.map((element,index)=>{
        return element=array[array.length-1-index]
    });
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let arrayOrdenado=[];
    const n = array.length
    for(let i=0;i<n;i++){
        arrayOrdenado.push(Math.min.apply(null,array));
        let index = array.indexOf(arrayOrdenado[i]);
        array.splice(index,1);
    }
    return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    let arrayPares=[];
    for(element of array){
        if(element%2===0 && element!==0){
            arrayPares.push(element)
        }
    }
    return arrayPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((element)=>{
        return element%2===0 && element!==0;
    }).map((element)=>{
        return element*element;
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max.apply(null,array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}