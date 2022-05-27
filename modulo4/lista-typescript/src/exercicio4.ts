// Exercício 4

// O seguinte `array` traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham presencialmente ou por home office:


//Crie um ENUM para os setores e um type para as pessoas colaboradoras. Em seguida, crie uma função que receba este arraycomo parâmetro e retorne apenas as pessoas do setor de marketing que trabalham presencialmente. 

enum Setor {
    MARKETING = 'marketing',
    VENDAS = 'vendas',
    FINANCEIRO = 'financeiro'
}

type Pessoa = {
    nome: string,
    salário: number,
    setor: Setor,
    presencial: boolean
}


const colaboradores: Pessoa[] = [
    {
        nome: "Marcos",
        salário: 2500,
        setor: Setor.MARKETING,
        presencial: true
    },
    { 
        nome: "Maria", 
        salário: 1500, 
        setor: Setor.VENDAS, 
        presencial: false 
    },
    { 
        nome: "Salete", 
        salário: 2200, 
        setor: Setor.FINANCEIRO, 
        presencial: true 
    },
    { 
        nome: "João", 
        salário: 2800, 
        setor: Setor.MARKETING, 
        presencial: false 
    },
    { 
        nome: "Josué", 
        salário: 5500, 
        setor: Setor.FINANCEIRO, 
        presencial: true },
    { 
        nome: "Natalia", 
        salário: 4700, 
        setor: Setor.VENDAS, 
        presencial: true 
    },
    { 
        nome: "Paola", 
        salário: 3500, 
        setor: Setor.MARKETING,
        presencial: true 
    }
]

const filterColaboradores = (colaboradores:Pessoa[]):Pessoa[] => {
    return colaboradores.filter((colaborador:Pessoa):boolean=>{
        return colaborador.presencial && colaborador.setor===Setor.MARKETING
    })
}

console.table(filterColaboradores(colaboradores))