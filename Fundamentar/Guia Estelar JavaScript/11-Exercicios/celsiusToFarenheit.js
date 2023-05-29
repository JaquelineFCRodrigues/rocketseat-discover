// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32


let celsius = '50C';
let fahrenheit = '95F';

function celsiusToFahrenheit(valor, unidade) {
    
    // Verificar a unidade fornecida
  if (unidade === "C") {
    // Converter de Celsius para Fahrenheit
    const fahrenheit = (valor * 9/5) + 32;
    return fahrenheit + "°F";
  } else if (unidade === "F") {
    // Converter de Fahrenheit para Celsius
    const celsius = (valor - 32) * 5/9;
    return celsius + "°C";
  } else {
    // Unidade inválida
    return "Unidade de temperatura inválida. Por favor, forneça 'C' para Celsius ou 'F' para Fahrenheit.";
  }
}

console.log(celsiusToFahrenheit(parseFloat(celsius),celsius.slice(-1))); 
console.log(celsiusToFahrenheit(parseFloat(fahrenheit), fahrenheit.slice(-1))); 

