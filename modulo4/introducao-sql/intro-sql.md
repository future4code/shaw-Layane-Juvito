# Introducão SQL

### Exercíco 1: 
Criando a tabela:
```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor;
```

a) 
- `VARCHAR(n)` - indica que o campo será do tipo _string_, e aceita no máximo **n** caracteres.
- `DATE` - indica que o campo será do tipo data (AAAA-MM-DD).
- `NOT NULL` - é uma restrição que força a tabela a não aceitar valores do tipo `NULL`, ou seja, não permite inserir ou atualizar algum registro sem passar valores para esse campo.
- `PRIMARY KEY` - para que cada registro em uma tabela tenha um indentificador único é preciso criar um campo, nesse caso o id, que irá receber a restrição `PRIMARY KEY`.

b)

- `SHOW DATABASES` - Retorna as informações dos bancos de dados disponíveis no sistema.
- `SHOW TABLES` - Retorna todas as tabelas cadastradas no banco de dados.

c)

- `DESCRIBE Actor` - retorna todos os campos da tabela, com seus respectivos tipos, restrições, defaults e informações extras.

### Exercício 2
Inserido dados na tabela:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```

a)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001",
  "Tony Ramos",
  400000,
  "1948-08-25",
  "male"
), (
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
)
```
b)

Novo registro com **id** já cadastrado:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Juliana Paz",
  160000,
  "1979-05-26",
  "female"
)
```

Erro:
```
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	

Código de Erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY' 
```
- O erro acima ocorreu porque a `PRIMARY KEY` deve ser um valor único, assim não deve existir mais de um registro com a mesma `PRIMARY KEY`.

c)

Comando com erro:
```
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
Erro:
```
Error Code: 1136. Column count doesn't match value count at row 1
Código de Erro:1136. A contagem de colunas não corresponde à contagem de valores na linha 1
```

- O erro acima ocorreu porque não foram informados todos os campos que deveriam recever novas informações no comando `INSERT`. A quantidade de itens no comando `INSERT` e dentro do comando `VALUES` devem ser o mesmo e seguir a ordem correspondente.

Solução:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d)

Comando com Erro:
```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
```
Erro:
```
Error Code: 1364. Field 'name' doesn't have a _default_ value
Código de Erro: 1364. O campo 'name' não possui um valor _default_
```
- O erro acima ocorreu porque todos os campos foram declarados com a restrição `NOT NULL` e não possuem um valor _default_, assim, sempre que usar o comando `INSERT` deve passar os valores de todos os campos da tabela.

Solução:

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

e)

Comando com Erro:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
```
Erro:
```
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

Código de Erro: 1292. O Valor data está incorreto: '1950' na coluna 'birth_date' na linha 1

```
-  O erro acima ocorreu porque o campo data foi passado com um valor do tipo errado, o tipo esperado para esse campo é uma _string_.

Solução:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
f)

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Millie Bobby Brown",
   2427792.25,
  "2004-02-19", 
  "female"
),(
  "007", 
  "Will Smith",
   15919949.58,
  "1968-09-25", 
  "male"
);
```

### Exercício 3

a)

```
SELECT * FROM Actor WHERE gender = "female";
```
b)

```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```
c)
```
SELECT * FROM Actor WHERE gender = "invalid";
```
- Retorna uma linha nula, pois não existe um registro que atende a condição passada.

d)

```
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```
e)
Código errado:
```
SELECT id, nome FROM Actor WHERE id = "002"
```
Err0:
```
Error Code: 1054. Unknown column 'nome' in 'field list'
Código de Erro: 1054. Coluna 'nome' desconhecida em 'field list'.
```
- O erro acima ocorreu porque não existe uma coluna com nome 'nome' o correto é 'name'.

Solução:
```
SELECT id, name FROM Actor WHERE id = "002"
```

### Exercíco 4
```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

a)

- A _query_ acima irá buscar na tabela Actor todos os registros que atedam às condições passadas. No caso ela verifica a coluna **name** e retorna aqueles que possuem em seuu valores "A" ou "J" no início da string usando o comparador `LIKE` junto com o operador `%`. Depois ele verifica (dentre os registros filtrados na verificação anterior) a coluna **salary** e retorna os registros cujo valor são superiores a 300000.

b)

```
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
```

c)

```
SELECT * FROM Actor
WHERE (name LIKE "%G%");
```

d)

```
SELECT * FROM Actor
WHERE (name LIKE "%G%" or name Like "%A%" && salary BETWEEN 350000 AND 900000 );
```
### Exercício 5

a)
```
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL,
	CHECK (rating BETWEEN 0 AND 10)
);
```

- Esta _query_ irá criar uma tabela chamada **Movies** e terá 5 colunas: id, name, synopsis, release_date e rating (só aceita rating com valores entre 0 e 10)

Type `TEXT`: faz com que aquele campo tenha um tamanho máximo de 65,535 bytes.

b), c), d) e e)

```
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
"2006-01-06",
7
), (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
"2012-12-27",
10
), (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
), (
"004",
"O Auto da Compadecida",
"As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
"2000-09-10",
10
)
```
### Exercício 6

a) 
```
SELECT id, name, rating FROM Movies WHERE id = "001";
```

b)

```
SELECT * FROM Movies WHERE name = "O Auto da Compadecida";
```

c)

```
SELECT id, name, synopsis FROM Movies WHERE rating >= 7;
```
### Exercício 7
a) 
```
SELECT * FROM Movies WHERE name LIKE "%vida%";
```
b)
```
SELECT * FROM Movies WHERE name LIKE "%vida%" OR synopsis LIKE "%vida%";
```
c) 
```
SELECT * FROM Movies WHERE release_date < "2022-06-06"
```
d)
```
SELECT * FROM Movies WHERE release_date < "2022-06-06" AND name LIKE "%vida%" OR synopsis LIKE "%vida%" AND rating > 7;
```




