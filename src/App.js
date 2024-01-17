import React, { Component } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Servicos from "./components/Servicos";
import './css/main.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Servicos />
      </div>
    )
  }
}

export default App;
