// Eventos

// >> Adicionando Eventos via JS
// const h1 = document.querySelector('h1');
// Primeiro parâmetro é o evento e o segundo a função
// h1.addEventListener('click', print);

// function print(){
//     console.log('print');
// }


// >> Eventos de teclado (onkeydow, onkeypress, onkeyup)

// const input = document.querySelector('input');
// input.onkeydown = function (){
//     console.log('rodei');
// }


// >> Adicionando eventos via JS (outro método) - Dessa forma considera a ultima que ele encontrar

// const h1 = document.querySelector('h1');

// h1.onclick = print;

// function print(){
//     console.log('print');
// }

// h1.onclick = function(){
//     console.log('outro momento');
// }

// >> Argumento Event

const input = document.querySelector('input');

input.onkeydown = function(event){
    console.log(event.currentTarget);
}
