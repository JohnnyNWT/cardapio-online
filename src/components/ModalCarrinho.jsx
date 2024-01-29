import React, { Component } from 'react';
import carrinho from '../utils/carrinho';
import imgProduto from '../img/cardapio/burguers/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg';
import { QntdItensCarrinho } from '../context/QntdItensCarrinho';

class ModalCarrinho extends Component {
  static contextType = QntdItensCarrinho;

  state = {
    valorCarrinho: 0,
    valorEntrega: 5,
    txtCEP: '',
    txtEndereco: '',
    txtBairro: '',
    txtNumero: '',
    txtCidade: '',
    txtComplemento: '',
    ddlUf: '...',
  }

  componentDidUpdate(_prevProps, prevState) {
    const { meuCarrinho } = this.context;

    const novoValorCarrinho = meuCarrinho.reduce((total, item) => total + item.price * item.quantidade, 0);
  
    if (novoValorCarrinho !== prevState.valorCarrinho) {
      this.setState({
        valorCarrinho: novoValorCarrinho,
      });
    }
  }

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value });
  };

  handleClickAumentarQuantidade = (id) => {
    const { setQntdItens, qntdItens, meuCarrinho } = this.context;
    meuCarrinho.forEach((e) => e.id === id ? e.quantidade += 1: e);
    setQntdItens(qntdItens + 1);
    
    const getElement = document.getElementById(`qntd-carrinho-${id}`);
    const qntdAtual = parseInt(getElement.textContent) + 1;
    getElement.textContent = qntdAtual;
  };

  handleClickDiminuirQuantidade = (id) => {
    const { setQntdItens, qntdItens, meuCarrinho } = this.context;
    const getElement = document.getElementById(`qntd-carrinho-${id}`);
    
    if (getElement.textContent > 1) {
      meuCarrinho.forEach((e) => {
        if (e.id === id) {
          e.quantidade -= 1;
        }
      });
      setQntdItens(qntdItens - 1);
      const qntdAtual = parseInt(getElement.textContent) - 1;
      getElement.textContent = qntdAtual;
    } else {
      this.handleClickRemoverItem(id);
    }
  };

  handleClickRemoverItem = (id) => {
    const { meuCarrinho, setMeuCarrinho, setQntdItens } = this.context;
    const novoCarrinho = meuCarrinho.filter((item) => item.id !== id);

    let total = 0;
    novoCarrinho.forEach((e) => total += e.quantidade);
    setQntdItens(total);
    setMeuCarrinho(novoCarrinho);
  };

  carregarEndereco = () => {
    const { meuCarrinho } = this.context
    if (meuCarrinho.length <= 0) {
      carrinho.mensagem('Seu carrinho está vazio.', 'red');
      return;
    }

    carrinho.carregarEtapa(2)
  };

  handleClickBuscarCep = async () => {
    const { txtCEP } = this.state;
    const cep = txtCEP.trim().replace(/\D/g, '');
    const validaCEP = /^[0-9]{8}$/;
  
    if (validaCEP.test(cep)) {
      const API = `https://viacep.com.br/ws/${cep}/json`;
  
      try {
        const response = await fetch(API);
  
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }
  
        const data = await response.json();
  
        if (data.erro) {
          throw new Error('CEP não encontrado');
        }
  
        const { bairro, logradouro, localidade, uf } = data;
  
        this.setState({
          txtCidade: localidade,
          ddlUf: uf,
          txtBairro: bairro,
          txtEndereco: logradouro,
        });
  
        // Use a referência diretamente se estiver usando React
        document.getElementById('txtEndereco').focus();
      } catch (error) {
        carrinho.mensagem(`Erro ao buscar CEP: ${error.message}`, 'red');
      }
    } else {
      carrinho.mensagem('CEP inválido. Mas não se preocupe, este campo é opcional.', 'yellow');
    }
  };

  resumoPedido = () => {
    const { txtEndereco, txtCidade, txtComplemento, txtNumero } = this.state;

    if (txtEndereco.trim().length <= 0) {
      carrinho.mensagem('Informe o endereço por favor.', 'red');
      document.getElementById('txtEndereco').focus();
    } else if (txtCidade.trim().length <= 0) {
      carrinho.mensagem('Informe a cidade por favor.', 'red');
      document.getElementById('txtCidade').focus();
    } else if (txtComplemento.trim().length <= 0) {
      carrinho.mensagem('Informe o complemento por favor.', 'red');
      document.getElementById('txtComplemento').focus();
    } else if (txtNumero.trim().length <= 0) {
      carrinho.mensagem('Informe o número por favor.', 'red');
      document.getElementById('txtNumero').focus();
    } else {
      carrinho.carregarEtapa(3);
    }
  };

  render() {
    const {
      valorCarrinho,
      valorEntrega,
      txtCEP,
      txtEndereco,
      txtBairro,
      txtNumero,
      txtCidade,
      txtComplemento,
      ddlUf,
    } = this.state;
    const { meuCarrinho } = this.context;

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
              {
                meuCarrinho.length > 0 ? meuCarrinho.map(({ id, img, name, price, quantidade }) => (
                <div className="col-12 item-carrinho" id={id}>
                  <div className="img-produto">
                    <img src={img} alt="" />
                  </div>
                  <div className="dados-produto">
                    <p className="title-produto"><b>{name}</b></p>
                    <p className="price-produto"><b>R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b></p>
                  </div>
                  <div className="add-carrinho">
                    <span className="btn-menos" onClick={() => this.handleClickDiminuirQuantidade(id)}><i className="fas fa-minus"></i></span>
                    <span className="add-numero-itens" id={`qntd-carrinho-${id}`}>{quantidade}</span>
                    <span className="btn-mais" onClick={() => this.handleClickAumentarQuantidade(id)}><i className="fas fa-plus"></i></span>
                    <span className="btn btn-remove" onClick={() => this.handleClickRemoverItem(id)}><i className="fa fa-times"></i></span>
                  </div>
                </div>
                )): <p className="carrinho-vazio"><i className="fa fa-shopping-bag"></i>Seu carrinho está vazio.</p>
              }

            </div>

            <div id="localEntrega" className="row mr-0 ml-0 animated fadeIn hidden">

              <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                <div className="form-group container-cep">
                  <label>CEP:</label>
                  <input id="txtCEP" type="text" className="form-control" onChange={this.handleChange} value={txtCEP} />
                  <a className="btn btn-yellow btn-sm" onClick={this.handleClickBuscarCep}>
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>

              <div className="col-8 no-mobile"></div>

              <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                <div className="form-group">
                  <label>Endereço:</label>
                  <input id="txtEndereco" type="text" className="form-control" onChange={this.handleChange} value={txtEndereco} />
                </div>
              </div>

              <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                <div className="form-group">
                  <label>Bairro:</label>
                  <input id="txtBairro" type="text" className="form-control" onChange={this.handleChange} value={txtBairro} />
                </div>
              </div>

              <div className="col-12 col-lg-2 col-md-2 col-sm-12">
                <div className="form-group">
                  <label>Número:</label>
                  <input id="txtNumero" type="text" className="form-control" onChange={this.handleChange} value={txtNumero} />
                </div>
              </div>

              <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                <div className="form-group">
                  <label>Cidade:</label>
                  <input id="txtCidade" type="text" className="form-control" onChange={this.handleChange} value={txtCidade} />
                </div>
              </div>

              <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                <div className="form-group">
                  <label>Complemento:</label>
                  <input id="txtComplemento" type="text" className="form-control" onChange={this.handleChange} value={txtComplemento} />
                </div>
              </div>

              <div className="col-12 col-lg-2 col-md-2 col-sm-12">
                <div className="form-group">
                  <label>UF:</label>
                  <select id="ddlUf" onChange={this.handleChange} value={ddlUf} className="form-control">
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
                      <img src={imgProduto} alt='' />
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
                <span>Subtotal: </span>
                <span id="lblSubTotal">R$ {valorCarrinho.toFixed(2).replace('.', ',')}</span>
              </p>
              <p className="mb-0 texto-entrega">
                <span><i className="fas fa-motorcycle"></i> Entrega: </span>
                <span id="lblValorEntrega">+ R$ {valorEntrega.toFixed(2).replace('.', ',')}</span>
              </p>
              <p className="mb-0 texto-total">
                <span><b>Total: </b></span>
                <span className="valor-total"><b id="lblValorTotal">R$ {(valorCarrinho + valorEntrega).toFixed(2).replace('.', ',')}</b></span>
              </p>
            </div>

            <a onClick={() => this.carregarEndereco()} className="btn btn-yellow float-right" id="btnEtapaPedido">
              Continuar
            </a>
            <a onClick={() => this.resumoPedido()} className="btn btn-yellow float-right hidden" id="btnEtapaEndereco">
              Revisar pedido
            </a>
            <a className="btn btn-yellow float-right hidden" id="btnEtapaResumo">
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
