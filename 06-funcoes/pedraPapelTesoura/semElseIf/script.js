let resultado = '';
let computadorEscolha = '';

function randomEscolha() {
   const escolhas = ['Pedra', 'Papel', 'Tesoura'];
   const numeroRandomico = Math.floor(Math.random() * 3);
   computadorEscolha = escolhas[numeroRandomico];
}

function calcularResultado(pessoaResultadoEscolha) {
   const resultados = {
      Pedra: { Pedra: 'Empate', Papel: 'Você perdeu!', Tesoura: 'Você venceu!' },
      Papel: { Pedra: 'Você venceu!', Papel: 'Empate', Tesoura: 'Você perdeu!' },
      Tesoura: { Pedra: 'Você perdeu!', Papel: 'Você venceu!', Tesoura: 'Empate' }
   };

   resultado = resultados[pessoaResultadoEscolha][computadorEscolha];
   
   alert(`Você escolheu ${pessoaResultadoEscolha}. Computador escolheu ${computadorEscolha}. ${resultado}`);
}