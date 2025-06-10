import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([]);

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={(colaborador) => setColaboradores([...colaboradores, colaborador])}/>
    </div>
  );
}

export default App;
