let carrinhoQuantidade = 0;
const carrinhoMaxQuantidade = 10;

function adicionarNoCarrinho(quantidade) {
   if (carrinhoQuantidade + quantidade > carrinhoMaxQuantidade) {
      alert('O carrinho está cheio');
   } else {
      carrinhoQuantidade += quantidade;
      console.log(`Quantidade no carrinho: ${carrinhoQuantidade}`);
   }
}

function removerDoCarrinho(quantidade) {
   if (carrinhoQuantidade - quantidade < 0) {
      alert('O carrinho já está vazio');
   } else {
      carrinhoQuantidade -= quantidade;
      console.log(`Quantidade no carrinho: ${carrinhoQuantidade}`);
   }
}

function limparCarrinho() {
   carrinhoQuantidade = 0;
   console.log('Carrinho de compras foi limpo');
   console.log(`Quantidade no carrinho: ${carrinhoQuantidade}`);
}
