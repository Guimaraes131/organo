import './Time.css'

const Time = (props) => {

  const estiloFundo = {
    backgroundColor: props.secundaria
  }

  const estiloH3 = {
    borderColor: props.primaria
  }

  return (
    <section className='time' style={estiloFundo}>
      <h3 style={estiloH3}>{props.nome}</h3>
    </section>
  )
}

export default Time