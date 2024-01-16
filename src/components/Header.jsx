import React, { Component } from 'react';
import Logo from '../img/logo.png';
import '../css/bootstrap.min.css';
import '../css/fontawesome.css';

class Header extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <nav className="navbar navbar-expand-lg pl-0 pr-0">
            <a className="navbar-brand">
              <img src={ Logo } width="160" className="img-logo" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
              <span class="navbar-toggler-icon">
                <i class="fas fa-bars"></i>
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav ml-auto mr-auto wow fadeIn">
                <li class="nav-item">
                  <a href="#reservas" class="nav-link"><b>Reservas</b></a>
                </li>
                <li class="nav-item">
                  <a href="#servicos" class="nav-link"><b>Serviços</b></a>
                </li>
                <li class="nav-item">
                  <a href="#cardapio" class="nav-link"><b>Cardápio</b></a>
                </li>
                <li class="nav-item">
                  <a href="#depoimentos" class="nav-link"><b>Depoimentos</b></a>
                </li>
              </ul>
              <a class="btn btn-white btn-icon wow fadeIn" onclick={''}>
                Meu carrinho <span class="icon">
                  <div class="container-total-carrinho badge-total-carrinho hidden"></div>
                  <i class="fa fa-shopping-bag"></i>
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