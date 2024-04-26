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
    <div key={id} className='flex flex-col gap-2'>
      <label className='container text-white' htmlFor={id} >{label}:</label>
      <input 
        className='focus:outline-purple-700 outline-none py-1 w-20 text-slate-100 text-center  bg-card-contraste border-none rounded-md'
        type="number" 
        id={id} 
        value={metragem} 
        onChange={handleMetragemChange} />
  </div>
  )
}

export default InputMetragem