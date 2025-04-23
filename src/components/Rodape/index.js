import './Rodape.css';

const Rodape = () => {
    return (
        <div className='rodape'>
            <div className='redesSociais'>
                <ul>
                    <li>
                        <img src='imagens\fb.png' alt='Logo do Facebook' />
                    </li>
                    <li>
                        <img src='imagens\ig.png' alt='Logo do Instagram' />
                    </li>
                    <li>
                        <img src='imagens\tw.png' alt='Logo do Twitter' />
                    </li>
                </ul>
            </div>

            <img src='imagens\logo.png' alt='Logo da Organo'></img>
            <p>Desenvolvido por Alura.</p>
        </div>
    )
}

export default Rodape;