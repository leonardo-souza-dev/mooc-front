import React, { Component } from "react";
import "./style.css";

class Treinamento extends Component {

  render() {
    return (
      <section id="treinamento">
        <h1>Teste de Unidade</h1>
        <div>
          <ul>
            <li>aula 1</li>
            <li>aula 2</li>
            <li>aula 3</li>
            <li>aula 4</li>
            <li>aula 5</li>
          </ul>
        </div>
        <div>
        <video width="640" height="480" controls>
          <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </section>
    );
  }
}

export default Treinamento;
