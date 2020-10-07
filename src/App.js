import React, { Component } from "react";
import Principal from "./components/Principal";
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
        <Principal />
      </>
    );
  }
}

export default App;
