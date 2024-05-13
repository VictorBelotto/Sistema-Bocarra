import React from 'react'
import InputsCheckBox from '../../InputsCheckBox/InputsCheckBox'
import InputMetragem from './InputMetragem'
import { TorreContext } from '../../../context/TorreContext'

const CheckBoxTorre = ({labelInput, labelCheck, id, context}) => {
  const [isChecked, setIsChecked] = React.useState(false)
  const [input, setInput] = React.useState('')
  const {adicionarCheck} = React.useContext(TorreContext)

  const handleCheckBoxChange = () =>{
    adicionarCheck(`${id}Check`, !isChecked)
    setIsChecked(!isChecked)
  }

  return (
    <div className='flex flex-col gap-2'>
      <InputsCheckBox 
        id={id} 
        value={isChecked} 
        onClick={handleCheckBoxChange} 
        label={labelCheck}
      />

      {isChecked && labelInput !== null && (
        <div>
          <InputMetragem
            className='flex-col gap-3'
            id={id}
            value={input}
            label={labelInput}
            context={context}
          />
       </div>
      )}

    </div>
  )
}

export default CheckBoxTorre