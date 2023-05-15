
// VAR é global e poderá funcionar fora de um escopo de bloco (global e local), nesse caso ocorre o HOISTING (elevação)

console.log('> existe x antes do bloco?', x);

{
    var x = 0;
}

console.log('> existe x depois do bloco?', x);