import React from "react";
import "./Comentario.css";

// Esse componente faz o retorno direto pois a função é mais simples está entre parenteses.
const ComentarioDireto = () => (
  <>
    <div className="Comentario">
      <div>João:</div>
      <div>Olá eu sou um componente.</div>
    </div>
  </>
);

// Este componente precisa de uma função de retorno pois é mais complexa e está entre chaves.
const Comentario = (props) => {
  return (
    <>
      <div className="Comentario">
        <h2>{props.nome}:</h2>
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>{props.data.toString()}</p>
      </div>
    </>
  );
};

export { Comentario, ComentarioDireto };
