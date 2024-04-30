import React from 'react'
import { OrcamentoContext } from '../../scripts/OrcamentoContext'
import CardOrcamentoLona from '../CardOrcamentoLona/CardOrcamentoLona';
import { getOrcamentosStorage } from '../../scripts/orcamentosStorage';

const ExibeOrcamentos = () => {
  const {orcamentos} = React.useContext(OrcamentoContext);

  return (
    <>
      <div className='flex w-fit flex-wrap gap-4'>
        {orcamentos.map((orcamento, index) => (
          <CardOrcamentoLona key={index} orcamento={orcamento} index={index}/>
        ))}
      </div>
    </>
  )
}

export default ExibeOrcamentos