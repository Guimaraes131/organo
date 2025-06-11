import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

  const corSecundaria = {
    backgroundColor: props.secundaria
  }

  const corPrimaria = {
    borderColor: props.primaria
  }

  return (
    (props.colaboradores.length > 0) ? <section className='time' style={corSecundaria}>
      <h3 style={corPrimaria}>{props.nome}</h3>

      <div className='colaboradores'>
        {
          props.colaboradores.map((colaborador) =>
            <Colaborador
              corDeFundo={props.primaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
            />)
        }
      </div>
    </section>
    : ''
  )
}

export default Time