import React, { Component } from "react";

class MeuCompoenente extends Component {
  constructor(props) {
    super(props);
    this.state = { numero: 5 };
    console.log("contrutor...");
    this.adicionarNumero = this.adicionarNumero.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps...");
    console.log(props);
    console.log(state);
    //return { numero: 6}
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount...");
  }

  adicionarNumero() {
    let numeroAtual = this.state.numero;
    numeroAtual += 1;
    console.log("setState...");
    this.setState({ numero: numeroAtual });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate...");
    console.log("Current:");
    console.log(this.props);
    console.log(this.state);
    console.log("Next:");
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }

  render() {
    console.log("render...");
    return (
      <div>
        <p>{this.props.titulo}</p>
        <p>{this.state.numero}</p>
        <button onClick={this.adicionarNumero}>Adicionar número</button>
      </div>
    );
  }
}

export default MeuCompoenente;
