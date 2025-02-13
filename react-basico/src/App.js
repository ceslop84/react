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

    novoComentario: {
      nome: "",
      email: "",
      mensagem: "",
    },
  };

  adicionarComentario = (evento) => {
    evento.preventDefault();
    console.log("Adicionando comentário");
    const novoComentario = {...this.state.novoComentario, data: new Date()};
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: "", email: "", mensagem: "" },
    });
  };

  removerComentario = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    this.setState({comentarios: lista})
  }

  digitacao = (evento) => {
    const { name, value } = evento.target;
    this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value } });
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
          data={comentario.data}
          onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method="post" onSubmit={this.adicionarComentario}>
          <h2>Adicionar comentário</h2>
          <div>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              value={this.state.novoComentario.nome}
              onChange={this.digitacao}
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Digite seu e-mail"
              value={this.state.novoComentario.email}
              onChange={this.digitacao}
            />
          </div>
          <div>
            <textarea name="mensagem" value={this.state.novoComentario.mensagem} rows="4" onChange={this.digitacao} />
          </div>
          <button type="submit">Salvar</button>
        </form>
      </div>
    );
  }
}

export default App;
