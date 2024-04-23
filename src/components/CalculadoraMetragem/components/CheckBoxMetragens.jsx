import React from 'react'
import { DadosInseridosContext } from '../../../scripts/DadosInseridosContext.jsx';
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
        <label className='pr-2' htmlFor={id}>{labelCheck}</label>
        <input 
        className='w-5 h-5 self-start mb-0' 
          type="checkbox" 
          id={id} 
          value={fechamentoIsChecked}
          onClick={handleCheckboxChange}
        />
     </div>

      {
        fechamentoIsChecked && (
          <div>
            <label htmlFor={id}>{labelInput}</label>
            <input 
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