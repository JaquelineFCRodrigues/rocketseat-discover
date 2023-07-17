// Falsy e truthy

//Falsy (quando um valor é considerado (false) em contextos que onde um booleano é obrigatório (condicionais e loops)

/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( NaN ? 'verdadeiro' : 'falso' ) // os valores da condição precisam ser booleanos

// TRUTHY (quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops)

/* 
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( Infinity ? 'verdadeiro' : 'falso' ) // os valores da condição precisam ser booleanos
