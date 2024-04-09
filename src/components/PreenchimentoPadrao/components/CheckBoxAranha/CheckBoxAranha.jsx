import React from 'react'
import styles from './CheckBoxAranha.module.css'
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext';

const CheckBoxAranha = () => {
  const {dadosInseridos, adicionarDado, adicionarChecksDoOrcamento} = React.useContext(DadosInseridosContext)
  const [metragemFechamentoAranha, setMetragemFechamentoAranha] = React.useState(dadosInseridos.metragemFechamentoAranha);
  const [fechamentoAranhaIsChecked, setFechamentoAranhaIsChecked] = React.useState(false);
  const [diasDeTrabalhoAranha, setDiasDeTrabalhoAranha] = React.useState(dadosInseridos.diasDeTrabalhoAranha)

  React.useEffect(()=>{
    setMetragemFechamentoAranha(dadosInseridos.metragemFechamentoAranha)
  },[dadosInseridos.metragemFechamentoAranha])

  const handleMetragemFechamentoAranhaChange = (e) =>{
    const metragemFechamentoAtual = e.target.value
    setMetragemFechamentoAranha(metragemFechamentoAtual)
    adicionarDado('metragemFechamentoAranha', metragemFechamentoAtual)
  };
  const handleDiasDeTrabalhoAranhaChange = (e) =>{
    const diasDeTrabalhoAtual = e.target.value
    setDiasDeTrabalhoAranha(diasDeTrabalhoAtual)
  adicionarDado('diasDeTrabalhoAranha', diasDeTrabalhoAtual)
  };

  const handleCheckFechamentoAranhaChange = () =>{
    setFechamentoAranhaIsChecked(!fechamentoAranhaIsChecked)
    adicionarChecksDoOrcamento('fechamentoAranhaIsChecked', !fechamentoAranhaIsChecked)
  }

  return (
    <>
      <div className={styles.checkBox}>
        <label htmlFor="aranhaCheckbox">Adicionar Aranha?</label>
        <input
          type="checkbox"
          id="aranhaCheckbox"
          name="aranhaCheckbox"
          value="valorDoAranhaCheckbox"
          defaultChecked={fechamentoAranhaIsChecked}
          onClick={handleCheckFechamentoAranhaChange}
        />
      </div>

      {fechamentoAranhaIsChecked && (
        <div>
          <label htmlFor="metragemAranha">Metragem (m²) da aranha</label>
          <input type="number" id="metragemAranha" value={metragemFechamentoAranha} onChange={handleMetragemFechamentoAranhaChange} />

          <label htmlFor="diasDeTrabalhoAranha">Dias de trabalho da aranha</label>
          <input type="number" id="diasDeTrabalhoAranha" value={diasDeTrabalhoAranha} onChange={handleDiasDeTrabalhoAranhaChange} />
        </div>
      )}
    </>
 
  )
}

export default CheckBoxAranha