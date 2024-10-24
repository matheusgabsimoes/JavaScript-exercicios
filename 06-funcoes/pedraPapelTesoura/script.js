let resultado = '';
let computadorEscolha = '';

function randomComputadorEscolha() {
   const numeroRandomico = Math.random();
   if (numeroRandomico >= 0 && numeroRandomico < 1 / 3) {
      computadorEscolha = 'Pedra';
   } else if (numeroRandomico >= 1 / 3  && numeroRandomico < 2 / 3) {
      computadorEscolha = 'Papel';
   } else if (numeroRandomico >= 2 / 3  && numeroRandomico < 1) {
      computadorEscolha = 'Tesoura';
   }
}

function randomResultado(pessoaResultadoEscolha) {
   if (pessoaResultadoEscolha === 'Pedra') {
      if (computadorEscolha === 'Pedra') {
         resultado = 'Empate';
      } else if (computadorEscolha === 'Papel') {
         resultado = 'Você perdeu!';
      } else if (computadorEscolha === 'Tesoura') {
         resultado = 'Você venceu!';
      }
   } else if (pessoaResultadoEscolha === 'Papel') {
      if (computadorEscolha === 'Papel') {
         resultado = 'Empate';
      } else if (computadorEscolha === 'Tesoura') {
         resultado = 'Você perdeu!';
      } else if (computadorEscolha === 'Pedra') {
         resultado = 'Você venceu!';
      }
   } else if (pessoaResultadoEscolha === 'Tesoura') {
      if (computadorEscolha === 'Tesoura') {
         resultado = 'Empate';
      } else if (computadorEscolha === 'Pedra') {
         resultado = 'Você perdeu!';
      } else if (computadorEscolha === 'Papel') {
         resultado = 'Você venceu!';
      }
   }
      alert(`Você escolheu ${pessoaResultadoEscolha}. Computador escolheu ${computadorEscolha}. ${resultado}`);
}
