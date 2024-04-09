import React from 'react'
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext';

const SelectMaterial = () => {
  const {dadosInseridos, adicionarDado} = React.useContext(DadosInseridosContext)
  
  const [diasDeTrabalho, setDiasDeTrabalho] = React.useState(dadosInseridos.diasDeTrabalho);
  const handleDiasDeTrabalhoChange = (e) =>{
    const diasDeTrabalhoAtual = e.target.value
    setDiasDeTrabalho(diasDeTrabalhoAtual)
    adicionarDado('diasDeTrabalho', diasDeTrabalhoAtual)
  };

  return (
    <div>
        <label htmlFor="diasDeTrabalho">Dias de trabalho</label>
        <input type="number" id="diasDeTrabalho" value={diasDeTrabalho} onChange={handleDiasDeTrabalhoChange} />
    </div>
  )
}

export default SelectMaterial