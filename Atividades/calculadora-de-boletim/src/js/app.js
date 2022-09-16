const materia = document.getElementById('materia')
const mediaPrimeiroBimestre = document.getElementById('media-bimestre-1')
const mediaSegundoBimestre = document.getElementById('media-bimestre-2')
const mediaTerceiroBimestre = document.getElementById('media-bimestre-3')
const mediaQuartoBimestre = document.getElementById('media-bimestre-4')
const tbody = document.getElementById('tbody')
const calcular = document.getElementById('calcular')
const resultados = document.getElementById('resultados')

calcular.addEventListener('click', (event) => {
  event.preventDefault()
  resultados.classList.remove('hidden')
  let trElement = document.createElement('tr')
  let tdMateria = document.createElement('td')
  let tdMediaPrimeiroBimestre = document.createElement('td')
  let tdMediaSegundoBimestre = document.createElement('td')
  let tdMediaTerceiroBimestre = document.createElement('td')
  let tdMediaQuartoBimestre = document.createElement('td')
  let tdMediaFinal = document.createElement('td')
  let tdResultado = document.createElement('td')
  let tdObservacao = document.createElement('td')
  tbody.appendChild(trElement)
  trElement.appendChild(tdMateria)
  trElement.appendChild(tdMediaPrimeiroBimestre)
  trElement.appendChild(tdMediaSegundoBimestre)
  trElement.appendChild(tdMediaTerceiroBimestre)
  trElement.appendChild(tdMediaQuartoBimestre)
  trElement.appendChild(tdMediaFinal)
  trElement.appendChild(tdResultado)
  trElement.appendChild(tdObservacao)

  tdMateria.innerHTML = materia.value
  tdMediaPrimeiroBimestre.innerHTML = mediaPrimeiroBimestre.value
  tdMediaSegundoBimestre.innerHTML = mediaSegundoBimestre.value
  tdMediaTerceiroBimestre.innerHTML = mediaTerceiroBimestre.value
  tdMediaQuartoBimestre.innerHTML = mediaQuartoBimestre.value
  tdMediaFinal.innerHTML = calcularMedia(
    parseFloat(mediaPrimeiroBimestre.value),
    parseFloat(mediaSegundoBimestre.value),
    parseFloat(mediaTerceiroBimestre.value),
    parseFloat(mediaQuartoBimestre.value)
  )
  tdResultado.innerHTML = verificarResultado(tdMediaFinal.textContent)
  tdObservacao.innerHTML = temObservacao(
    tdResultado.textContent,
    tdMediaFinal.textContent
  )
})

function calcularMedia(num1, num2, num3, num4) {
  return ((num1 + num2 + num3 + num4) / 4).toFixed(2)
}

function verificarResultado(mediaFinal) {
  mediaFinal = parseFloat(mediaFinal)
  if (mediaFinal < 6) {
    return 'Reprovado'
  } else {
    return 'Aprovado'
  }
}

function temObservacao(texto, mediaFinal) {
  if (texto === 'Reprovado') {
    mediaFinal = parseFloat(mediaFinal)
    if (mediaFinal < 4) {
      return 'Recuperação'
    } else {
      return 'Prova Final'
    }
  } else {
    return ' ---- '
  }
}
