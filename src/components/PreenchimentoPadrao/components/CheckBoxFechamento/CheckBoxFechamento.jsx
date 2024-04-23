import React from 'react'
import styles from './CheckBoxFechamento.module.css'
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext';
import InputMetragemQuadrada from '../../../InputMetragemQuadrada/InputMetragemQuadrada';
import InputDiasDeTrabalho from '../../../InputDiasDeTrabalho/InputDiasDeTrabalho';

const CheckBoxFechamento = () => {
  const {adicionarChecksDoOrcamento} = React.useContext(DadosInseridosContext)
    const [fechamentoIsChecked, setFechamentoIsChecked] = React.useState(false);


 
  const handleCheckFechamentoChange = () =>{
    setFechamentoIsChecked(!fechamentoIsChecked)
    adicionarChecksDoOrcamento('fechamentoIsChecked', !fechamentoIsChecked)
  }

  return (
    <>
      
      <div className={styles.checkBox}>
        <label htmlFor="checkBoxFechamentoOrcamento">Adicionar Fechamento?</label>
        <input
          type="checkbox"
          id="checkBoxFechamentoOrcamento"
          value="valorDoCheckbox"
          defaultChecked={fechamentoIsChecked}
          onClick={handleCheckFechamentoChange}
        />
      </div>

      {fechamentoIsChecked && (
        <div className={styles.metragemEDiasDeTrabalho} >
          <InputMetragemQuadrada id={'fechamento'} />
          <InputDiasDeTrabalho id={'fechamento'} />
        </div>
      )}
    </>
  )
}

export default CheckBoxFechamento