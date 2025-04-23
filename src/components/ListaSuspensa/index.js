import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
<<<<<<< HEAD
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value="" />
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
=======
            <select required={props.obrigatorio}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
>>>>>>> e49d2ad4e3e91855bcb20cce21fe1bf88ffa80ed
            </select>
        </div>
    )
}

export default ListaSuspensa