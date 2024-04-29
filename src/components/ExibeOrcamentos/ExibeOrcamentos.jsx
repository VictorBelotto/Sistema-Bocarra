import React from 'react'
import { OrcamentoContext } from '../../scripts/OrcamentoContext'
import CardOrcamentoLona from '../CardOrcamentoLona/CardOrcamentoLona';

const ExibeOrcamentos = () => {
  const {orcamentos} = React.useContext(OrcamentoContext);
  return (
    <div className='flex max-w-[1040px] rounded-lg bg-card-escuro shadow-card '>
      <div className='flex w-fit flex-wrap  p-6 gap-4'>
        {orcamentos.map((orcamento, index) => (
          <CardOrcamentoLona key={index} orcamento={orcamento} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default ExibeOrcamentos