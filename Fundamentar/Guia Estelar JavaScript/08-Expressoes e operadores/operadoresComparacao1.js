// Operadores de comparação estritamente igual e estritamente diferente

// Irá comparar valores e tipos e retorna um Boolean como resposta à comparação

let one = 1
let two = 2

// === estritamente igual a
console.log(one === "1");
console.log(one === 1);

// !== estritamente diferente de
console.log(two !== "2");
console.log(two !== 2);


// function sum(arr) {
//     if (arr.length == 0)
//     return 0;
//     else {
//         return arr[0] + sum(arr.slice(1));
//     } 
// }

// console.log(sum([1, 2, 3, 4])); // 10

// function count(array) {
//     if (array.length === 0) return 0;
//     return 1 + count(array.slice(1));
//   }
  
//   console.log(count([0, 1, 2, 3, 4, 5])); // 6

//   function alternativeSolutionMax(array, max = 0) {
//     return array.length === 0
//       ? max
//       : alternativeSolutionMax(array.slice(1), array[0] > max ? array[0] : max);
//   }
  
//   console.log(alternativeSolutionMax([1, 5, 10, 25, 16, 1])); // 25