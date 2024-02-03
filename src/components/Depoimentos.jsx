import React, { Component, createRef } from 'react';
import imgPizza from '../img/pizzas.png';

class Depoimentos extends Component {
  constructor(props) {
    super(props);
    this.bannerRef = createRef();
    this.depoimentoRef1 = createRef();
    this.depoimentoRef2 = createRef();
    this.depoimentoRef3 = createRef();
    this.txtDepoimentoRef = createRef();
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

    if (this.bannerRef.current) {
      intersectionObserver.observe(this.bannerRef.current);
    }

    if (this.depoimentoRef1.current) {
      intersectionObserver.observe(this.depoimentoRef1.current);
    }

    if (this.depoimentoRef2.current) {
      intersectionObserver.observe(this.depoimentoRef2.current);
    }

    if (this.depoimentoRef3.current) {
      intersectionObserver.observe(this.depoimentoRef3.current);
    }

    if (this.txtDepoimentoRef.current) {
      intersectionObserver.observe(this.txtDepoimentoRef.current);
    }
  }

  handleClickDepoimentos = (event) => {
    const numberDepoimento = event.target.textContent;
    const getBtnSocial = document.querySelectorAll(".btn-social");
    const getDepoimentos = document.querySelectorAll('.depoimento');
    const getDepoimentoRemoveHidden = document.getElementById(`depoimento-${numberDepoimento}`);

    getBtnSocial.forEach((e) => e.classList.remove('active'));
    event.target.classList.add('active');

    getDepoimentos.forEach((e) => e.classList.add('hidden'));
    getDepoimentoRemoveHidden.classList.remove('hidden');
  }

  render() {
    return (
      <section className="depoimentos" id="depoimentos">
        <div className="background-depoimentos"></div>

        <div className="container">
          <div className="row">

            <div ref={this.bannerRef} className="col-5 no-mobile text-center text-banner-hidden">
              <div className="card-depoimentos wow fadeIn"></div>
              <div className="d-flex img-banner wow fadeInLeft delay-02s">
                <img src={ imgPizza } alt="" />
              </div>
            </div>

            <div ref={this.txtDepoimentoRef} className="col-12 col-lg-7 col-md-7 col-sm-12 col-one element-hidden">
              <span className="hint-title wow fadeIn"><b>Depoimentos</b></span>
              <h1 className="title wow fadeIn">
                <b>O que dizem sobre nós?</b>
              </h1>
              <div className="mb-5">

                <div ref={this.depoimentoRef1} className="depoimento card-banner-hidden" id="depoimento-1">
                  <div className="container-dados-depoimento">
                    <div className="imagem-depoimento"></div>
                    <div>
                      <p className="nome-depoimento"><b>Diego Pereira</b></p>
                      <p className="nota-depoimento">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>&nbsp; <span>4.5</span>
                      </p>
                    </div>
                  </div>
                  <p className="texto-depoimento">
                    <i className="fas fa-quote-left"></i>
                    <span>
                      Muito bom, recomendo demais! Comida muito bem feita pelo chefe,
                      atendimento dentro dos parâmetros e boa comunicação com o cliente.
                    </span>
                    <i className="fas fa-quote-right"></i>
                  </p>
                </div>

                <div ref={this.depoimentoRef2} className="depoimento hidden card-banner-hidden" id="depoimento-2">
                  <div className="container-dados-depoimento">
                    <div className="imagem-depoimento"></div>
                    <div>
                      <p className="nome-depoimento"><b>Ana Beatriz</b></p>
                      <p className="nota-depoimento">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>&nbsp; <span>5.0</span>
                      </p>
                    </div>
                  </div>
                  <p className="texto-depoimento">
                    <i className="fas fa-quote-left"></i>
                    <span>
                      Um jantar perfeito do começo ao fim. Comida, experiência, serviço...
                      foi tão maravilhoso que fomos dois dias seguidos - fato inédito para mim em uma viagem.
                    </span>
                    <i className="fas fa-quote-right"></i>
                  </p>
                </div>

                <div ref={this.depoimentoRef3} className="depoimento hidden card-banner-hidden" id="depoimento-3">
                  <div className="container-dados-depoimento">
                    <div className="imagem-depoimento"></div>
                    <div>
                      <p className="nome-depoimento"><b>João Guilherme</b></p>
                      <p className="nota-depoimento">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>&nbsp; <span>4.0</span>
                      </p>
                    </div>
                  </div>
                  <p className="texto-depoimento">
                    <i className="fas fa-quote-left"></i>
                    <span>
                      A comida estava excelente e o serviço gentil nos surpreendeu!
                      Dica: reserve umas 3 horas para ter uma experiência incrível.
                    </span>
                    <i className="fas fa-quote-right"></i>
                  </p>
                </div>

              </div>

              <a id="btnDepoimento-1" className="btn btn-sm btn-white btn-social wow fadeIn mr-3 active"
                onClick={this.handleClickDepoimentos}>1</a>
              <a id="btnDepoimento-2" className="btn btn-sm btn-white btn-social wow fadeIn mr-3"
                onClick={this.handleClickDepoimentos}>2</a>
              <a id="btnDepoimento-3" className="btn btn-sm btn-white btn-social wow fadeIn"
                onClick={this.handleClickDepoimentos}>3</a>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Depoimentos;
