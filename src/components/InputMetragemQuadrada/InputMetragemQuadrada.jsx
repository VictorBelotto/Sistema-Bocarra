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
    <div>
      <label htmlFor="metragemQuadrada">Metragem (m²):</label>
      <input type="number" id="metragemQuadrada" value={metragemQuadrada} onChange={handleMetragemQuadradaChange} />
    </div>
  );
};

export default InputMetragemQuadrada