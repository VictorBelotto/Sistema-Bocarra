import React from 'react'
import { OrcamentoContext } from '../../scripts/OrcamentoContext'
import BotaoPadrao from '../Botoes/BotaoPadrao'
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext'
import { setOrcamentosLonatorage } from '../../scripts/orcamentosStorage'

const ExportarParaPlanilha = () => {
  const {orcamentos, setOrcamentoExportado} = React.useContext(OrcamentoContext)
  const {dadosMetragem} =React.useContext(DadosInseridosContext)

  const exportar = () =>{ 
    setOrcamentoExportado(orcamentos)
    console.log(orcamentos)
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