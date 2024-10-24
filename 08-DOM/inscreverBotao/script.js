function inscreverSe() {
   const elementoBotao = document.querySelector('.inscreverBotao');

   let inscricao = (elementoBotao.innerText === 'Inscrever-se') ? "Inscrito":"Inscrever-se";

   elementoBotao.innerText = inscricao; 

   // if (elementoBotao.innerText === 'Inscrever-se') {
   //    elementoBotao.innerHTML = 'Inscrito';
   // } else {
   //    elementoBotao.innerHTML = 'Inscrever-se';
   // }
}