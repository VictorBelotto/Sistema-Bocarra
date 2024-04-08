import React from 'react'
import styles from './CheckBoxAranha.module.css'
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext.jsx';

const CheckBoxAranha = () => {
  const dadosInseridos = React.useContext(DadosInseridosContext)
  const [isChecked, setIsChecked] = React.useState(false)
  const [alturaAranha, setAlturaAranha] = React.useState('')

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
   <>
     <div className={styles.checkBox}>
      <label htmlFor="meuCheckbox">Adicionar Aranha?</label>
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
          <>
             <label htmlFor="aranha">Altura da Aranha (m²):</label>
             <input type="number" id="aranha" value={alturaAranha} onChange={(e) => setAlturaAranha(e.target.value)} />
          </>
        )
      }
   </>
  )
}

export default CheckBoxAranha