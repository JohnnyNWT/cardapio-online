import React, { Component } from 'react';
import Logo from '../img/logo.png';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">

            <div className="col-12 col-lg-3 col-md-3 col-sm-12 col-one container-logo-footer">
              <img className="logo-footer" src={Logo} />
            </div>

            <div className="col-12 col-lg-6 col-md-6 col-sm-12 col-one container-texto-footer">
              <p className="mb-0">
                <b>Menu On-line</b> &copy; Todos os direitos reservados
              </p>
            </div>

            <div className="col-12 col-lg-3 col-md-3 col-sm-12 col-one container-redes-footer">
              <a className="btn btn-sm btn-white btn-social mr-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-sm btn-white btn-social mr-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-sm btn-white btn-social">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>

          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
