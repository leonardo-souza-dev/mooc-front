import React, { Component } from "react";
import TreinamentoPreview from "../TreinamentoPreview";
import "./style.css";

class ListaDeTreinamentos extends Component {
  render() {
    return (
      <section id="lista-de-cursos">
        <h2>Treinamentos</h2>
        <ul> 
          {[{id: 1, nome: "Testes de Unidade"}, { id: 2, nome: "Cypress"}].map((treinamento, index)=> (
            <TreinamentoPreview treinamento={treinamento} key={index}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default ListaDeTreinamentos;
