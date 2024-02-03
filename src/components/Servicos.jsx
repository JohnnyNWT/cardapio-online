import React, { Component, createRef } from 'react';
import Delivery from '../img/icone-delivery.svg';
import Pedido from '../img/icone-pedido.svg';
import Qualidade from '../img/icone-qualidade.svg';

class Servicos extends Component {
  constructor(props) {
    super(props);
    this.servicosRef = createRef();
    this.infoServicoRef1 = createRef();
    this.infoServicoRef2 = createRef();
    this.infoServicoRef3 = createRef();
  }

  componentDidMount() {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('element-show');
        } else {
          entry.target.classList.remove('element-show');
        }
      })
    });

    if (this.servicosRef.current) {
      intersectionObserver.observe(this.servicosRef.current);
    }

    if (this.infoServicoRef1.current) {
      intersectionObserver.observe(this.infoServicoRef1.current);
    }

    if (this.infoServicoRef2.current) {
      intersectionObserver.observe(this.infoServicoRef2.current);
    }

    if (this.infoServicoRef3.current) {
      intersectionObserver.observe(this.infoServicoRef3.current);
    }
  }

  render() {
    return (
      <section className="servicos" id="servicos">
        <div className="background-servicos"></div>
        <div className="container">
          <div className="row">

            <div ref={this.servicosRef} className="col-12 col-one text-center mb-5 element-hidden">
              <span className="hint-title"><b>Serviços</b></span>
              <h1 className="title">
                <b>Como são nossos serviços?</b>
              </h1>
            </div>

              <div ref={this.infoServicoRef1} className="col-12 col-lg-4 col-md-4 col-sm-12 col-one mb-5 element-hidden">
                <div className="card-icon text-center">
                  <img src={ Pedido } width="150" />
                </div>
                <div className="card-text text-center mt-3">
                  <p><b>Fácil de pedir</b></p>
                  <span>
                    Você só precisa de alguns passos para pedir sua comida.
                  </span>
                </div>
              </div>

              <div ref={this.infoServicoRef2} className="col-12 col-lg-4 col-md-4 col-sm-12 col-one mb-5 element-hidden">
                <div className="card-icon text-center">
                  <img src={ Delivery } width="250" />
                </div>
                <div className="card-text text-center mt-3">
                  <p><b>Entrega rápida</b></p>
                  <span>
                    Nossa entrega é sempre pontual, rápida e segura.
                  </span>
                </div>
              </div>

              <div ref={this.infoServicoRef3} className="col-12 col-lg-4 col-md-4 col-sm-12 col-one mb-5 element-hidden">
                <div className="card-icon text-center">
                  <img src={ Qualidade } width="250" />
                </div>
                <div className="card-text text-center mt-3">
                  <p><b>Melhor qualidade</b></p>
                  <span>
                    Não só a rapidez na entrega, a qualidade também é o nosso forte.
                  </span>
                </div>
              </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Servicos;
