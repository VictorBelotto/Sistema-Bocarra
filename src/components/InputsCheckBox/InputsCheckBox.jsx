import React from 'react'
import { CircleCheckBig } from 'lucide-react'

const InputsCheckBox = ({id, value, onClick, label}) => {

  return (
    <label 
    className='text-white flex  w-56 h-10 items-center justify-between  hover:bg-card-escuro cursor-pointer rounded-lg ' 
    htmlFor={`${id}CheckboxOrcamento`}>
      {label}
      <input
        className=' appearance-none  '
        type="checkbox"
        id={`${id}CheckboxOrcamento`}
        value={value}
        onClick={onClick}
      />
      <CircleCheckBig
        className={!value? 'bg-card-contraste rounded-full text-card-contraste' : 'bg-card-contraste  rounded-full text-fundo-roxo'}
      />
    </label>
  )
}

export default InputsCheckBox