import React, { Component } from "react";
import ListaDeTreinamentos from "../ListaDeTreinamentos";
import Treinamento from "../Treinamento";
import "./style.css";

class Principal extends Component {
  constructor(){
    super();
    this.state = {
      showTreinamento: false
    }
  }
  render() {
    return (
      <main id="principal">
        <ListaDeTreinamentos />
        <Treinamento show={ this.state.showTreinamento } />
      </main>
    );
  }
}

export default Principal;
