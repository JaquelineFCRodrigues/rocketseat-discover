// For of ( Cria um loop em cima de uma variável)

// let name = 'Jaqueline';
// let names = [ 'Theodoro', 'Tobias', 'Itair']

// for ( let char of name) {
//     console.log(char)
// }

// for ( let name of names) {
//     console.log(name)
// }

// For in (Cria um loop em cima de um objeto, pegando as propriedades do objeto)

let person = {
    name: 'Jaqueline',
    age: 36,
    weight: 62.2
}

for (let property in person) {
    // console.log(property)
    console.log(person[property])
    // console.log(person.name)
    // console.log(["name"])
}