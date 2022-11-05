let produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado']
produtos.map((produto) => console.log(produto))

console.log('Quantidade:', produtos.length)
produtos.splice(produtos.indexOf('Mouse'), 1)
console.log('Nova Lista', produtos)

const botaoBuscar = document.getElementById('buscar-produto')

function buscarProduto() {
  let produto = prompt('Qual produto quer buscar?')
  let indice = produtos.indexOf(produto)
  if (indice) {
    console.info('Produto Existe')
  } else {
    console.error('Produto não existe')
  }
}
