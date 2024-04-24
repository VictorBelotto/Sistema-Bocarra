import React from 'react'
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext'

const InputDiasDeTrabalho = ({ id }) => {
  const { dadosInseridos, adicionarDado } = React.useContext(DadosInseridosContext);
  const [diasDeTrabalho, setDiasDeTrabalho] = React.useState(dadosInseridos.diasDeTrabalho[id]);

  const handleDiasDeTrabalhoChange = ({ target }) => {
    const novoValor = target.value;
    setDiasDeTrabalho(novoValor);
    adicionarDado('diasDeTrabalho', { ...dadosInseridos.diasDeTrabalho, [id]: novoValor });
  };

  return (
    <div className='flex flex-col w-40 gap-2'>
      <label className='text-white container' htmlFor="diasDeTrabalho">Dias de trabalho:</label>
      <input 
        className='bg-card-contraste text-white border-none container'
        type="number" 
        id="diasDeTrabalho" 
        value={diasDeTrabalho} 
        onChange={handleDiasDeTrabalhoChange} 
      />
    </div>
  );
};

export default InputDiasDeTrabalho