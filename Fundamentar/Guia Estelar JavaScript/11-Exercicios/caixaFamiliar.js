// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.

let fluxoCaixa = {
    receitas: [1500, 200, 0], // incomes
    despesas: [350.42, 950.11, 1150.25], // expenses
}


function fluxoCaixaFamiliar(receitas, despesas) {

    receitas = fluxoCaixa.receitas[0]+fluxoCaixa.receitas[1]+fluxoCaixa.receitas[2];
    despesas = fluxoCaixa.despesas[0]+fluxoCaixa.despesas[1]+fluxoCaixa.despesas[2];

    let saldo = (receitas - despesas).toFixed(2);

    if (saldo < 0) {
        console.log(`O saldo final é ${saldo} logo é negativo`);
    } else {
        console.log(`O saldo final é ${saldo}, logo é positivo`);
    }
    
}

fluxoCaixaFamiliar();



// Solução Mayk

let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total+= value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes);
    const calculateExpenses = sum(family.expenses);

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0;

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}`)

}

calculateBalance()