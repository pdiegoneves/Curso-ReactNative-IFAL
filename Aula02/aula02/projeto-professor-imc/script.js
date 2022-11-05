let peso, altura, imc, resultado

function calcular(event) {
  event.preventDefault()
  peso = document.getElementById('peso').value
  altura = document.getElementById('altura').value
  sexo = document.querySelector('input[name="sexo"]:checked').value
  resultado = document.getElementById('resultado')

  if (altura > 100) altura /= 100

  console.log(sexo)
  imc = peso / altura ** 2

  if (sexo === 'feminino') {
    if (imc <= 17) {
      resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
        2
      )} <br> Cuidado você está abaixo do peso`
    } else if (imc > 17 && imc < 18.5) {
      resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
        2
      )} <br> Você está abaixo do peso`
    } else if (imc >= 18.5 && imc < 25) {
      resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
        2
      )} <br> Você está no peso ideal`
    } else if (imc >= 25.1 && imc < 30) {
      resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
        2
      )} <br> Você está acima do peso`
    } else if (imc >= 30) {
      resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
        2
      )} <br> Você está Obesa`
    }
  } else {
    if (imc < 18.5) {
      resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
        2
      )} <br> Cuidado você está abaixo do peso`
    } else if (imc >= 18.5 && imc < 25) {
      resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
        2
      )} <br> Você está no peso ideal`
    } else if (imc >= 25.1 && imc < 30) {
      resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
        2
      )} <br> Você está acima do peso`
    } else if (imc >= 30 && imc < 35) {
      resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
        2
      )} <br> Obesidade 1`
    } else if (imc >= 35 && imc < 40) {
      resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
        2
      )} <br> Obesidade 2`
    } else if (imc >= 40) {
      resultado.innerHTML = `<br> Seu resultado foi: ${imc.toFixed(
        2
      )} <br> Obesidade 3`
    }
  }
}
