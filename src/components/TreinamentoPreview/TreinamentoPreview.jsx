import React, { Component } from "react";
import "./style.css";

class CursoPreview extends Component {

  render() {
    return (
      <li>
        <h3>#{this.props.treinamento.nome}</h3>
        <img className="treinamentopreview_img" alt="apreview to treinameno" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Brown_Bear_cub_in_river_1.jpg" />
      </li>
    );
  }
}

export default CursoPreview;
