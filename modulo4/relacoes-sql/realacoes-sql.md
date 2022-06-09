# Atividade - Relações SQL

## Exercício 1

a) É uma restrição usada pra previnir que ações possam violar uma relação ou link entre tabelas. Ela é um campo na tabela que se referencia com a `PRIMARY KEY` de outra tabela.

b)
```
INSERT INTO Rating VALUES
("001", "Bacana!", 7.3, "002"),
("002", "Show de bola!", 8.4, "003"),
("003", "Amei!", 9.5, "004"),
("004", "Top demais!", 8.9, "005"),
("005", "O melhor!", 10, "006"),
("006", "...!", 6.6, "1654731684758");
```
c)

Código:
```
INSERT INTO Rating VALUES
("007", "Bacana!", 7.3, "12452")
```
Erro:
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`shaw-21815036-juvito`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
```

Ele não permite adicionar o comentário pois a `FOREIGN KEY` passada não corresponde a nenhum **id** existente na tabela `Movies`

d)
```
ALTER TABLE Movies
DROP COLUMN rating
```
e)
```
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`shaw-21815036-juvito`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))
```
Não é possível deletar ou atualizar o filme devido ao fato da tabela `Movies` esta linkada com a tabela `Rating`

## Exercício 2

a)
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

A tabela MovieCast está linkando a ela duas outras tabelas: Actor e Movies por meio das duas `FOREIGN KEY`.

b)
```
INSERT INTO MovieCast VALUES
("002","002"),
("002","003"),
("003","003"),
("003","004"),
("004","004"),
("005","004"),
("006","005"),
("006","006"),
("006","007");
```
c)
Código:
```
INSERT INTO MovieCast VALUES
("002","089")
```

Erro:
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`shaw-21815036-juvito`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

```
Ele não permite adicionar uma relação pois a `FOREIGN KEY` passada não corresponde a nenhum **id** existente na tabela `Actor`.

d)

Erro:
```
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`shaw-21815036-juvito`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
```
Não é possível deletar ou atualizar o ator devido ao fato da tabela `Actor` está linkada com a tabela `MovieCast`.

## Exercício 3

a)
```
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
```

O `INNER JOIN` irá unir as tabelas e o `ON` vai especificar sob qual condição uma linha de uma tabela está linkada com a linha da outra.

b)

```
SELECT Movies.id, name,  rate FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```

