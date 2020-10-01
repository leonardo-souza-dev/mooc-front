import React, { Component } from "react";
import CursoPreview from "../CursoPreview";
import "./style.css";

class Cursos extends Component {
  render() {
    return (
      <>
        <h2>Cursos</h2>
        <ul> 
          {["Testes de Unidade", "Cypress"].map((c, index)=> (
            <CursoPreview nome={c} key={index}/>
          ))}
        </ul>
      </>
    );
  }
}

export default Cursos;
