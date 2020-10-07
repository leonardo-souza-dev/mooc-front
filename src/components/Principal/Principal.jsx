import React, { Component } from "react";
import ListaDeTreinamentos from "../ListaDeTreinamentos";
import Treinamento from "../Treinamento";
import "./style.css";

class Principal extends Component {
  render() {
    return (
      <main id="principal">
        <ListaDeTreinamentos />
        <Treinamento />
      </main>
    );
  }
}

export default Principal;
