import React from 'react'
import { OrcamentoContext } from "../../../../scripts/OrcamentoContext.jsx";
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext.jsx';

const DadosFormatados = () => {
  const {orcamentos} = React.useContext(OrcamentoContext)
  const {dadosInseridos} = React.useContext(DadosInseridosContext)
 
  return (
    <div></div>
  )
}

export default DadosFormatados