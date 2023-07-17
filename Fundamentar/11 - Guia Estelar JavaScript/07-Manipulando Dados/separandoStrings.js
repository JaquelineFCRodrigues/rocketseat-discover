// Manipulando Strings e Arrays

// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque "_"

let phrase = "Eu gosto de estudar";

let myArray = phrase.split(" ");

console.log(myArray);

let phraseWithUnderscore = myArray.join("_");

console.log(phraseWithUnderscore);
