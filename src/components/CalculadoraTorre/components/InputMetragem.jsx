import React from 'react'
import { CupulaContext } from '../../../context/CupulaContext'
import { twMerge } from 'tailwind-merge'
import { useTorreStore } from '../../../context/TorreStorage'

const InputMetragem = ({ label, id, context, className }) => {
  const { adicionarValue } = React.useContext(CupulaContext)
  const [value, setValue] = React.useState('')
  const adicionarValueTorre = useTorreStore(state => state.adicionarValueTorre)

  const handleInputChange = (e) => {
    const valor = parseFloat(e.target.value)
    setValue(e.target.value)

    if (context === 'CupulaContext') {
      adicionarValue(id, valor)
    } else if (context === 'TorreContext') {
      adicionarValueTorre(id, valor)
    }
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