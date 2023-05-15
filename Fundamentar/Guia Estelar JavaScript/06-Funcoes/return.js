// function expression or function anonymous

const sum = function(number1, number2){ // parameter ou paramêtros (na função criada)
    let total = number1 + number2
    return total
};

let number1 = 34;
let number2 = 25;

console.log(`o número 1 é ${number1}`);
console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`)

// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
};

const copo = fazerSuco('banana', 'maçã');

console.log(copo);