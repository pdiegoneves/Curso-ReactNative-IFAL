//Spread perator

let primeiros = [1,2,3]
let ultimos = [4,5,6]

let numeros = [...primeiros, ...ultimos]

console.log(numeros)

let pessoa = {
    nome: 'teste',
    sobrenome: 'silva'
}

let pessoa2 = {...pessoa}
pessoa2.nome = 'teste1'

let pessoa3 = pessoa
pessoa3.nome = 'teste3'
console.log(pessoa, pessoa2, pessoa3)