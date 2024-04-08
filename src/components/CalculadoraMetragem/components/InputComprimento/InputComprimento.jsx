import React from 'react'
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext.jsx';

const InputComprimento = () => {
  const dadosInseridos = React.useContext(DadosInseridosContext)
  const [comprimento, setComprimento] = React.useState('');

  return (
    <div>
        <label htmlFor="comprimento">Comprimento (m²):</label>
        <input type="number" id="comprimento" value={comprimento} onChange={(e) => setComprimento(e.target.value)} />
     </div>
  )
}

export default InputComprimento