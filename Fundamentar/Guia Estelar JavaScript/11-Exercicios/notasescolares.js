// Esse exercício vai trabalhar a transformação de notas escolares, onde devemos criar um algoritmo para transformar notas númericas em notas de caracteres.

// Desafio:

// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F


let nota = 100;

if (nota >=90 && nota <=100) {
    console.log("Conceito A");
} else if (nota <= 89 && nota >=80) {
    console.log("Conceito B");
} else if (nota <= 79 && nota >=70) {
    console.log("Conceito C");
} else if (nota <= 69 && nota >=60) {
    console.log("Conceito D");
} else if (nota <= 59 && nota >=0) {
    console.log("Conceito F");
} else {
    console.log("Nota inválida");
}

