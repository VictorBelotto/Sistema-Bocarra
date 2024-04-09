import React from 'react'
import styles from './CheckBoxAranha.module.css'
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext.jsx';

const CheckBoxAranha = () => {
  const dadosInseridos = React.useContext(DadosInseridosContext)
  const [aranhaIsChecked, setAranhaIsChecked] = React.useState(false)
  const [alturaAranha, setAlturaAranha] = React.useState('')

  const handleCheckboxChange = () => {
    setAranhaIsChecked(!aranhaIsChecked);
    dadosInseridos.adicionarCheckMetragem('aranhaIsChecked', !aranhaIsChecked )
  };

  const handleAlturaAranhaChange = (e) => {
    setAlturaAranha(e.target.value)
    dadosInseridos.adicionarMetragem('alturaAranha', e.target.value)
  }
  return (
   <>
     <div className={styles.checkBox}>
      <label htmlFor="meuCheckbox">Adicionar Aranha?</label>
      <input 
        type="checkbox" 
        id="meuCheckbox" 
        name="meuCheckbox" 
        value="valorDoCheckbox"
        defaultChecked ={aranhaIsChecked}
        onClick={handleCheckboxChange}
      />
     </div>

      {
        aranhaIsChecked && (
          <>
             <label htmlFor="aranha">Altura da Aranha :</label>
             <input type="number" id="aranha" value={alturaAranha} onChange={handleAlturaAranhaChange} />
          </>
        )
      }
   </>
  )
}

export default CheckBoxAranha