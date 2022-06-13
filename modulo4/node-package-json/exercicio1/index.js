// Exercício 1

// a) usando o process.argv[2]

// b)

const userName = process.argv[2]
const age = process.argv[3]

if (userName && age){
   
console.log(`\u001b[35m 1-b)
\x1b[1;42m Olá ${userName}! Você tem ${age} anos. \x1b[0m`)

// c)

const futureAge = Number(age) + 7

console.log(`\u001b[35m 1-c)
\x1b[1;42m Olá ${userName}! Você tem ${age} anos. Em sete anos você terá ${futureAge} \x1b[0m`)

} else {
    console.log("\033[31m Por favor insira os parâmentros necessários: nome e idade")
}