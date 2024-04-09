import React from 'react'
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext.jsx';

const InputLargura = () => {
  const dadosInseridos = React.useContext(DadosInseridosContext)
  const [largura, setLargura] = React.useState('');

  const handleLarguraChange = (e) => {
    setLargura(e.target.value)
    dadosInseridos.adicionarMetragem('larguraDaLona', e.target.value)
  }

  return (
    <div>
      <label htmlFor="largura">Largura (m²):</label>
      <input type="number" id="largura" value={largura} onChange={handleLarguraChange} />
    </div>
  )
}

export default InputLargura