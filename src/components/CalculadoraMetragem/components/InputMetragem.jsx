import React from 'react';
import { DadosInseridosContext } from '../../../scripts/DadosInseridosContext.jsx';

const InputMetragem = ({label, id}) => {
  const [metragem, setMetragem] = React.useState('');
  const {adicionarMetragem} = React.useContext(DadosInseridosContext)

  const handleMetragemChange = (e) => {
    setMetragem(e.target.value)
    adicionarMetragem(`${id}DaLona`, e.target.value)
  }
  return (
    <div key={id} className='flex container gap flex-col '>
      <label htmlFor={id} >{label}:</label>
      <input 
        className='w-28'
        type="number" 
        id={id} 
        value={metragem} 
        onChange={handleMetragemChange} />
  </div>
  )
}

export default InputMetragem