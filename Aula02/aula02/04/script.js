pessoa = {
  nome: 'icaro',
  idade: 25,
  altura: 1.73,
  cargo: 'professor',
}
pessoa.nome

let carro = {
  modelos: 'chevet',
  potencia: '100000cv',
  cor: 'prata',
}

let usuarios = [
  { nome: 'kate', cargo: 'programadora', situcao: 'ativo' },
  { nome: 'icaro', cargo: 'professor', situcao: 'ativo' },
  { nome: 'danilo', cargo: 'gerente', situcao: 'ativo' },
]

//template string

let nome = 'icaro'
let sobrenome = 'ferreira'
let idade = 25

let mensagem = `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos de idade`

console.log(mensagem)
