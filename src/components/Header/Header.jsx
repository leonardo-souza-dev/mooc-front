import React, { Component } from "react";
import "./style.css";

class Header extends Component {

  render() {
    return (
      <div className="header_div">
        <h1>mooc</h1>
        <ul>
          <li>cursos</li>
          <li>dashboard</li>
        </ul>
        <span>7700123456</span>
      </div>
    );
  }
}

export default Header;
