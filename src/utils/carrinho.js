const carregarEtapa = (etapa) => {
  switch (etapa) {
   case 1:
    document.querySelector('#lblTituloEtapa').textContent = 'Seu carrinho:';

    document.querySelector('#itensCarrinho').classList.remove('hidden');
    document.querySelector('#localEntrega').classList.add('hidden');
    document.querySelector('#resumoCarrinho').classList.add('hidden');

    document.querySelectorAll('.etapa').forEach(element => element.classList.remove('active'));
    document.querySelector('.etapa1').classList.add('active');

    document.querySelector('#btnEtapaPedido').classList.remove('hidden');
    document.querySelector('#btnEtapaEndereco').classList.add('hidden');
    document.querySelector('#btnEtapaResumo').classList.add('hidden');
    document.querySelector('#btnVoltar').classList.add('hidden');

   break;

   case 2:
    document.querySelector('#lblTituloEtapa').textContent = 'Endereço de entrega:';

    document.querySelector('#localEntrega').classList.remove('hidden');
    document.querySelector('#resumoCarrinho').classList.add('hidden');
    document.querySelector('#itensCarrinho').classList.add('hidden');

    document.querySelectorAll('.etapa').forEach(element => element.classList.remove('active'));
    document.querySelector('.etapa1').classList.add('active');
    document.querySelector('.etapa2').classList.add('active');

    document.querySelector('#btnEtapaPedido').classList.add('hidden');
    document.querySelector('#btnEtapaEndereco').classList.remove('hidden');
    document.querySelector('#btnEtapaResumo').classList.add('hidden');
    document.querySelector('#btnVoltar').classList.remove('hidden');
   break;

   case 3:
    document.querySelector('#lblTituloEtapa').textContent = 'Resumo do pedido:';

    document.querySelector('#resumoCarrinho').classList.remove('hidden');
    document.querySelector('#itensCarrinho').classList.add('hidden');
    document.querySelector('#localEntrega').classList.add('hidden');

    document.querySelectorAll('.etapa').forEach(element => element.classList.remove('active'));
    document.querySelector('.etapa1').classList.add('active');
    document.querySelector('.etapa2').classList.add('active');
    document.querySelector('.etapa3').classList.add('active');

    document.querySelector('#btnEtapaPedido').classList.add('hidden');
    document.querySelector('#btnEtapaEndereco').classList.add('hidden');
    document.querySelector('#btnEtapaResumo').classList.remove('hidden');
    document.querySelector('#btnVoltar').classList.remove('hidden');

   break;

   case 'Voltar':
    const etapa = document.querySelectorAll(".etapa.active").length;
      carregarEtapa(etapa - 1);
    break;
 
   default:
    document.querySelector('#lblTituloEtapa').textContent = 'Seu carrinho:';

    document.querySelector('#itensCarrinho').classList.remove('hidden');
    document.querySelector('#localEntrega').classList.add('hidden');
    document.querySelector('#resumoCarrinho').classList.add('hidden');
    
    document.querySelector('.etapa1').classList.add('active');

    document.querySelector('#btnEtapaPedido').classList.remove('hidden');
    document.querySelector('#btnEtapaEndereco').classList.add('hidden');
    document.querySelector('#btnEtapaResumo').classList.add('hidden');
    document.querySelector('#btnVoltar').classList.add('hidden');
  }
 };

const abrirCarrinho = (abrir) => {
  const getElement = document.querySelector('#modalCarrinho');
  if (abrir) {
    getElement.classList.remove('hidden');
    carregarEtapa(1)
  }
  else {
    getElement.classList.add('hidden');
  }
};

export default { abrirCarrinho, carregarEtapa };