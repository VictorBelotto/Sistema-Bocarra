import React from 'react'
import { DadosInseridosContext } from '../../../scripts/DadosInseridosContext';
import InputMetragemQuadrada from '../../InputMetragemQuadrada/InputMetragemQuadrada';
import InputDiasDeTrabalho from '../../InputDiasDeTrabalho/InputDiasDeTrabalho';
import InputsCheckBox from '../../InputsCheckBox/InputsCheckBox';

const CheckBoxFechamentos = ({ id, label }) => {
  const { adicionarChecksDoOrcamento } = React.useContext(DadosInseridosContext)
  const [fechamentoIsChecked, setFechamentoIsChecked] = React.useState(false);

  const handleCheckFechamentoChange = () => {
    setFechamentoIsChecked(!fechamentoIsChecked)
    adicionarChecksDoOrcamento(`${id}IsChecked`, !fechamentoIsChecked)
  }

  return (
    <div key={id} className='flex flex-col gap-2 container'>
      <div className='flex items-center'>
        <InputsCheckBox
          label={label}
          id={id}
          value={fechamentoIsChecked}
          onClick={handleCheckFechamentoChange}
        />
      </div>

      {fechamentoIsChecked && (
        <div className='flex justify-between' >
          <InputMetragemQuadrada id={id} />
          <InputDiasDeTrabalho id={id} />
        </div>
      )}
    </div>
  )
}

export default CheckBoxFechamentos