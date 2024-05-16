import React from 'react'
import CardOrcamentoLona from '../CardOrcamentoLona/CardOrcamentoLona';
import CardOrcamentoEstrutura from '../CardOrcamentoEstrutura/CardOrcamentoEstrutura.jsx';
import { useOrcamentosStore } from '../../context/OrcamentosStore.js';

const ExibeOrcamentos = () => {
  const [orcamentosLona, orcamentosEstruturas] = useOrcamentosStore(state =>  [state.orcamentosLona, state.orcamentosEstruturas])

  return (
    <>
      <div className='flex w-fit flex-wrap gap-4'>
        {orcamentosLona.map((orcamento, index) => (
          <CardOrcamentoLona key={index} orcamento={orcamento} index={index}/>
        ))}
        {orcamentosEstruturas.length > 0 &&(
          <>
            <CardOrcamentoEstrutura key={'card'} estrutura={orcamentosEstruturas} index={'card'}/>
          </>
        )}
      </div>
    </>
  )
}

export default ExibeOrcamentos