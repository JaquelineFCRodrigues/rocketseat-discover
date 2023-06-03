// Criando e adicionando elementos

// Create Element
const div = document.createElement('div');
div.innerText = 'Olá Devs';

// append (depois do ultimo filho) / prepend (antes do primeiro filho)

const body = document.querySelector('body');

// body.append(div);
// body.prepend(div);

// insertBefore ( inserir no meio)

const script = body.querySelector('script');
body.insertBefore(div, script)

const header = body.querySelector('header');
body.insertBefore(div, header.nextSibling);