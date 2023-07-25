// setTimeout(function, delay)

// setTimeout(function () {
// 	console.log('depois de 1s')
// }, 1000)

function imprimirDado(dado){
	console.log('outras tarefas')
	console.log(dado())
}

imprimirDado(function () {
	return 'Olá mundo'
})