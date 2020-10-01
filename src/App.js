import React, { Component } from "react";
import Cursos from "./components/Cursos";
import Header from "./components/Header/";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <>
        <Header />
        <Cursos />
      </>
    );
  }
}

export default App;
