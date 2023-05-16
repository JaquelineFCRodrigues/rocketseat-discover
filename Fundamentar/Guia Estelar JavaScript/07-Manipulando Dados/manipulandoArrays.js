// Manipulando Arrays

let techs = ["html", "css", "js", "ruby", "Java"]

// adicionar um item no fim
techs.push("nodejs");
// adicionar no começo
techs.unshift("sql");
// remover do fim
techs.pop();
// remover do começo
techs.shift();
// pegar somente alguns elementos do array (não modifica o array)
techs.slice(1, 2)
// remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 1)
// encontrar a posição de um elemento no array
console.log(techs.indexOf("Java"));

console.log(techs);