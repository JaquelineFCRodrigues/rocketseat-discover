# Overview do curso

* Vamos conhecer alguns serviços de banco de dados
* Como guardar infromações nos bancos
* Como recuperar e trabalhar com essas informações usando os comandos SQL

# O que é um banco de dados?

* É um repositório sistêmico de informações ( um local onde vamos guardar informações de forma organizada e sistêmica)

# Serviços de banco de dados

- PostgreSQL
- MySQL
- Firebase
- mongoDB
- Oracle
- MariaDB
- redis

# Conceitos

## Tabelas

- Nos bancos de dados as informações são organizadas em TABELAS.
- Tabelas possuem LINHAS e COLUNAS.

## Campos

- Os campos se referem aos nomes das informações (os títulos).

## Informações

- As informações são os dados que cadastramos em cada campo da tabela.

# Tipos de Campo

* Text - Pode ter números e caracteres especiais mas tudo será considerado texto.
* Number - Apenas números.
* Datatine - Aceita números e alguns caracteres especiais. (Data e hora)
* Primary key - Campo identificador númerico (Aquele tipo de dado único, como ID)
* Nomes de campos e tabelas - REGRAS

    [] Deve começar por uma letra do alfabeto
    [] Os caracteres seguintes não são permitidos () + - / * " ; = & | # > < ^ ' {} %
    [] Não pode conter espaços
    [] Não pode conter acentuação

# Comando SELECT

-  O comando SELECT tem por função buscar algum dado.
- " * " o comando asterisco quer dizer TODAS as informações
- "FROM" quer dizer de onde

## SELECT especificando campos

- Se quiser apenas dados específicos escrever no lugar do *

    `SELECT nome, responsavel FROM aluno`

onde select é o comando, nome e responsável os dados pretendidos e aluno a tabela.

- As colunas são montadas de acordo com a ordem que solicitarmos.

## SELECT com WHERE

 `SELECT * FROM aluno WHERE matricula = 1`
 `SELECT * FROM aluno WHERE nome like "J%"` - % indica que tudo que vem depois deve ser ignorado, também pode ser  utilizado antes, "%j%".

# Operadores Relacionais

## Igual "="

   `SELECT * FROM aluno WHERE cpf = 11872675710` 

Obs.: Só funciona em campos que são NUMBER não funciona em campos que são TEXTO.

## like

   `SELECT * FROM aluno WHERE nome like "jakeliny gracielly"` 

Obs.: Só funciona em campos que são NUMBER não funciona em campos que são TEXTO.

## > Maior que

`SELECT * FROM aluno WHERE matricula > 2`

## < Menor que

`SELECT * FROM aluno WHERE matricula < 2`

## >= Maior ou igual

`SELECT * FROM aluno WHERE matricula >= 2`

## <= Menor ou igual

`SELECT * FROM aluno WHERE matricula <= 2`

## <> Não igual

`SELECT * FROM aluno WHERE matricula <> 2`

## != Diferente de

`SELECT * FROM aluno WHERE matricula != 2`

# Operadores Matemáticos

## Adição +

`SELECT * FROM aluno WHERE matricula = 2 + 1`

## Subtração -

`SELECT * FROM aluno WHERE matricula = 2 - 1`

## Multiplicação *

`SELECT * FROM aluno WHERE matricula = 2 * 1`

## Divisão /

`SELECT * FROM aluno WHERE matricula = 2 / 1`

## Módulo %

`SELECT * FROM aluno WHERE matricula = 2 % 1`

# Operadores Lógicos

## AND

Uma condição e outra

## OR

Uma condição ou outra

## BETWEEN

Entre intervalo

## IN e NOT IN

## IS NULL e IS NOT NULL

# Mais comandos

## INSERT TO

## UPDATE

## DELETE 

