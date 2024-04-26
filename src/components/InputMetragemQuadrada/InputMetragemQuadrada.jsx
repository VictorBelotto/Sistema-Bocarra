import React from 'react'
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext'

const InputMetragemQuadrada = ({ id }) => {
  const { dadosInseridos, adicionarDado } = React.useContext(DadosInseridosContext);
  const [metragemQuadrada, setMetragemQuadrada] = React.useState(dadosInseridos.metragemQuadrada[id]);

  React.useEffect(()=>{
    setMetragemQuadrada(dadosInseridos.metragemQuadrada[id])
  },[dadosInseridos.metragemQuadrada[id]])

  const handleMetragemQuadradaChange = ({ target }) => {
    const novoValor = target.value;
    setMetragemQuadrada(novoValor);
    adicionarDado('metragemQuadrada', { ...dadosInseridos.metragemQuadrada, [id]: novoValor });
  };

  return (
    <div className='flex flex-col w-36 gap-2'>
      <label className='container text-slate-300' htmlFor="metragemQuadrada">Metragem (m²):</label>
      <input 
        className='focus:outline-purple-700 outline-none bg-card-contraste text-slate-100 text-center rounded-md w-20 py-1 px-2'
        type="number" 
        id="metragemQuadrada" 
        value={metragemQuadrada} 
        onChange={handleMetragemQuadradaChange} 
      />
    </div>
  );
};

export default InputMetragemQuadrada