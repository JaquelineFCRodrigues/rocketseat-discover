// If e Else

//Sua sintaxe é simples, como pode ver a seguir:

// if (condição) {
//     //apenas será executado o bloco de código caso condição seja true
// } else {
//   // apenas será executado o bloco de código caso condição do if seja false
// }

//Exemplo

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}


// Dicas:

// 1. Transformar as condicionais em variáveis
// 2. Quando houver apenas uma linha de código é possível não usar as chaves, porém é melhor deixar os blocos para evitar erro.