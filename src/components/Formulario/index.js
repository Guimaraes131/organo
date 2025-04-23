<<<<<<< HEAD
import { useState } from "react";
=======
>>>>>>> e49d2ad4e3e91855bcb20cce21fe1bf88ffa80ed
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

<<<<<<< HEAD
const Formulario = (props) => {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
=======
const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("Form foi submetido");
>>>>>>> e49d2ad4e3e91855bcb20cce21fe1bf88ffa80ed
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
<<<<<<< HEAD
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          aoAlterado={valor => setNome(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          aoAlterado={valor => setCargo(valor)}
        />

        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          aoAlterado={valor => setImagem(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />

        <Botao>
          Criar Card
        </Botao>
=======
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
        <Botao>Criar Card</Botao>
>>>>>>> e49d2ad4e3e91855bcb20cce21fe1bf88ffa80ed
      </form>
    </section>
  );
};

export default Formulario;
