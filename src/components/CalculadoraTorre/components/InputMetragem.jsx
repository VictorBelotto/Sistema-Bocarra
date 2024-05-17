import React from 'react'
import { twMerge } from 'tailwind-merge'
import { useTorreStore } from '../../../context/TorreStore'

const InputMetragem = ({ label, id, className }) => {
  const [value, setValue] = React.useState('')
  const adicionarValueTorre = useTorreStore(state => state.adicionarValueTorre)

  const handleInputChange = (e) => {
    const valor = parseFloat(e.target.value)
    setValue(e.target.value)
    adicionarValueTorre(id, valor)
  }

  return (
    <div className={twMerge('flex  w-full justify-between', className)}>
      <label htmlFor={id}>{label}</label>
      <input type="text"
        className='focus:outline-purple-700 outline-none py-1 w-16 text-slate-100 text-center  bg-card-contraste border-none rounded-md'
        value={value}
        id={id}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default InputMetragem