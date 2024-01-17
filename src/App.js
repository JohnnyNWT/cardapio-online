import React, { Component } from "react";
import Header from "./components/Header";
import './css/main.css'
import Banner from "./components/Banner";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
      </div>
    )
  }
}

export default App;
