import React, { Component } from "react";
import "./style.css";

class Header extends Component {

  render() {
    return (
      <header className="header_div">
        <h1>mooc</h1>
        <ul>
          <li>treinamentos</li>
          <li>dashboard</li>
        </ul>
        <span>7700123456</span>
      </header>
    );
  }
}

export default Header;
