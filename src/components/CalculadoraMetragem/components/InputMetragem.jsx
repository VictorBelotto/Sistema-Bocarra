import React from 'react';
import { useCalculadoraMetragemStore } from '../../../context/CalculadoraMetragemStore.js';

const InputMetragem = ({ label, id }) => {
  const [adicionarMetragem, dadosMetragem, stateMetragem] = useCalculadoraMetragemStore(state => [state.adicionarMetragem, state.dadosMetragem, state.stateMetragem])
  const idMetragem = `${id}DaLona`
  const [metragem, setMetragem] = React.useState(dadosMetragem[idMetragem]);


  const handleMetragemChange = (e) => {
    setMetragem(e.target.value)
    adicionarMetragem(idMetragem, e.target.value)
  }

  React.useEffect(()=>{
    setMetragem('')
    adicionarMetragem(idMetragem, '')
  }, [stateMetragem])


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