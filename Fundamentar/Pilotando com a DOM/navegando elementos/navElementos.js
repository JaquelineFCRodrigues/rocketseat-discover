// Navegando pelos elementos
// >> parentNode parentElement

// const element = document.querySelector('h1');

// console.log(element.parentNode);

// >> childNodes / children
// const el = document.querySelector('body');

// console.log(el.childNodes);
// console.log(el.children);



// >> firstChild (considera o espaço vazio) /firstElementChild (desconsidera o espaço vazio)

// console.log(el.firstChild);
// console.log(el.firstElementChild);

// >> lastChild (considera o espaço vazio) / lastElementChild (desconsidera o espaço vazio)

// console.log(el.lastChild);
// console.log(el.lastElementChild);


// >> nextSibling / nextElementSibling

const el = document.querySelector('script');

console.log(el.nextSibling);
console.log(el.nextElementSibling);


// >> previousSibling / previousElementSibling

console.log(el.previousSibling);
console.log(el.previousElementSibling);

