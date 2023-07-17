
// LET e Const são locais e só funcionam no escopo onde foram criadas

// console.log('> existe y antes do bloco?', y);

// {
//     let y = 0;
// }

// console.log('> existe y depois do bloco?', y);

let y = 1;

{
    //console.log('> existe y antes do bloco?', y);
    let y = 0;
    console.log('> existe y', y);
}

console.log('> existe y depois do bloco?', y);