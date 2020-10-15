import React, { Component } from "react";
import TreinamentoPreview from "../TreinamentoPreview";
import "./style.css";

class ListaDeTreinamentos extends Component {

  constructor(props){
    super(props)
    this._cliqueTreinamentoPreview = this._cliqueTreinamentoPreview.bind(this)
  }

  _cliqueTreinamentoPreview(id){
    console.log('foo' + id)
    this.props.informarPrincipalCliqueTreinamentoPreview(id)
  }

  render() {
    return (
      <section id="lista-de-cursos">
        <h2>Treinamentos</h2>
        <ul id="lista-de-treinamentos"> 
          {this.props.treinamentos.map((treinamento, index)=> (
            <TreinamentoPreview 
              treinamento={treinamento} 
              key={index} 
              informarListaTreinamentosClique={this._cliqueTreinamentoPreview.bind(this)}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default ListaDeTreinamentos;
