const express = require('express'); // invocando express
const app = express(); // instanciando of express

app.set('view engine', 'ejs'); //Falamos para o express que a ferramenta (view engine) que vamos usar para renderizar HTML é o ejs.

// Criando uma rota e dizendo o que ela vai chamar

app.get('/', function(req, res) {
    const items = [
        {
            title: "D",
            message: "Desenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message: "EJS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "Muito fácil de usar"
        },
        {
            title: "A",
            message: "Amo JavaScript"
        },
        {
            title: "I",
            message: "install ejs"
        },
        {
            title: "S",
            message: "Sintaxe simples"
        }

    ]; 

    const subtitle = "Uma linguagem de modelagem para criação de página HTML"

    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get('/sobre', function(req, res) { 
    res.render('pages/about');
})

app.listen('8080'); // ouvindo uma porta, no caso a 8080
console.log('Rodando');