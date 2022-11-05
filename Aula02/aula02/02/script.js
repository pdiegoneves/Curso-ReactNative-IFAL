// DATAS
var data = new Date()

data.getHours()
data.getDay()
data.getMonth()
data.getYear()

var dataNova = new Date('março 10, 2015')

// FORMATAÇÂO DE DATAS

dataFormatada = `${dataNova.getDate()}/${
  dataNova.getMonth() + 1
}/${dataNova.getFullYear()} `

// SELECIONAR DATA IDEAL
dataNova.setDate(dataNova.getDate() + 10)

//Para sair de milesegundos e ir para data
var dias = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sabado',
]

dias[dataNova.getDay()]
