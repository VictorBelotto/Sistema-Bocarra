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
    <div>
      <label htmlFor="diasDeTrabalho">Dias de trabalho:</label>
      <input type="number" id="diasDeTrabalho" value={diasDeTrabalho} onChange={handleDiasDeTrabalhoChange} />
    </div>
  );
};

export default InputDiasDeTrabalho