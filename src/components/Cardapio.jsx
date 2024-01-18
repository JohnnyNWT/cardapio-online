import React, { Component } from 'react';
import imgproduto from '../img/cardapio/burguers/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg';

class Cardapio extends Component {
  render() {
    return (
      <section className="cardapio" id="cardapio">
        <div className="background-cardapio"></div>

        <div className="container">
          <div className="row">

            <div className="col-12 col-one text-center mb-5 wow fadeIn">
              <span className="hint-title"><b>Cardápio</b></span>
              <h1 className="title">
                <b>Conheça o nosso cardápio</b>
              </h1>
            </div>

            <div className="col-12 col-one container-menu wow fadeInUp">
              <a id="menu-burgers" className="btn btn-white btn-sm mr-3 active"
                onclick="cardapio.metodos.obterItensCardapio('burgers')">
                <i className="fas fa-hamburger"></i>&nbsp; Burgers
              </a>
              <a id="menu-pizzas" className="btn btn-white btn-sm mr-3" onclick="cardapio.metodos.obterItensCardapio('pizzas')">
                <i className="fas fa-pizza-slice"></i>&nbsp; Pizzas
              </a>
              <a id="menu-churrasco" className="btn btn-white btn-sm mr-3"
                onclick="cardapio.metodos.obterItensCardapio('churrasco')">
                <i className="fas fa-drumstick-bite"></i>&nbsp; Churrasco
              </a>
              <a id="menu-steaks" className="btn btn-white btn-sm mr-3" onclick="cardapio.metodos.obterItensCardapio('steaks')">
                <i className="fas fa-bacon"></i>&nbsp; Steaks
              </a>
              <a id="menu-bebidas" className="btn btn-white btn-sm mr-3"
                onclick="cardapio.metodos.obterItensCardapio('bebidas')">
                <i className="fas fa-cocktail"></i>&nbsp; Bebidas
              </a>
              <a id="menu-sobremesas" className="btn btn-white btn-sm mr-3"
                onclick="cardapio.metodos.obterItensCardapio('sobremesas')">
                <i className="fas fa-ice-cream"></i>&nbsp; Sobremesas
              </a>
            </div>

            <div className="col-12 col-one">
              <div className="row" id="itensCardapio">

                <div className="col-3">
                  <div className="card card-item">
                    <div className="img-produto">
                      <img src={imgproduto} />
                    </div>
                    <p className="title-produto text-center mt-4">
                      <b>Nome</b>
                    </p>
                    <p className="price-produto text-center">
                      <b>R$ 150,00</b>
                    </p>
                    <div className="add-carrinho">
                      <span className="btn-menos"><i className="fas fa-minus"></i></span>
                      <span className="add-numero-itens">0</span>
                      <span className="btn-mais"><i className="fas fa-plus"></i></span>
                      <span className="btn btn-add"><i className="fa fa-shopping-bag"></i></span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-12 col-one text-center wow fadeInUp">
              <a id="btnVerMais" className="btn btn-white btn-sm" onclick="cardapio.metodos.verMais()">
                Ver mais
              </a>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Cardapio;
