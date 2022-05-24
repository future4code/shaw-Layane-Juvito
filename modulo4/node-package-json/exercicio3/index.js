// Exercício 3

// const tasks = ["Revisar front", "Fazer a atividade do dia", "Ir pra academia"]
// tasks.push(process.argv[2])
// console.log('\u001b[32m A tarefa foi adicionada com sucesso!')
// console.log(tasks) 

// Desafio

let fs = require('fs');

fs.readFile('tasks.txt', 'utf8', (err, data) => {
  if (err) throw err;
  const tasks = JSON.parse(data)
  tasks.push(process.argv[2])
  console.log(tasks)

  fs.writeFile('tasks.txt', JSON.stringify(tasks), { flag: 'w+' }, err => {});

});
