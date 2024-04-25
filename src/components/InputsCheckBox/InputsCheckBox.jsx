import React from 'react'
import { Checkbox } from '@material-tailwind/react'

const InputsCheckBox = ({id, value, onClick, label}) => {

  return (
    <label 
    className='text-white mr-2 flex w-60 h-10 items-center justify-between px-3  hover:bg-card-escuro cursor-pointer rounded-lg' 
    htmlFor={`${id}CheckboxOrcamento`}>
      {label}
      <input
        className='text-white w-6 h-6 m-0 cursor-pointer appearance-none rounded-full
         checked:bg-fundo-roxo transition-all hover:scale-105 hover:before:opacity-0'
        type="checkbox"
        id={`${id}CheckboxOrcamento`}
        value={value}
        onClick={onClick}
      />
    </label>
  )
}

export default InputsCheckBox