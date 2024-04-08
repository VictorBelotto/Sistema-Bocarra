import React from 'react'
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext';

const InputMetragemLona = () => {
  const inserirDados = React.useContext(DadosInseridosContext)
  
  const [metragemLona, setMetragemLona] = React.useState('');

  const handleMetragemLonaChange = (e) =>{
    const metragemLonaAtual = e.target.value
    setMetragemLona(metragemLonaAtual)
    inserirDados.adicionarDado('metragemLona', metragemLonaAtual)
  };

  return (
    <div>
        <label htmlFor="metragemLona">Metragem (m²) da lona</label>
        <input type="number" id="metragemLona" value={metragemLona} onChange={handleMetragemLonaChange} />
    </div>
  )
}

export default InputMetragemLona