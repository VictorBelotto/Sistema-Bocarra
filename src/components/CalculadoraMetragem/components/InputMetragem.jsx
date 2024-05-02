import React from 'react';
import { DadosInseridosContext } from '../../../scripts/DadosInseridosContext.jsx';

const InputMetragem = ({label, id}) => {
  const {adicionarMetragem, dadosMetragem, stateMetragem } = React.useContext(DadosInseridosContext)
  const [metragem, setMetragem] = React.useState(dadosMetragem.alturaFechamento);
  
  React.useEffect(() =>{
    setMetragem(dadosMetragem.alturaFechamento)
  },[stateMetragem])

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