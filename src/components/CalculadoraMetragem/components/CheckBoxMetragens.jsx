import React from 'react'
import { DadosInseridosContext } from '../../../scripts/DadosInseridosContext.jsx';
import InputsCheckBox from '../../InputsCheckBox/InputsCheckBox.jsx';
import { checkbox } from '@material-tailwind/react';
const CheckBoxMetragens = ({labelCheck, labelInput, id}) => {
  const dadosInseridos = React.useContext(DadosInseridosContext)
  const [fechamentoIsChecked, setFechamentoIsChecked] = React.useState(false)
  const [alturaFechamento, setAlturaFechamento] = React.useState('');

  const handleCheckboxChange = () => {
    setFechamentoIsChecked(!fechamentoIsChecked);
    dadosInseridos.adicionarCheckMetragem(`${id}IsChecked`, !fechamentoIsChecked )
  };

  const handleAlturaChange = (e) =>{
    setAlturaFechamento(e.target.value)
    dadosInseridos.adicionarMetragem(`altura${id.charAt(0).toUpperCase() + id.slice(1)}`, e.target.value)
  }
  return (
   <div key={id}>
     <div className='flex items-center mb-4'>

    <InputsCheckBox
      label={labelCheck}
      id={id}
      onClick={handleCheckboxChange}
      value={fechamentoIsChecked}
    />
     </div>

      {
        fechamentoIsChecked && (
          <div className='flex flex-col gap-2' >
            <label className='container text-white' htmlFor={id}>{labelInput}</label>
            <input 
            className='w-36 bg-card-contraste text-white border-none'
              type="number" 
              id={id}
              value={alturaFechamento} 
              onChange={handleAlturaChange} />
          </div>
        )
      }
   </div>
  )
}

export default CheckBoxMetragens