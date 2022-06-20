# Projeto: LabeBank

Projeto desenvolvido na 15ª semana do Bootcamp Desenvolvimento Web Fullstack da Labenu. Os tópicos estudados ao longo dessa semana e aplicados nesse projeto, foram:

 - [ ]  Conceito de API REST
- [ ]  Criar endpoints (get, post, put, delete)
- [ ]  Entidades e métodos de uma API REST
- [ ]  Receber parâmetros de requisição(`req.body, req.query`, `req.params`)
- [ ]  Enviar objeto de resposta (`res.send` e `res.end`)
- [ ]  try/catch
- [ ]  Status de sucesso (`2xx`) e falha (`4xx`)

### Objetivo:

A ideia é criar um sistema bancário utilizando o Typescript onde todas as informações são acessadas por meio de endpoints com o express .

## Funcionalidades

- **Criar Conta**
    
    - Um cliente pode criar uma conta no banco se tiver idade igual ou maior do que 18 anos. 
    - Ele deve informar: **nome**, **CPF** e **data de nascimento**. 
    - As contas guardam essas informações e uma propriedade para representar o **saldo** do usuário. 
    - Além disso, também são guardados todos os gastos do usuário num array de **extrato** (possuindo o **valor**, a **data** e uma **descrição**). 
    - Todas as contas, ao serem criadas, começam com o saldo zerado. 
    - Não podem existir dois usuários diferentes com o mesmo CPF.
    
- **Pegar Saldo**
    
    O usuário consegue verificar o saldo da sua conta, passando o seu nome e o seu CPF. 
    
- **Adicionar saldo**
    
    O usuário consegue adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar.
    
- **Pagar Conta**
    
    - Eles podem pagar uma conta, se quiserem, passando: um valor, uma descrição e uma data de pagamento. 
    - Caso ele não informe a date, é considerado que o pagamento é para ser feito no mesmo dia. 
    - Não é possível agendar um pagamento para um dia que já passou ou tentar pagar uma conta cujo valor seja maior do que o seu saldo.
    
- **Transferência Interna**
    
    - O usuário deve informar o seu nome, o seu CPF, o nome do destinatário, o CPF do destinatário e o valor em si. 
    - Transferências não podem ser agendadas e devem respeitar o saldo do usuário remetente.

## Documentação
A documentação pode ser acessada [aqui](https://documenter.getpostman.com/view/14453564/Uz5GowKn).