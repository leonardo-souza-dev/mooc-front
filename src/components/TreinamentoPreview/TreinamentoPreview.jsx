import React, { Component } from "react";
import "./style.css";

class TreinamentoPreview extends Component {

  constructor(props){
    super(props)
    this._handlerClick = this._handlerClick.bind(this)
  }

  _handlerClick(e){
    e.preventDefault()
    e.stopPropagation()
    this.props.informarListaTreinamentosClique(this.props.treinamento.id)
  }

  render() {
    return (
      <li id={this.props.treinamento.id} onClick={this._handlerClick}>
        <h3>#{this.props.treinamento.nome}</h3>
        <img className="treinamentopreview_img" alt="apreview to treinameno" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Brown_Bear_cub_in_river_1.jpg" />
      </li>
    );
  }
}

export default TreinamentoPreview;
