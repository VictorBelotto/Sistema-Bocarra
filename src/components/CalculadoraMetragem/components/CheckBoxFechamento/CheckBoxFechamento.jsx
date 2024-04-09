import React from 'react'
import styles from './CheckBoxFechamento.module.css'
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext.jsx';

const CheckBoxFechamento = () => {
  const dadosInseridos = React.useContext(DadosInseridosContext)
  const [FechamentoisChecked, setFechamentoIsChecked] = React.useState(false)
  const [alturaFechamento, setAlturaFechamento] = React.useState('');

  const handleCheckboxChange = () => {
    setFechamentoIsChecked(!FechamentoisChecked);
  };

  const handleAlturaChange = (e) =>{
    setAlturaFechamento(e.target.value)
    dadosInseridos.adicionarMetragem('alturaFechamento', e.target.value)
    
  }
  return (
   <>
     <div className={styles.checkBox}>
      <label htmlFor="meuCheckbox">Adicionar Fechamento?</label>
      <input 
        type="checkbox" 
        id="meuCheckbox" 
        name="meuCheckbox" 
        value="valorDoCheckbox"
        defaultChecked ={FechamentoisChecked}
        onClick={handleCheckboxChange}
      />
     </div>

      {
        FechamentoisChecked && (
          <div>
            <label htmlFor="altura">Altura do Fechamento da Lona:</label>
            <input type="number" id="altura" value={alturaFechamento} onChange={handleAlturaChange} />
          </div>
        )
      }
   </>
  )
}

export default CheckBoxFechamento