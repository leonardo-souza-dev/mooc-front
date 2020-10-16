import React, { Component } from "react";
import ListaDeTreinamentos from "../ListaDeTreinamentos";
import Treinamento from "../Treinamento";
import "./style.css";

class Principal extends Component {
  constructor(){
    super();
    this.state = {
      showTreinamento: false,
      dados: [],
      idTreinamento: 0
    }
  }

  componentDidMount(){
    const dados = [{id: 1, nome: "Testes de Unidade!"}, { id: 2, nome: "Cypress"}]
    this.setState({...this.state, dados})
  }

  _buscarTreinamentoClicado(idTreinamento){
    console.log(idTreinamento)
    this.setState({...this.state, idTreinamento})
    this._toogleTreinamento()
  }

  _toogleTreinamento(){
    const showTreinamento = !this.state.showTreinamento
    this.setState({...this.state, showTreinamento})
  }

  render() {
    return (
      <main id="principal">
        <ListaDeTreinamentos 
          show={!this.state.showTreinamento}
          treinamentos={this.state.dados}
          informarPrincipalCliqueTreinamentoPreview={this._buscarTreinamentoClicado.bind(this)}/>
        <Treinamento 
          show={ this.state.showTreinamento } 
          id={this.state.idTreinamento} />
      </main>
    );
  }
}

export default Principal;
