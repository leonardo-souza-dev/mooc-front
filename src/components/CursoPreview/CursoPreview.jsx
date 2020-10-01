import React, { Component } from "react";
import Curso from "../Curso"
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class CursoPreview extends Component {

  render() {
    return (
      <Router>
        <Link to="/curso">
          <li>
            <h3>{this.props.nome}</h3>
          </li>
        </Link>

        <Switch>
          <Route path="/curso">
            <Curso />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default CursoPreview;
