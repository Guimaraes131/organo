import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

<<<<<<< HEAD
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
=======
  let valor = 'Guilherme Pereira';

  const aoDigitado = (evento) => {
    console.log(valor);
    valor = evento.target.value;
    console.log(valor);
>>>>>>> e49d2ad4e3e91855bcb20cce21fe1bf88ffa80ed
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
<<<<<<< HEAD
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado} />
=======
      <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado} />
>>>>>>> e49d2ad4e3e91855bcb20cce21fe1bf88ffa80ed
    </div>
  );
};

export default CampoTexto;
