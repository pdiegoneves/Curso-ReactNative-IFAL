function sorteador (...numeros) {

console.log(numeros)

const numeroGerado = Math.floor(Math.random() * numeros.length)

console.log('O seu numero gerado foi: ' + numeros[numeroGerado])
}
sorteador(1,3,5,66,77,33,14,87,90)