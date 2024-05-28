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
    <div className='flex flex-col w-36 gap-2'>
      <label className='text-slate-100 container' htmlFor="diasDeTrabalho">Dias de trabalho:</label>
      <input 
        className='focus:outline-purple-700 text-center outline-none bg-card-contraste text-slate-100 border-none rounded-md w-20 py-1 px-2'
        type="number" 
        id="diasDeTrabalho" 
        value={diasDeTrabalho} 
        onChange={handleDiasDeTrabalhoChange} 
      />
    </div>
  );
};

export default InputDiasDeTrabalho