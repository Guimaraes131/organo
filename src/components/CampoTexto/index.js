import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  let valor = 'Guilherme Pereira';

  const aoDigitado = (evento) => {
    console.log(valor);
    valor = evento.target.value;
    console.log(valor);
  }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificado} />
    </div>
  );
};

export default CampoTexto;
