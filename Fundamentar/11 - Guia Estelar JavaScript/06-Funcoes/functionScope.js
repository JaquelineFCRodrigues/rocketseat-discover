// function scope

let subject;

// function createThink(subject) {
// subject = 'study';
//     return subject
// };

function createThink() {
    subject = 'study';
    return subject
};

console.log(subject);
console.log(createThink(subject)); // return da função
console.log(subject); // subject atualizado fora