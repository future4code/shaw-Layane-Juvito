class Transaction {
    private description: string
    private value: number
    private date: string

    constructor(
        description: string,
        value: number,
        date: string,
    ) {
        this.description = description
        this.value = value
        this.date = date
    }

    public getDescription() {
        return this.description
    }

    public getValue() {
        return this.value
    }

    public getDate() {
        return this.date
    }
}

// Exercício 1
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getCpf = () => {
        return this.cpf
    }

    public getName = () => {
        return this.name
    }

    public getAge = () => {
        return this.age
    }

    public getBalance = () => {
        return this.balance
    }

    public getTransactions = () => {
        return this.transactions
    }

    // 2-
    public setTransactions = (transactions: Transaction) => {
        this.transactions.push(transactions)
    }

}

// a)

// O constructor serve pra inicializar os atributos de uma classe e indica quais desses atributos são obrigatórios na chamada da classe. É declarado uma única vez dentro de uma class, e segue a sintaxe:
// constructor([argumentos]) { ... }

// b) 
const user = new UserAccount('111.111.111-11', 'lay', 26)

// apareceu uma vez.

// c) por meio de métodos públicos que disponibilizem essas informações.


// 2- 
const userTransactions = new Transaction("comprei um pacote de granola", 7.89, "20/06/2022")
user.setTransactions(userTransactions)

console.log(user.getTransactions())

// 3-

class Bank{
    private accounts: UserAccount[] 

    constructor (account: UserAccount){
        this.accounts = [account]
    }

    public getAccounts(){
        return this.accounts
    }

   public setAccounts(account: UserAccount){
        this.accounts.push(account)
   }
}


const user2 =  new UserAccount('000.000.000-00', 'Larissa', 19)
user2.setTransactions(userTransactions)
const bank = new Bank(user)
bank.setAccounts(user2)

console.log(bank.getAccounts())