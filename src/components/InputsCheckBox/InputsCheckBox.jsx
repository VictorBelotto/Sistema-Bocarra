import React from 'react'
import { CircleCheckBig } from 'lucide-react'

const InputsCheckBox = ({id, value, onClick, label}) => {

  return (
    <label 
    className='text-purple-400 font-semibold flex  w-56  h-10 px-2 items-center justify-between  hover:bg-card-claro cursor-pointer rounded-lg ' 
    htmlFor={`${id}Checkbox`}>
      {label}
      <input
        className=' appearance-none '
        type="checkbox"
        id={`${id}Checkbox`}
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