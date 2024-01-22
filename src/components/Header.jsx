import React, { Component } from 'react';
import Logo from '../img/logo.png';
import '../css/bootstrap.min.css';
import '../css/fontawesome.css';

class Header extends Component {
  render() {
    const { qntdItensCarrinho } = this.props;

    return (
      <section>
        <div className="container">
          <nav className="navbar navbar-expand-lg pl-0 pr-0">
            <a className="navbar-brand">
              <img src={Logo} width="160" className="img-logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
              <span className="navbar-toggler-icon">
                <i className="fas fa-bars"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto mr-auto wow fadeIn">
                <li className="nav-item">
                  <a href="#servicos" className="nav-link"><b>Serviços</b></a>
                </li>
                <li className="nav-item">
                  <a href="#cardapio" className="nav-link"><b>Cardápio</b></a>
                </li>
                <li className="nav-item">
                  <a href="#depoimentos" className="nav-link"><b>Depoimentos</b></a>
                </li>
              </ul>
              <a className="btn btn-white btn-icon wow fadeIn">
                Meu carrinho <span className="icon">
                  <div className="container-total-carrinho badge-total-carrinho">{qntdItensCarrinho}</div>
                  <i className="fa fa-shopping-bag"></i>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

export default Header;