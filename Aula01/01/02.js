let preco = 70
if (preco > 100) {
  console.log('Desconto de 10% liberado. Preço Final:', preco * 0.9)
} else if (preco > 50) {
  console.log('Desconto de 5% liberado. Preço Final:', preco * 0.95)
} else {
  console.log('Nenhum desconto foi liberado')
}
