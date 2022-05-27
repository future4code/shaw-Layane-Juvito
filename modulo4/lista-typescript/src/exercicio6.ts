// Exercício 6
    
// Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas os débitos realizados pelo cliente. 

// Pensando em aumentar seu lucros, o banco quer identificar possíveis clientes precisando de empréstimos. Dessa forma, a sua tarefa é criar uma função que receba este array como parâmetro, atualize o saldo total descontando todos os débitos e retorne apenas os clientes com saldo negativo.

type Cliente = {
    cliente:string,
    saldoTotal:number,
    debitos:number[]
}
// entrada
const clientes: Cliente[]=[
	{ 
        cliente: "João", 
        saldoTotal: 1000, 
        debitos: [100, 200, 300] 
    },
	{ 
        cliente: "Paula", 
        saldoTotal: 7500, 
        debitos: [200, 1040] 
    },
	{ 
        cliente: "Pedro", 
        saldoTotal: 10000, 
        debitos: [5140, 6100, 100, 2000] 
    },
	{ 
        cliente: "Luciano", 
        saldoTotal: 100, 
        debitos: [100, 200, 1700] 
    },
	{ 
        cliente: "Artur", 
        saldoTotal: 1800, 
        debitos: [200, 300] 
    },
	{ 
        cliente: "Soter", 
        saldoTotal: 1200, 
        debitos: [] 
    }
]

const atualizaSaldo = (clientes:Cliente[]):Cliente[] => {
    return clientes.map((cliente:Cliente):Cliente=>{
        const debitoSoma:number = cliente.debitos.length>0 ? cliente.debitos.reduce((acc:number,cur:number)=>acc+cur) : 0
        const attSaldo:number = cliente.saldoTotal-debitoSoma

        return {...cliente, saldoTotal:attSaldo,debitos:[]}
    }).filter((clienteMap:Cliente):boolean=>{
        return clienteMap.saldoTotal < 0
    })
}

console.log(atualizaSaldo(clientes))