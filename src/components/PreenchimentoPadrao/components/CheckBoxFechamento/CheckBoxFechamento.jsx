import React from 'react'
import styles from './CheckBoxFechamento.module.css'
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext';

const CheckBoxFechamento = () => {
  const {dadosInseridos, adicionarDado} = React.useContext(DadosInseridosContext)
  const [metragemFechamento, setMetragemFechamento] = React.useState(dadosInseridos.metragemFechamento);
  const [fechamentoIsChecked, setFechamentoIsChecked] = React.useState(false);
  const [diasDeTrabalhoFechamento, setDiasDeTrabalhoFechamento] = React.useState(dadosInseridos.diasDeTrabalhoFechamento)
  
  React.useEffect(()=>{
    setMetragemFechamento(dadosInseridos.metragemFechamento)
  }, [dadosInseridos.metragemFechamento])

  const handleMetragemFechamentoChange = (e) =>{
    const metragemFechamentoAtual = e.target.value
    setMetragemFechamento(metragemFechamentoAtual)
    adicionarDado('metragemFechamento', metragemFechamentoAtual)
  };

  const handleDiasDeTrabalhoFechamentoChange = (e) =>{
    const diasDeTrabalhoAtual = e.target.value
    setDiasDeTrabalhoFechamento(diasDeTrabalhoAtual)
    adicionarDado('diasDeTrabalhoFechamento', diasDeTrabalhoAtual)
  };

  return (
    <>
      
      <div className={styles.checkBox}>
        <label htmlFor="checkBoxFechamento">Adicionar Fechamento?</label>
        <input
          type="checkbox"
          id="checkBoxFechamento"
          name="checkBoxFechamento"
          value="valorDoCheckbox"
          defaultChecked={fechamentoIsChecked}
          onClick={() => setFechamentoIsChecked(!fechamentoIsChecked)}
        />
      </div>

      {fechamentoIsChecked && (
        <div>
          <label htmlFor="metragemFechamento">Metragem (m²) do fechamento</label>
          <input type="number" id="metragemFechamento" value={metragemFechamento} onChange={handleMetragemFechamentoChange} />

          <label htmlFor="diasDeTrabalhoFechamento">Dias de trabalho do fechamento</label>
          <input type="number" id="diasDeTrabalhoFechamento" value={diasDeTrabalhoFechamento} onChange={handleDiasDeTrabalhoFechamentoChange} />


        </div>
      )}
    </>
  )
}

export default CheckBoxFechamento