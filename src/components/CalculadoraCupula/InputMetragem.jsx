import React from 'react'
import { useCupulaStore } from '../../context/CupulaStore'

const InputMetragem = ({ label, id }) => {
  const setInputValues = useCupulaStore(state => state.setInputValues)

  const [value, setValue] = React.useState('')

  const handleInputChange = (e) => {
    const valor = parseFloat(e.target.value)
    setValue(e.target.value)
    setInputValues(id, valor)
  }

  return (
    <div className='flex w-full justify-between'>
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