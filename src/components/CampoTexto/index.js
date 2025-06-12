import './CampoTexto.css'

const CampoTexto = (props) => {

  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input value={props.valor} onChange={props.aoAlterado} required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  )
}

export default CampoTexto