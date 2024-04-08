import React from 'react'
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext.jsx';

const InputLargura = () => {
  const dadosInseridos = React.useContext(DadosInseridosContext)
  const [largura, setLargura] = React.useState('');

  return (
    <div>
      <label htmlFor="largura">Largura (m²):</label>
      <input type="number" id="largura" value={largura} onChange={(e) => setLargura(e.target.value)} />
    </div>
  )
}

export default InputLargura