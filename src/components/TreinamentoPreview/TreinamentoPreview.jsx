import React, { Component } from "react";
import Treinamento from "../Treinamento"
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
        <Link to="/treinamento">
          <li>
            <h3>{this.props.nome}</h3>
            <img className="treinamentopreview_img" alt="apreview to treinameno" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Brown_Bear_cub_in_river_1.jpg"/ >
          </li>
        </Link>

        <Switch>
          <Route path="/treinamento">
            <Treinamento />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default CursoPreview;
