import React from 'react'
import { OrcamentoContext } from '../../scripts/OrcamentoContext'
import CardOrcamentoLona from '../CardOrcamentoLona/CardOrcamentoLona';

const ExibeOrcamentos = () => {
  const {orcamentos} = React.useContext(OrcamentoContext);
  return (
    <div className='flex flex-wrap p-4 gap-6'>
    {orcamentos.map((orcamento, index) => (
      <CardOrcamentoLona key={index} orcamento={orcamento} index={index}/>
    ))}
  </div>
  )
}

export default ExibeOrcamentos