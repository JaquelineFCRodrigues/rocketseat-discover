// Manipulando Conteúdo
// textContent (altera o conteúdo de texto do elemento) ====

const element = document.querySelector('h1');

element.textContent = "Olá Devs!";
// element.textContent += "Olá Devs!"; (O operador + concatena o texto com o texto existente)
console.log(element.textContent);

// innerText (altera o texto interno do elemento ) ====

const element1 = document.querySelector('h1');

element1.innerText = "Olá Devs e Divas!";

// innerHTML (altera o conteúdo html interno) ====

const element2 = document.querySelector('h1');

element2.innerHTML = "Olá Pessoal <small>Inserindo novos conteúdos</small>";

// value (adicionar/atribuir valor ou exibir/mostrar/dar valor) ====

const element3 = document.querySelector('input');

element3.value = "Valor que eu quiser";


// Manipulando elementos
// Atributos

const header = document.querySelector('header');
header.setAttribute('id', 'header');

const headerID = document.querySelector('#header');

console.log(headerID.getAttribute('class'));
// console.log(headerID);

header.removeAttribute('id');

header.setAttribute('class', 'bg header');