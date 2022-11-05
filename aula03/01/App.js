let pessoa = {
    nome: 'icaro',
    sobrenome: 'ferreira',
    empresa: 'Ifal',
    cargo: 'professor'
}

const {nome, sobrenome} = pessoa 
const {nome: nomeDaNovaPessoa, pessoa} = pessoa
let nomes = ['icaro', 'ifal', 'ferreira']

let {0:icaro} = nomes

/