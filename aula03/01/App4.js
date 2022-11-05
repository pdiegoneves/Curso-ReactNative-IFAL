function novoUsuario (info) {
    let dados = {
        ...info,
        inicio: '20/08/2022',
        codigodeacesso: '2589865'
    }
}

novoUsuario({nome: 'joao', sobrenome: 'da silva', cargo: 'eletricista'})

console.log(novoUsuario)