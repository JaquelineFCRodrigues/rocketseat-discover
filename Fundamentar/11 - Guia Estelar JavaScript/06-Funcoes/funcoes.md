# Functions

    Funções são tipos de dados estruturais, que são declarados dessa forma: 

        ```JS 

        function nomeFunção() { código à ser executado }

        ``` 

    e para executar a função, usa-se: 

        ```JS 

        nomeFunção()

        ```
    - Uma função é importante para o AGRUPAMENTO e REUTILIZAÇÃO de código.


# Argumentos e parâmetros

    Também é possível declarar funções dentro de variáveis, desta maneira: 

        ```js

        const variavel = function() {}

        ```

    Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.

# Argumentos e parâmetros

    Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada.

# Function scope

    Parâmetros, mesmo se tiverem o mesmo nome que alguma outra variável do seu código, são apenas modificados e persistem no escopo da função.

# Arrow Function

    Também podemos escrever funções expression de uma maneira mais compacta, desta maneira:

    () => { codigo a ser executado}, chamada de Arrow Function.

# Callback Function

    Uma callback function é uma função que está sendo passada para outra função como parâmetro.

# Funções Construtoras

    Funções construtoras são utilizadas para criar novos objetos e geralmente tem a sua primeira letra maiúscula, todos com as mesmas características que são criadas na função, usando a palavra reservada this para se referir ao objeto sendo criado, por exemplo:

    ```JS 

    function Person(name) {
	    this.name = name
	    this.walk() = function() {
		    return this.name + "está andando"
	    }
    }

    const mayk = new Person("Mayk")
    const joao = new Person("João")
    ```