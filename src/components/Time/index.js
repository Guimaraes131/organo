import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador'
import './Time.css'


const Time = (props) => {

  return (
    (props.colaboradores.length > 0) ?
      <section
        className='time'
        style={{
          backgroundImage: 'url(imgs/fundo.png)',
          backgroundColor: hexToRgba(props.cor, '0.6')
        }}>
      <input
        onChange={(e) =>
          props.mudarCor(e.target.value, props.id)}
        value={props.cor}
        type="color"
        className='input-cor'
      />
      <h3 style={ {borderColor: props.cor} }>{props.nome}</h3>

      <div className='colaboradores'>
        {
          props.colaboradores.map((colaborador) => {
            return <Colaborador
              favorito={colaborador.favorito}
              cor={props.cor}
              id={colaborador.id}
              key={colaborador.id}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              aoDeletar={props.aoDeletar}
              aoFavoritar={props.aoFavoritar}
            />
          })
        }
      </div>
    </section>
    : ''
  )
}

export default Time