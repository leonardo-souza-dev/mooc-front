import React, { Component } from "react";
import ListaDeTreinamentos from "../ListaDeTreinamentos";
import Treinamento from "../Treinamento";
import "./style.css";

class Principal extends Component {
  constructor(){
    super();
    this.state = {
      showTreinamento: false
    }
  }

  _buscarTreinamentoClicado(id){
    console.log('bar' + id)
    
  }

  render() {
    return (
      <main id="principal">
        <ListaDeTreinamentos 
          treinamentos={[{id: 123, nome: "Testes de Unidade!"}, { id: 234, nome: "Cypress"}]}
          informarPrincipalCliqueTreinamentoPreview={this._buscarTreinamentoClicado.bind(this)}/>
        <Treinamento 
          show={ this.state.showTreinamento } 
          url={'foo'} />
      </main>
    );
  }
}

export default Principal;
