import React from 'react'
import BotaoPadrao from '../Botoes/BotaoPadrao'
import { useOrcamentosStore } from '../../context/OrcamentosStore'

const ExportarParaPlanilha = () => {
  const [orcamentosLona, setOrcamentoLonaExportado, orcamentosEstruturas, setOrcamentoEstruturaExportado, orcamentoAcessorios,setOrcamentoAcessoriosExportado] = useOrcamentosStore(state =>
    [state.orcamentosLona, state.setOrcamentoLonaExportado, state.orcamentosEstruturas, state.setOrcamentoEstruturaExportado, state.orcamentoAcessorios,state.setOrcamentoAcessoriosExportado]
  )

  const exportar = () => {
    setOrcamentoLonaExportado(orcamentosLona)
    setOrcamentoEstruturaExportado(orcamentosEstruturas)
    setOrcamentoAcessoriosExportado(orcamentoAcessorios)
  }

  return (
    <>
      <BotaoPadrao
        label={'Exportar para Planilha'}
        variant={'verde'}
        onClick={exportar}
      />
    </>
  )
}

export default ExportarParaPlanilha