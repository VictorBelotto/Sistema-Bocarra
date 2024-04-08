import React from 'react'
import styles from './CheckBoxFechamento.module.css'
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext.jsx';

const CheckBoxFechamento = () => {
  const dadosInseridos = React.useContext(DadosInseridosContext)
  const [isChecked, setIsChecked] = React.useState(false)
  const [alturaFechamento, setAlturaFechamento] = React.useState('');

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
   <>
     <div className={styles.checkBox}>
      <label htmlFor="meuCheckbox">Adicionar Fechamento?</label>
      <input 
        type="checkbox" 
        id="meuCheckbox" 
        name="meuCheckbox" 
        value="valorDoCheckbox"
        defaultChecked ={isChecked}
        onClick={handleCheckboxChange}
      />
     </div>

      {
        isChecked && (
          <div>
            <label htmlFor="altura">Altura do Fechamento da Lona (m²):</label>
            <input type="number" id="altura" value={alturaFechamento} onChange={(e) => setAlturaFechamento(e.target.value)} />
          </div>
        )
      }
   </>
  )
}

export default CheckBoxFechamento