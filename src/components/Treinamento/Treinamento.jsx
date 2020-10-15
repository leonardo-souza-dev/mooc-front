import React, { Component } from "react";
import "./style.css";

class Treinamento extends Component {
  // componentWillMount() {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('get', this.props.url, true);
  //   xhr.onload = () => {
  //       const data = JSON.parse(xhr.responseText);
  //       this.setState({ data: data });
  //   };
  //   xhr.send();
  // }

  render() {
    return (
      <section id="treinamento" style={this.props.show ? show : hide}>
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

const show = {
  display: "block"
}
const hide = {
  display: "none"
}

export default Treinamento;
