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
      <input onChange={(e) => props.mudarCor(e.target.value, props.nome)} value={props.primaria} type="color" className='input-cor' />
      <h3 style={corPrimaria}>{props.nome}</h3>

      <div className='colaboradores'>
        {
          props.colaboradores.map((colaborador) => {
            return <Colaborador
              corDeFundo={props.primaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              aoDeletar={props.aoDeletar}
            />
          })
        }
      </div>
    </section>
    : ''
  )
}

export default Time