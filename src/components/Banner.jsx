import React, { Component } from 'react';
import BannerIMG from '../img/burguer.png';
import '../css/bootstrap.min.css';

class Banner extends Component {
  state = {
    celularEmpresa: '5581998902308'
  }
  render() {
    const { celularEmpresa } = this.state;
    return (
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-one">
              <div className="d-flex text-banner">
                <h1 className="wow fadeInLeft"><b>Escolha sua comida <b className="color-primary">favorita.</b></b></h1>
                <p className="wow fadeInLeft delay-02s">
                  Aproveite nosso cardápio! Escolha o que desejar e receba em sua casa de forma rápida e segura.
                </p>
                <div className="wow fadeIn delay-05s">
                  <a className="btn btn-yellow mt-4 mr-3">
                    Ver cardápio
                  </a>
                  <a href={`tel:${celularEmpresa}`} className="btn btn-white btn-icon-left mt-4" id="btnLigar">
                    <span className="icon-left">
                      <i className="fa fa-phone"></i>
                    </span>
                    (81) 4002-8922
                  </a>
                </div>
              </div>
              <a href="https://www.instagram.com/johnnynwt/" target="_blank" className="btn btn-sm btn-white btn-social mt-4 mr-3 wow fadeIn delay-05s">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-sm btn-white btn-social mt-4 mr-3 wow fadeIn delay-05s">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-sm btn-white btn-social mt-4 wow fadeIn delay-05s">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>

            <div className="col-6 no-mobile">
              <div className="card-banner wow fadeIn delay-02s"></div>
              <div className="d-flex img-banner wow fadeIn delay-05s">
                <img src={ BannerIMG } alt='' />
              </div>
              <div className="card card-case wow fadeInRight delay-07s">
                "Entrega rápida e funcionários simpáticos.
                <br/>A comida chegou quente e <br/>
                  muito saborosa!"
                  <span className="card-case-name">
                    <b>Thiago Lopes</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default Banner;
