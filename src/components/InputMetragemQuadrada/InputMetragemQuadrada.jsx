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
    <div className='flex flex-col w-40 gap-2'>
      <label className='container text-white' htmlFor="metragemQuadrada">Metragem (m²):</label>
      <input 
        className='container bg-card-contraste text-white border-none'
        type="number" 
        id="metragemQuadrada" 
        value={metragemQuadrada} 
        onChange={handleMetragemQuadradaChange} 
      />
    </div>
  );
};

export default InputMetragemQuadrada