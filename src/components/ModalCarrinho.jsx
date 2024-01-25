import React, { Component } from 'react';
import carrinho from '../utils/carrinho';
import imgProduto from '../img/cardapio/burguers/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg';

class ModalCarrinho extends Component {
  render() {
    return (
      <div className="modal-full animated fadeIn hidden" id="modalCarrinho">
        <div className="m-header">
          <div className="container">
            <a className="btn btn-white btn-sm float-right" onClick={() => carrinho.abrirCarrinho(false)}>
              Fechar
            </a>
            <div className="etapas">
              <div className="etapa etapa1 active">1</div>
              <div className="etapa etapa2">2</div>
              <div className="etapa etapa3">3</div>
            </div>
            <p className="title-carrinho mt-4">
              <b id="lblTituloEtapa">Seu carrinho:</b>
            </p>
          </div>
        </div>

        <div className="m-body">
          <div className="container">

            <div id="itensCarrinho" className="row mr-0 ml-0 animated fadeIn hidden">

              <div className="col-12 item-carrinho">
                <div className="img-produto">
                  <img src={imgProduto} alt="" />
                </div>
                <div className="dados-produto">
                  <p className="title-produto"><b>Nome do produto</b></p>
                  <p className="price-produto"><b>R$ 150,00</b></p>
                </div>
                <div className="add-carrinho">
                  <span className="btn-menos"><i className="fas fa-minus"></i></span>
                  <span className="add-numero-itens">0</span>
                  <span className="btn-mais"><i className="fas fa-plus"></i></span>
                  <span className="btn btn-remove"><i className="fa fa-times"></i></span>
                </div>
              </div>

            </div>

            <div id="localEntrega" className="row mr-0 ml-0 animated fadeIn hidden">

              <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                <div className="form-group container-cep">
                  <label>CEP:</label>
                  <input id="txtCEP" type="text" className="form-control" />
                  <a className="btn btn-yellow btn-sm" onclick="cardapio.metodos.buscarCep()">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>

              <div className="col-8 no-mobile"></div>

              <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                <div className="form-group">
                  <label>Endereço:</label>
                  <input id="txtEndereco" type="text" className="form-control" />
                </div>
              </div>

              <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                <div className="form-group">
                  <label>Bairro:</label>
                  <input id="txtBairro" type="text" className="form-control" />
                </div>
              </div>

              <div className="col-12 col-lg-2 col-md-2 col-sm-12">
                <div className="form-group">
                  <label>Número:</label>
                  <input id="txtNumero" type="text" className="form-control" />
                </div>
              </div>

              <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                <div className="form-group">
                  <label>Cidade:</label>
                  <input id="txtCidade" type="text" className="form-control" />
                </div>
              </div>

              <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                <div className="form-group">
                  <label>Complemento:</label>
                  <input id="txtComplemento" type="text" className="form-control" />
                </div>
              </div>

              <div className="col-12 col-lg-2 col-md-2 col-sm-12">
                <div className="form-group">
                  <label>UF:</label>
                  <select id="ddlUf" className="form-control">
                    <option value="-1">...</option>
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AP">AP</option>
                    <option value="AM">AM</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MT">MT</option>
                    <option value="MS">MS</option>
                    <option value="MG">MG</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PR">PR</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RS">RS</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="SC">SC</option>
                    <option value="SP">SP</option>
                    <option value="SE">SE</option>
                    <option value="TO">TO</option>
                  </select>
                </div>
              </div>

            </div>

            <div id="resumoCarrinho" className="row mr-0 ml-0 animated fadeIn hidden">
              <div className="col-12">
                <p className="title-carrinho mt-4">
                  <b>Itens do pedido:</b>
                </p>
              </div>

              <div className="col-12">
                <div className="row" id="listaItensResumo">

                  <div className="col-12 item-carrinho resumo">
                    <div className="img-produto-resumo">
                      <img src={ imgProduto } alt=''/>
                    </div>
                    <div className="dados-produto">
                      <p className="title-produto-resumo">
                        <b>Nome do produto</b>
                      </p>
                      <p className="price-produto-resumo">
                        <b>R$ 100,00</b>
                      </p>
                    </div>
                    <p className="quantidade-produto-resumo">
                      x <b>3</b>
                    </p>
                  </div>

                </div>
              </div>

              <div className="col-12">
                <p className="title-carrinho mt-4">
                  <b>Local da entrega:</b>
                </p>
              </div>

              <div className="col-12 item-carrinho resumo">
                <div className="img-map">
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <div className="dados-produto">
                  <p className="texto-endereco">
                    <b id="resumoEndereco">Av. Severino Clemente de Arruda</b>
                  </p>
                  <p className="cidade-endereco" id="cidadeEndereco">
                    Cidade-Surubim / 55750000
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="m-footer">
          <div className="container">
            <div className="container-total text-right mb-4">
              <p className="mb-0">
                <span>Subtotal:</span>
                <span id="lblSubTotal">R$ 95,00</span>
              </p>
              <p className="mb-0 texto-entrega">
                <span><i className="fas fa-motorcycle"></i> Entrega:</span>
                <span id="lblValorEntrega">+ R$ 5,00</span>
              </p>
              <p className="mb-0 texto-total">
                <span><b>Total:</b></span>
                <span className="valor-total"><b id="lblValorTotal">R$ 100,00</b></span>
              </p>
            </div>

            <a onClick={() => carrinho.carregarEtapa(2)} className="btn btn-yellow float-right" id="btnEtapaPedido">
              Continuar
            </a>
            <a onClick={() => carrinho.carregarEtapa(3)} className="btn btn-yellow float-right hidden" id="btnEtapaEndereco">
              Revisar pedido
            </a>
            <a href="#" className="btn btn-yellow float-right hidden" id="btnEtapaResumo" target="_blank">
              Enviar pedido
            </a>

            <a onClick={() => carrinho.carregarEtapa('Voltar')} className="btn btn-white float-right mr-3 hidden" id="btnVoltar">
              Voltar
            </a>

          </div>
        </div>
      </div>
    );
  }
}

export default ModalCarrinho;
