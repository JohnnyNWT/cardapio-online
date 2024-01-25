const abrirCarrinho = (abrir) => {
  const getElement = document.querySelector('#modalCarrinho');

  if (abrir) {
    getElement.classList.remove('hidden');
  }
  else {
    getElement.classList.add('hidden');
  }
};

export default abrirCarrinho;