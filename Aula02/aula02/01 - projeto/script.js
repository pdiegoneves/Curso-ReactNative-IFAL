const peso = document.getElementById('peso')
const altura = document.getElementById('altura')
const btnCalcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')

btnCalcular.addEventListener('click', () => {
  let imc = peso / altura ** 2
  resultado.innerHTML = imc
})

function classificar(imc) {
  /**
   
MENOR QUE 18,5	MAGREZA
ENTRE 18,5 E 24,9	NORMAL
ENTRE 25,0 E 29,9	SOBREPESO
ENTRE 30,0 E 34,9	OBESIDADE
ENTRE 35 E 39,9	OBESIDADE II
MAIOR QUE 40,0	OBESIDADE III

   */
  if ((imc < 18, 5)) {
  }
}
