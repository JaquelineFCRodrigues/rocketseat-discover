// Variáveis e Tipos de Dados ----------------------------------------------------------------------

//Declaration (Declaração)

var name;

//Assigment (Atribuição de Valores)

name = "Jaqueline";

//Tipo de dado que foi atribuído

console.log(typeof name);

//Agrupamento de Declarações-----------------------------------------------------------------------

// let age = 20;
// let isHuman = true;

let age, isHuman;
age = 18;
isHuman = true;

console.log(name, age, isHuman); // Passando multiplos argumentos na função log.

//Concatenando e interpolando variáveis-------------------------------------------------------------

console.log('A ' + name + ' tem ' + age + ' anos') // concatenando valores

console.log(`A ${name} tem ${age} anos`) // interpolando valores com template literals or template strings

