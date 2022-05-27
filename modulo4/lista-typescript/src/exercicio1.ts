// Exercício 1
    
// Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:

// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

const meses:Array<{mes:string,representacao:string}>=[
    {
        mes:'janeiro',
        representacao: '01'
    },
    {
        mes:'fevereiro',
        representacao: '02'
    },
    {
        mes:'março',
        representacao: '03'
    },
    {
        mes:'abril',
        representacao: '04'
    },
    {
        mes:'maio',
        representacao: '05'
    },
    {
        mes:'junho',
        representacao: '06'
    },
    {
        mes:'julho',
        representacao: '07'
    },
    {
        mes:'agosto',
        representacao: '08'
    },
    {
        mes:'setembro',
        representacao: '09'
    },
    {
        mes:'outubro',
        representacao: '10'
    },
    {
        mes:'novembro',
        representacao: '11'
    },
    {
        mes:'dezembro',
        representacao: '12'
    },
]

const imprimeMensagem = (nome:string, data:string):void =>{
    const separaData = data.split('/')
    let nomeDoMes:string
    meses.forEach((mes:{mes:string,representacao:string})=>{
        if(mes.representacao===separaData[1]){
            nomeDoMes = mes.mes
        }
    })

    console.log(`Olá me chamo ${nome}, nasci no dia ${separaData[0]} do mês de ${nomeDoMes} do ano de ${separaData[2]}`)

}

imprimeMensagem('Layane', '29/09/1995')