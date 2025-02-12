import { React, Component } from "react";
import "./App.css";
import { Comentario } from "./components/Comentario";

class App extends Component {
  state = {
    comentarios: [
      {
        nome: "João",
        email: "joao@gmail.com",
        data: new Date(2020, 3, 19),
        mensagem: "Olá, eu sou o João.",
      },
      {
        nome: "Maria",
        email: "maria@gmail.com",
        data: new Date(2021, 5, 15),
        mensagem: "Olá, eu sou a Maria.",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario 
          key={indice}
          nome={comentario.nome} 
          email={comentario.email}
          data={comentario.data}>
          {comentario.mensagem}
          </Comentario>
        ))}
      </div>
    );
  }
}

export default App;
