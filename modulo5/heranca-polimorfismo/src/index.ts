import Customer from './classes/Customer'
import Client from './interfaces/Client'
import Place from './classes/Place'
import User from './classes/User'
import Residence from './classes/Residence'
import Industry from './classes/Industry'
import Commerce from './classes/Commerce'
import ResidentialClient from './classes/ResidentialClient'

// ============== EXERCÍCIOS HERANÇA ==============

// Exercício 1

// a) não, pois password é um argumento privado e só pode ser acessada dentro da classe, além disso não existe,na classe, nenhum método que permita acessá-la.

// b) Uma única vez
console.log('1- b)')
const Layane = new User(Date.now().toString(), "lay@shaw.com", "Layane", "senha")
console.log('=======================================================================')

// Exercício 2

// a) uma
console.log('2- a)')
const Rani = new Customer(Date.now().toString(), "rani@shaw.com", "Ranievily", "senha", "0000 1111 2222 3333")
console.log('=======================================================================')
// b) uma referente a instância Customer, porque primeiro ela chama o constructor da classe mãe (User) e depois executa o da clase filha

// Exercício 3

// a) 
// não, pois password é um argumento privado e só pode ser acessada dentro da classe mãe, além disso não existe, na classe, nenhum método que permita acessá-la.
console.log('3- a)')
console.log({
    id: Rani.getId(),
    name: Rani.getName(),
    email: Rani.getEmail(),
    creditCard: Rani.getCreditCard(),
    purchaseTotal: Rani.purchaseTotal
})
console.log('=======================================================================')

// Exercício 4 e 5

// a)
console.log('4 e 5- a)')
console.log(Rani.introduceYourself())
console.log('=======================================================================')

// ============== EXERCÍCIOS POLIMORFISMO ==============

// Exercício 1

console.log('1- a)')

const client: Client = {
    name: "Matheus",
    registrationNumber: 1,
    consumedEnergy: 246,
  
    calculateBill: () => {
      return 2;
    }
}

// a) todas, porque todas são públicas. Não.
console.log(client.calculateBill(), client.consumedEnergy, client.registrationNumber, client.name)

console.log('=======================================================================')

// Exercício 2

// a) Não é possível criar uma instância de uma classe abstrata.

// const place = new Place('111.111.111-11')

// b) usando o extends pra declarar uma classe filha que vai herdar as propriedades da classe abstrata

// Exercício 3
console.log('3-')

const casa = new Residence(79, '00.000-00')
const tecelagem = new Industry(35, '00.000-00')
const mercadinho = new Commerce(1, '00.000-00')

console.log({
    cepCasa: casa.getCep(),
    cepTecelagem: tecelagem.getCep(),
    cepMercadinho: mercadinho.getCep()
})

console.log('=======================================================================')

// Exercício 4
console.log('4-')
// métodos: getCpf, getCep, calculateBill e getResidentsQuantity.
// propriedades: CEP, consumedEnergy, name, registrationNumber e residentsQuantity.

// o get cep foi herdado da classe mãe, a propriedade Cep eh obrigatória na classe mãe, ele implenta a interface que possui 3 propriedades e um método.

const teste = new ResidentialClient('000.000.000-00', 79, '00.000-000', 'TesteUser', 25, 250)
teste.getResidentsQuantity
console.log('=======================================================================')

// Exercício 5

// a) as propriedades implementadas com base na interface Client
// b) as propriedades e métodos que são próprios da classe

// Exercício 6

// a) Industry, porque se trata de um cliente industrial
// b) Client, porque o IndustrialClient eh uma variação dos clientes e ele possui as mesmas propriedades e métodos dos outros clientes.
