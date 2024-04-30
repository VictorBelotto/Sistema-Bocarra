import React from 'react'
import { OrcamentoContext } from '../../scripts/OrcamentoContext'
import BotaoPadrao from '../Botoes/BotaoPadrao'
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext'
import { setOrcamentoStorage } from '../../scripts/orcamentosStorage'

const ExportarParaPlanilha = () => {
  const {orcamentos} = React.useContext(OrcamentoContext)
  const {dadosMetragem} =React.useContext(DadosInseridosContext)

  const exportar = () =>{ 
    setOrcamentoStorage(orcamentos)
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