// Throw (disparar/lançar) e Try/Catch (tentar/pegar)

// Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.

function sayMyName(name = '') {
    if (name === '') {
        throw new Error('Nome é obrigatório');
    }

    console.log(name)
}

// Nesse caso, se o nome vier vazio, será disparada uma mensagem.
// Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário, ele irá encerrar nossa aplicação, e nós o faremos da seguinte maneira:

try {
    sayMyName() // Vai tentar executar a função
} catch(e) {
    console.log(e) // Se não conseguir vai capturar o erro
}

console.log('após ao try/catch')

// O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável 'e', que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo.