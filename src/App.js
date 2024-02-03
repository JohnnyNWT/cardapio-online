import React, { Component } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Servicos from "./components/Servicos";
import Cardapio from "./components/Cardapio";
import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";
import ModalCarrinho from "./components/ModalCarrinho";

import './css/main.css'
import './css/responsivo.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Servicos />
        <Cardapio />
        <Depoimentos />
        <Footer />
        <ModalCarrinho />
      </div>
    )
  }
}

export default App;
