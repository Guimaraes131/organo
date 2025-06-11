import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

  const cor = {
    borderColor: props.cor
  }

  return (
    (props.colaboradores.length > 0) ? <section className='time'>
      <input onChange={(e) => props.mudarCor(e.target.value, props.nome)} value={props.cor} type="color" className='input-cor' />
      <h3 style={cor}>{props.nome}</h3>

      <div className='colaboradores'>
        {
          props.colaboradores.map((colaborador) => {
            return <Colaborador
              corDeFundo={props.cor}
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