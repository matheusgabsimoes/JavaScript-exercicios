let resultado = '';
let computadorEscolha = '';
let placar = JSON.parse(localStorage.getItem('placar')) || {
      vitorias: 0,
      derrotas: 0,
      empates: 0
   };

   // if (!placar) {
   //    placar= {
   //       vitorias: 0,
   //       derrotas: 0,
   //       empates: 0
   //    }
   // };

function resetarPlacar() {
   placar.vitorias = 0;
   placar.derrotas = 0;
   placar.empates = 0;
   alert(`Placar resetado! 
Vitórias: ${placar.vitorias}, Derrotas: ${placar.derrotas}, Empates: ${placar.empates}`);
}

function randomEscolha() {
   const escolhas = ['Pedra', 'Papel', 'Tesoura'];
   const numeroRandomico = Math.floor(Math.random() * 3);
   computadorEscolha = escolhas[numeroRandomico];
}

function armazenarResultado(resultado) {
   if (resultado === 'Você venceu!') {
      placar.vitorias++;
   } else if (resultado === 'Você perdeu!') {
      placar.derrotas++;
   } else if (resultado === 'Empate') {
      placar.empates++;
   }
}

function calcularResultado(pessoaResultadoEscolha) {
   const resultados = {
      Pedra: { Pedra: 'Empate', Papel: 'Você perdeu!', Tesoura: 'Você venceu!' },
      Papel: { Pedra: 'Você venceu!', Papel: 'Empate', Tesoura: 'Você perdeu!' },
      Tesoura: { Pedra: 'Você perdeu!', Papel: 'Você venceu!', Tesoura: 'Empate' }
   };
   
   resultado = resultados[pessoaResultadoEscolha][computadorEscolha];
   
   armazenarResultado(resultado);
   
   alert(`Você escolheu ${pessoaResultadoEscolha}. Computador escolheu ${computadorEscolha}. 
${resultado}
Vitórias: ${placar.vitorias}, Derrotas: ${placar.derrotas}, Empates: ${placar.empates}`);
}

localStorage.setItem('resultado', JSON.stringify(resultado));