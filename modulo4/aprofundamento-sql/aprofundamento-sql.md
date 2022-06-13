# Atividade - Aprofundamento Sql

## Exercício 1:

a)

```
ALTER TABLE Actor DROP COLUMN salary;
```

Ao executar o código acima a coluna **salary** será excluída.

b)
```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
Ao executar o código acima o campo **gender** será alterado para **sexy** que será do tipo VARCHAR(6).

c)

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

Ao executar o código acima ele irá alterar apenas o tipo do campo **gender**.

d)

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100)
```

## Exercício 2:

a)
```
UPDATE Actor 
SET name= "Moacyr Franco", birth_date = "1936-10-05"
WHERE id="003";
```
b)

primeira atualização:
```
UPDATE Actor 
SET name= "JULIANA PAES"
WHERE id="002";
```
segunda atualização:
```
UPDATE Actor 
SET name= "Juliana Paes"
WHERE id="002";
```
c)
```
UPDATE Actor
SET 
name = "Fernanda Montenegro",
salary = 300000,
birth_date = "1929-10-19",
gender = "female"
WHERE id = "005";
```

d)

Teste:
```
UPDATE Actor
SET 
name = "Millie Bobby Brown",
salary = 2427792.25,
birth_date = "2004-02-19",
gender = "female"
WHERE id = "096";
```
Resposta:
```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
```
Ele retorna uma mensagem de sucesso, porém indicando que nenhuma linha foi afetada, que não deu match com nenhuma linha (já que n existe o id passado).

## Exercício 3:

a)
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
b)
```
DELETE FROM Actor WHERE gender="male" AND salary >1000000;
```
## Exercício 4:

a)
```
SELECT MAX(salary) FROM Actor;
```
b)
```
SELECT MIN(salary) FROM Actor WHERE gender="female";
```
c)
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
d)
```
SELECT SUM(salary) FROM Actor;
```

## Exercício 5:

a)
Código:

```
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```
Resposta:

O comando COUNT irá contabilizar dentre todos os registros os gêneros e, com o GROUP BY, agrupá-los de acordo com os gêneros que se repetem.

b)

```
SELECT id, name FROM Actor
ORDER BY name DESC;
```
c)
```
SELECT * FROM Actor
ORDER BY salary ASC;
```
d)
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
e)
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

## Exercício 6:

a)
```
ALTER TABLE Movies ADD playing_limit_date DATE;
```
b)
```
ALTER TABLE Movies CHANGE rating rating FLOAT;
```
c)
```
INSERT INTO Movies (id, name, synopsis, release_date,playing_limit_date, rating )
VALUES(
"005",
"Doutor Estranho no Multiverso da Loucura",
"O aguardado filme trata da jornada do Doutor Estranho rumo ao desconhecido. Além de receber ajuda de novos aliados místicos e outros já conhecidos do público, o personagem atravessa as realidades alternativas incompreensíveis e perigosas do Multiverso para enfrentar um novo e misterioso adversário.",
"2022-05-04",
"2022-08-01",
9.3
), (
"006",
"Shang-Chi e a Lenda dos Dez Anéis",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
"2021-09-02",
"2021-11-02",
8.99
)
```
d)

Comandos:
```
DELETE FROM Movies WHERE id = "001";
UPDATE Movies 
SET synopsis = "Shang-Chi é o filho do líder de uma organização criminosa poderosa. O rapaz foi criado desde criança para ser um guerreiro, mas decidiu abandonar esse caminho e fugiu para viver uma vida pacífica. Porém, tudo isso muda quando ele é atacado por um grupo de assassinos e se vê forçado a enfrentar seu passado."
WHERE id = "001";
```

Resposta: 
```
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
```
Ele retorna uma mensagem de sucesso, porém indicando que nenhuma linha foi afetada, que não deu match com nenhuma linha (já que n existe o id passado).

# Desafios

## Exercício 7:

a)
```
SELECT COUNT(*) FROM Movies WHERE rating >7.5 AND playing_limit_date > CURDATE();
```
Resposta: `1`

b)
```
SELECT AVG(rating) FROM Movies;
```
Resposta: `9.257999992370605`

c)
```
SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();
```
Resposta: `1`

d)
```
SELECT COUNT(*) FROM Movies WHERE release_date > CURDATE();
```
Resposta: `0`

e)
```
SELECT MAX(rating) FROM Movies;
```
Resposta: `10`

f)
```
SELECT MIN(rating) FROM Movies;
```
Resposta: `8`

 ## Exercício 8:

 a)
 ```
SELECT * FROM Movies
ORDER BY name ASC;
```
b)
```
SELECT * FROM Movies
ORDER BY name DESC
LIMIT 5;
```
c)
```
SELECT * FROM Movies 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```
d)
```
SELECT * FROM Movies 
ORDER BY rating DESC 
LIMIT 3;
```


