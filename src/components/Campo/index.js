import './Campo.css'

const Campo = ({label, type='text', valor, aoAlterado, obrigatorio, placeholder}) => {

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoAlterado}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Campo