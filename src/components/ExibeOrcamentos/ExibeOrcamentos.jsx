import React from 'react'
import styles from './ExibeOrcamentos.module.css'
import { OrcamentoContext } from '../../scripts/OrcamentoContext'
import CardOrcamentoLona from '../CardOrcamentoLona/CardOrcamentoLona';

const ExibeOrcamentos = () => {
  const {orcamentos} = React.useContext(OrcamentoContext);
  return (
    <div className={styles.containerCards} >
    {orcamentos.map((orcamento, index) => (
      <CardOrcamentoLona key={index} orcamento={orcamento} index={index}/>
    ))}
  </div>
  )
}

export default ExibeOrcamentos