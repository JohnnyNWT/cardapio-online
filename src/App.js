import React, { Component } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Servicos from "./components/Servicos";
import './css/main.css'
import Cardapio from "./components/Cardapio";
import Depoimentos from "./components/Depoimentos";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Servicos />
        <Cardapio />
        <Depoimentos />
      </div>
    )
  }
}

export default App;
