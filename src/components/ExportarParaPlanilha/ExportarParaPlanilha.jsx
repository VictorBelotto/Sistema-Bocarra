import React from 'react'
import BotaoPadrao from '../Botoes/BotaoPadrao'
import { useOrcamentosStore } from '../../context/OrcamentosStore'

const ExportarParaPlanilha = () => {
  const [orcamentosLona, setOrcamentoLonaExportado, orcamentosEstruturas, setOrcamentoEstruturaExportado] = useOrcamentosStore(state =>
    [state.orcamentosLona, state.setOrcamentoLonaExportado, state.orcamentosEstruturas, state.setOrcamentoEstruturaExportado]
  )

  const exportar = () => {
    setOrcamentoLonaExportado(orcamentosLona)
    setOrcamentoEstruturaExportado(orcamentosEstruturas)
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