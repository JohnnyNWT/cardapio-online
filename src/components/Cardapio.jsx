import React, { Component, createRef } from 'react';
import MENU from '../utils/dados';
import carrinho from '../utils/carrinho';
import { QntdItensCarrinho } from '../context/QntdItensCarrinho';

class Cardapio extends Component {
  constructor(props) {
    super(props);

    this.cardapioRef = createRef();
    this.categoriaRef = createRef();
  }

  static contextType = QntdItensCarrinho;

  state = {
    categoriaItemCardapio: 'burgers',
    arrCategoriaCardapio: MENU['burgers'],
    itensExibidos: 8,
  };

  componentDidMount() {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('element-show');
        } else {
          entry.target.classList.remove('element-show');
        }
      });
    });

    if (this.cardapioRef.current) {
      intersectionObserver.observe(this.cardapioRef.current);
    }

    if (this.categoriaRef.current) {
      intersectionObserver.observe(this.categoriaRef.current);
    }
  };

  componentDidUpdate() {
    this.atualizarCarrinho();
  }

  handleClickRenderCardapio = (event) => {
    const categoria = event.target.id.split('-')[1];

    const elements = document.querySelectorAll('.container-menu a');

    elements.forEach((element) => element.classList.remove('active'))

    document.getElementById(`menu-${categoria}`).classList.add('active');

    this.setState({
      categoriaItemCardapio: categoria,
      arrCategoriaCardapio: MENU[categoria],
      itensExibidos: 8,
    });
  };

  handleClickVerMais = () => {
    this.setState((prevState) => ({
      itensExibidos: prevState.itensExibidos + 4,
    }));
  };

  handleClickDiminuirQuantidade = (id) => {
    const getElement = document.getElementById(`qntd-${id}`);
    if (getElement.textContent > 0) {
      const qntdAtual = parseInt(getElement.textContent) - 1;
      return getElement.textContent = qntdAtual;
    }
  };

  handleClickAumentarQuantidade = (id) => {
    const getElement = document.getElementById(`qntd-${id}`);
    const qntdAtual = parseInt(getElement.textContent) + 1;
    getElement.textContent = qntdAtual;
  };

  handleClickAddCarrinho = (id) => {
    const { arrCategoriaCardapio } = this.state;
    const { meuCarrinho, setMeuCarrinho } = this.context;
    const quantidade = parseInt(document.getElementById(`qntd-${id}`).textContent);

    if (quantidade > 0) {
      const novoItem = arrCategoriaCardapio.find((e) => e.id === id);
      const existe = meuCarrinho.find((e) => e.id === id);

      if (!existe) {
        setMeuCarrinho([...meuCarrinho, { ...novoItem, quantidade }]);
      } else {
        setMeuCarrinho(meuCarrinho.map((e) => e.id === id ? { ...e, quantidade: e.quantidade + quantidade } : e));
      }
      carrinho.mensagem('Item adicionado ao carrinho', 'green');
      document.getElementById(`qntd-${id}`).textContent = 0;
    };
  };

  atualizarCarrinho = () => {
    const { setQntdItens, meuCarrinho } = this.context;

    if (meuCarrinho.length > 0) {
      document.querySelector('.botao-carrinho').classList.remove('hidden');
    } else {
      document.querySelector('.botao-carrinho').classList.add('hidden');
    }

    let total = 0;
    meuCarrinho.forEach((e) => total += e.quantidade);
    setQntdItens(total);
  };

  render() {
    const { arrCategoriaCardapio, itensExibidos } = this.state;
    const { qntdItens } = this.context;
    const itensExibidosAtualizados = arrCategoriaCardapio.slice(0, itensExibidos);
    const mostrarBotaoVerMais = itensExibidos < arrCategoriaCardapio.length;
    return (
      <>
        <div class="container-mensagens" id="container-mensagens">
        </div>

        <a className="botao-carrinho animated bounceIn hidden" onClick={() => carrinho.abrirCarrinho(true)}>
          <div className="badge-total-carrinho">{qntdItens}</div>
          <i className="fa fa-shopping-bag"></i>
        </a>
        <section className="cardapio" id="cardapio">
          <div className="background-cardapio"></div>
          <div className="container">
            <div className="row">

              <div ref={this.cardapioRef} className="col-12 col-one text-center mb-5 element-hidden">
                <span className="hint-title"><b>Cardápio</b></span>
                <h1 className="title">
                  <b>Conheça o nosso cardápio</b>
                </h1>
              </div>

              <div ref={this.categoriaRef} className="col-12 col-one container-menu element-hidden">
                <a id="menu-burgers" className="btn btn-white btn-sm mr-3 active" onClick={this.handleClickRenderCardapio}>
                  <i id="menu-burgers" className="fas fa-hamburger"></i>&nbsp; Burgers
                </a>
                <a id="menu-pizzas" className="btn btn-white btn-sm mr-3" onClick={this.handleClickRenderCardapio}>
                  <i id="menu-pizzas" className="fas fa-pizza-slice"></i>&nbsp; Pizzas
                </a>
                <a id="menu-churrasco" className="btn btn-white btn-sm mr-3"
                  onClick={this.handleClickRenderCardapio}>
                  <i id="menu-churrasco" className="fas fa-drumstick-bite"></i>&nbsp; Churrasco
                </a>
                <a id="menu-steaks" className="btn btn-white btn-sm mr-3" onClick={this.handleClickRenderCardapio}>
                  <i id="menu-steaks" className="fas fa-bacon"></i>&nbsp; Steaks
                </a>
                <a id="menu-bebidas" className="btn btn-white btn-sm mr-3"
                  onClick={this.handleClickRenderCardapio}>
                  <i id="menu-bebidas" className="fas fa-cocktail"></i>&nbsp; Bebidas
                </a>
                <a id="menu-sobremesas" className="btn btn-white btn-sm mr-3"
                  onClick={this.handleClickRenderCardapio}>
                  <i id="menu-sobremesas" className="fas fa-ice-cream"></i>&nbsp; Sobremesas
                </a>
              </div>

              <div className="col-12 col-one">
                <div className="row" id="itensCardapio">
                  {
                    itensExibidosAtualizados.map(({ id, img, name, price }, _index) => (
                      <div className="col-12 col-lg-3 col-md-3 col-sm-6 mb-5" key={id}>
                        <div className="card card-item">
                          <div className="img-produto">
                            <img src={img} />
                          </div>
                          <p className="title-produto text-center mt-4">
                            <b>{name}</b>
                          </p>
                          <p className="price-produto text-center">
                            <b>R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b>
                          </p>
                          <div className="add-carrinho">
                            <span className="btn-menos" onClick={() => this.handleClickDiminuirQuantidade(id)}><i className="fas fa-minus"></i></span>
                            <span className="add-numero-itens" id={`qntd-${id}`}>0</span>
                            <span className="btn-mais" onClick={() => this.handleClickAumentarQuantidade(id)}><i className="fas fa-plus"></i></span>
                            <span className="btn btn-add" onClick={() => this.handleClickAddCarrinho(id)}><i className="fa fa-shopping-bag"></i></span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>

              <div className={`col-12 col-one text-center ${mostrarBotaoVerMais ? '' : 'hidden'}`}>
                <a id="btnVerMais" className="btn btn-white btn-sm" onClick={this.handleClickVerMais}>
                  Ver mais
                </a>
              </div>

            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Cardapio;
