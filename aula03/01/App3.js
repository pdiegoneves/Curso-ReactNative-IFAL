let pessoa = {
    nome: 'icaro',
    idade: 25,
    cargo: 'professor'
}

let novaPessoa = {
    ...pessoa,
    cidade: 'maceio',
    telefone: '-190-0390-19213-0'
}

console.log(pessoa, novaPessoa)