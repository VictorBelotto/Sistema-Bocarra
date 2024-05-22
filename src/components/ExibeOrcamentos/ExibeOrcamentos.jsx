import React from 'react'
import CardOrcamentoLona from '../CardOrcamentoLona/CardOrcamentoLona';
import { useOrcamentosStore } from '../../context/OrcamentosStore.js';
import CardOrcamentoEstruturas from '../CardsOrcamento/CardOrcamentoEstruturas/CardOrcamentoEstruturas.jsx';
import CardOrcamentoAcessorios from '../CardsOrcamento/CardOrcamentoAcessorios/CardOrcamentoAcessorios.jsx';

const ExibeOrcamentos = () => {
  const [orcamentosLona, orcamentosEstruturas, orcamentoAcessorios] = useOrcamentosStore(state =>  [state.orcamentosLona, state.orcamentosEstruturas, state.orcamentoAcessorios])

  return (
      <div className='flex w-fit flex-wrap gap-4'>
        {orcamentosLona.map((orcamento, index) => (
          <CardOrcamentoLona key={index} orcamento={orcamento} index={index}/>
        ))}
        {orcamentosEstruturas.length > 0 &&(
          <>
            <CardOrcamentoEstruturas key={'CardEstruturas'} estruturas={orcamentosEstruturas} />
          </>
        )}
        {orcamentoAcessorios.length > 0 &&(
          <>
            <CardOrcamentoAcessorios key={'cardAcessorios'} acessorios={orcamentoAcessorios} />
          </>
        )}
        
      </div>
  )
}

export default ExibeOrcamentos