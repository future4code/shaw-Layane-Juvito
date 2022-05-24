// Exercício 3

const tasks = ["Revisar front", "Fazer a atividade do dia", "Ir pra academia"]

tasks.push(process.argv[2])
console.log('A tarefa foi adicionada com sucesso!')
console.log(tasks) 