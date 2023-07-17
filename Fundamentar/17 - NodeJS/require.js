// Quando utilizamos essa função ela SEMPRE vai necessitar receber um argumento.

// console.log(require('path'))

//Módulos nativos

//const path = require('path'); // é uma maneira de chamar módulos que já são nativos do NodeJS ou módulos que podemos criar ou instalar no Node.

//console.log(path.basename(__filename));

// Meus módulos

const myModule = require('./exports');
console.log(myModule);