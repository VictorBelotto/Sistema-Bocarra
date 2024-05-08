import React from 'react'
import { OrcamentoContext } from '../../scripts/OrcamentoContext'
import CardOrcamentoLona from '../CardOrcamentoLona/CardOrcamentoLona';
import {OrcamentosEstruturasContext} from '../../context/OrcamentoEstruturasContext.jsx'
import CardOrcamentoEstrutura from '../CardOrcamentoEstrutura/CardOrcamentoEstrutura.jsx';

const ExibeOrcamentos = () => {
  const {orcamentos} = React.useContext(OrcamentoContext);
  const {orcamentosEstruturas} = React.useContext(OrcamentosEstruturasContext)

  return (
    <>
      <div className='flex w-fit flex-wrap gap-4'>
        {orcamentos.map((orcamento, index) => (
          <CardOrcamentoLona key={index} orcamento={orcamento} index={index}/>
        ))}
        
          <CardOrcamentoEstrutura key={'card'} estrutura={orcamentosEstruturas} index={'card'}/>
      
      </div>
    </>
  )
}

export default ExibeOrcamentos