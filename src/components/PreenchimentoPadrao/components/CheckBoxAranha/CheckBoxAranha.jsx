import React from 'react'
import styles from './CheckBoxAranha.module.css'
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext';

const CheckBoxAranha = () => {
  const inserirDados = React.useContext(DadosInseridosContext)
  const [metragemFechamentoAranha, setMetragemFechamentoAranha] = React.useState('');
  const [fechamentoAranhaIsChecked, setFechamentoAranhaIsChecked] = React.useState(false);
  const [diasDeTrabalhoAranha, setDiasDeTrabalhoAranha] = React.useState('')

  const handleMetragemFechamentoAranhaChange = (e) =>{
    const metragemFechamentoAtual = e.target.value
    setMetragemFechamentoAranha(metragemFechamentoAtual)
    inserirDados.adicionarDado('metragemFechamentoAranha', metragemFechamentoAtual)
  };
  const handleDiasDeTrabalhoAranhaChange = (e) =>{
    const diasDeTrabalhoAtual = e.target.value
    setDiasDeTrabalhoAranha(diasDeTrabalhoAtual)
    inserirDados.adicionarDado('diasDeTrabalhoAranha', diasDeTrabalhoAtual)
  };

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
          onClick={() => setFechamentoAranhaIsChecked(!fechamentoAranhaIsChecked)}
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