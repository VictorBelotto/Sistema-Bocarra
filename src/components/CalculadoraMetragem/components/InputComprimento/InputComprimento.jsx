import React from 'react'
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext.jsx';

const InputComprimento = () => {
  const dadosInseridos = React.useContext(DadosInseridosContext)
  const [comprimento, setComprimento] = React.useState('');

  const handleComprimentoChange = (e) => {
    setComprimento(e.target.value)
    dadosInseridos.adicionarMetragem('comprimentoDaLona', e.target.value )
  }

  return (
    <div>
        <label htmlFor="comprimento">Comprimento (m²):</label>
        <input type="number" id="comprimento" value={comprimento} onChange={handleComprimentoChange} />
     </div>
  )
}

export default InputComprimento