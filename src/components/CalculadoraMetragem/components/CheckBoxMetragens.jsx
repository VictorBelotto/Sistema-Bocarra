import React from 'react'
import InputsCheckBox from '../../InputsCheckBox/InputsCheckBox.jsx';
import { useCalculadoraMetragemStore } from '../../../context/CalculadoraMetragemStore.js';

const CheckBoxMetragens = ({labelCheck, labelInput, id}) => {
  const [adicionarCheckMetragem, adicionarMetragem, dadosMetragem, stateMetragem] = useCalculadoraMetragemStore(state =>
    [state.adicionarCheckMetragem, state.adicionarMetragem, state.dadosMetragem, state.stateMetragem]
  )

  const [fechamentoIsChecked, setFechamentoIsChecked] = React.useState(dadosMetragem.checkFechamento)
  const [alturaFechamento, setAlturaFechamento] = React.useState(dadosMetragem.alturaFechamento);
  

  React.useEffect(() =>{
    setAlturaFechamento(dadosMetragem.alturaFechamento)
    setFechamentoIsChecked(dadosMetragem.checkFechamento)
  },[stateMetragem])

  const handleCheckboxChange = () => {
    setFechamentoIsChecked(!fechamentoIsChecked);
   adicionarCheckMetragem(`${id}IsChecked`, !fechamentoIsChecked )
  };

  const handleAlturaChange = (e) =>{
    setAlturaFechamento(e.target.value)
   adicionarMetragem(`altura${id.charAt(0).toUpperCase() + id.slice(1)}`, e.target.value)
  }
  return (
   <div key={id} className='flex flex-col gap-2'> 
     <div>

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
            <label className='container text-slate-200' htmlFor={id}>{labelInput}</label>
            <input 
            className='focus:outline-purple-700 outline-none container py-1 w-20  text-slate-100 text-center  bg-card-contraste border-none rounded-md'
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