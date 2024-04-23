import React from 'react'
import styles from './CheckBoxAranha.module.css'
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext';
import InputMetragemQuadrada from '../../../InputMetragemQuadrada/InputMetragemQuadrada';
import InputDiasDeTrabalho from '../../../InputDiasDeTrabalho/InputDiasDeTrabalho';

const CheckBoxAranha = () => {
  const {dadosInseridos, adicionarChecksDoOrcamento} = React.useContext(DadosInseridosContext)
  const [fechamentoAranhaIsChecked, setFechamentoAranhaIsChecked] = React.useState(false);
 
  const handleCheckFechamentoAranhaChange = () =>{
    setFechamentoAranhaIsChecked(!fechamentoAranhaIsChecked)
    adicionarChecksDoOrcamento('fechamentoAranhaIsChecked', !fechamentoAranhaIsChecked)
  }

  return (
    <>
      <div className={styles.checkBox}>
        <label htmlFor="aranhaCheckboxOrcamento">Adicionar Aranha?</label>
        <input
          type="checkbox"
          id="aranhaCheckboxOrcamento"
          value={fechamentoAranhaIsChecked}
          onClick={handleCheckFechamentoAranhaChange}
        />
      </div>

      {fechamentoAranhaIsChecked && (
        <div className={styles.metragemEDiasDeTrabalho} >
          <InputMetragemQuadrada id={'aranha'}/>
          <InputDiasDeTrabalho id={'aranha'}/>
        </div>
      )}
    </>
 
  )
}

export default CheckBoxAranha