import React, { Component, createRef } from 'react';
import BannerIMG from '../img/burguer.png';
import '../css/bootstrap.min.css';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.textBannerRef = createRef();
    this.btnSocialRef = createRef();
    this.cardBannerRef = createRef();
  }

  state = {
    celularEmpresa: '5581998902308'
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

    if (this.textBannerRef.current) {
      intersectionObserver.observe(this.textBannerRef.current);
    }

    if (this.btnSocialRef.current) {
      intersectionObserver.observe(this.btnSocialRef.current);
    }

    if (this.cardBannerRef.current) {
      intersectionObserver.observe(this.cardBannerRef.current);
    }
  }

  render() {
    const { celularEmpresa } = this.state;
    return (
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-one">
              <div id="textBanner" ref={this.textBannerRef} className="d-flex text-banner text-banner-hidden">
                <h1><b>Escolha sua comida <b className="color-primary">favorita.</b></b></h1>
                <p>
                  Aproveite nosso cardápio! Escolha o que desejar e receba em sua casa de forma rápida e segura.
                </p>
                <div>
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
              <div id="textBanner" className="text-banner-hidden" ref={this.btnSocialRef}>
                <a href="https://www.instagram.com/johnnynwt/" target="_blank" className="btn btn-sm btn-white btn-social mt-4 mr-3">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-sm btn-white btn-social mt-4 mr-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-sm btn-white btn-social mt-4">
                  <i className="fab fa-whatsapp"></i>
                </a>

              </div>
            </div>

            <div  className="col-6 no-mobile ">
              <div className="card-banner"></div>
              <div className="d-flex img-banner">
                <img ref={this.cardBannerRef} className="card-banner-hidden" src={ BannerIMG } alt='' />
              </div>
              <div className="card card-case">
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
