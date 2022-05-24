// Exercício 1

// a) usando o process.argv[2]

// b)

const userName = process.argv[2]
const age = process.argv[3]

if (userName && age){
   
console.log(`\u001b[34m 1-b)
Olá ${userName}! Você tem ${age} anos.`)

// c)

const futureAge = Number(age) + 7

console.log(`\u001b[34m 1-c)
Olá ${userName}! Você tem ${age} anos. Em sete anos você terá ${futureAge}`)

} else {
    console.log("\033[31m Por favor insira os parâmentros necessários: nome e idade")
}