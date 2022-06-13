const operacoes = (num1:number, num2:number):void => {
    const soma:number = num1 + num2;
    const sub:number = num1 - num2;
    const mult:number = num1 * num2;
    const div:number = num1 / num2;

    console.log(`
    a) resultado da soma entre ${num1} e ${num2} é: ${soma}
    b) resultado da subtração entre ${num1} e ${num2} é: ${sub}
    c) resultado da multiplicação entre ${num1} e ${num2} é: ${mult}
    d) resultado da divisão entre ${num1} e ${num2} é: ${div}
    `)
}

operacoes(15,3)