// function acao() {
//   document.write('Executando... <br/>')
// }

// setInterval(acao, 500)

var timer = setInterval(() => document.write('Executando... :D<br/>'), 100)

setTimeout(() => {
  clearInterval(timer) // para a execução do Interval
  document.write('Seja bem vindo')
}, 2000)

if (true) {
  var salario = 1500
}
