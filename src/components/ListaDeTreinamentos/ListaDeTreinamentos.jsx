import React, { Component } from "react";
import CursoPreview from "../TreinamentoPreview";
import "./style.css";

class ListaDeTreinamentos extends Component {
  render() {
    return (
      <section id="lista-de-cursos">
        <h2>Treinamentos</h2>
        <ul> 
          {["Testes de Unidade", "Cypress"].map((c, index)=> (
            <CursoPreview nome={c} key={index}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default ListaDeTreinamentos;
