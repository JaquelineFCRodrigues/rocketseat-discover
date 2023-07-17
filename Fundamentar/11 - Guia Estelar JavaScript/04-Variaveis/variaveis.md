# Conhecendo as variáveis

    Para entender variáveis podemos pensar nelas como nomes simbólicos para algum valor, atalhos de código ou identificadores. Para criar uma variável, podemos usar uma das palavras reservadas: var, let e const, por exemplo: var clima = "quente", onde var é a palavra que simboliza a criação da variável, clima é o nome da variável, o sinal de igual denota que a variável está recebendo um valor e "quente" é a string que está sendo recebida. As variáveis declaradas com "var" e "let" podem ter seu valor mudado, já a const não.

    * Nomes simbólicos para receber algum valor
    * Atalhos de código
    * Identificadores
    * 3 palavras reservadas para criar uma variável
        * var
        * let
        * const

# Tipos dinâmicos

    O JavaScript é uma linguagem fracamente tipada e dinâmica, ou seja, ao declarar uma variável não é necessário estabelecer um tipo específico e o tipo do valor da variável pode mudar conforme o código.

    - Variáveis não precisam ter um tipo previamente definido
    - Podemos mudar o conteúdo da variável

# Scope e var

    O Scope ou Escopo determina a visibilidade de uma variável em um código, e para entender scope precisamos primeiramente entender block statement, que é o código presente dentro de chaves. O escopo do var é global, ou seja, uma variável declarada com var poderá ser usada em todo o código.

    
    * Escopo determina a visibilidade de alguma variável no JS.

# Block statement (Declaração de Bloco)

```JS
//vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`

# Scope let e const

    Diferentemente de var, const e let são variáveis com escopo local, ou seja, só são visíveis no escopo onde foram criadas e em escopos interiores ao de criação. Em uma variável let, porém, pode-se alterar o valor em um escopo e o valor irá persistir no escopo de criação.

# Nomeando variáveis

    Para nomearmos variáveis corretamente e de um jeito inteligente, precisamos saber de algumas coisas, como: JavaScript é case-sensitive (sensível à letras maiúsculas e minúsculas) e aceita a cadeia de caracteres Unicode, podendo receber acentuações. Em um nome de variável em JS você pode: Iniciar com caracteres especiais, iniciar com letras e colocar acentos, lembrando sempre que letras maiúsculas e minúsculas fazem a diferença. Em contraste, você não pode: Iniciar com números e colocar espaços vazios. Idealmente você deve colocar nomes significativos, que fazem sentido na aplicação, explicando o que a variável é, usando camel case, onde a primeira palavra de uma frase é toda minúscula, e as subsequentes não se separam por espaço e tem a primeira letra maiúscula, por exemplo: oNomeDessaVariável, e usar nomes em inglês.

## Para criar nomes

    * JS é case-sensitive (sensível ao caso)
    * JS aceita a cadeia de caracteres Unicode

    - Posso:
        * Iniciar com esses caracteres especiais: $ _
        * Iniciar com letras
        * Colocar acentos
        * Letras maíusculas e minúsculas fazem diferença
    
    - Não posso:
        * Iniciar com números
        * Colocar espaços vazios no nome

    - Ideal:
        * Criar nomes que fazem sentido
        * Que expolique o que a varoável faz ou é
        * camelCase
        * snake_case
        * escrever em Inglês
