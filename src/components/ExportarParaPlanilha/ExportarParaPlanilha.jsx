import React from 'react'
import { OrcamentoContext } from '../../scripts/OrcamentoContext'
import BotaoPadrao from '../Botoes/BotaoPadrao'
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext'
import { OrcamentosEstruturasContext } from '../../context/OrcamentoEstruturasContext'

const ExportarParaPlanilha = () => {
  const {orcamentos, setOrcamentoExportado} = React.useContext(OrcamentoContext)
  const {setOrcamentosEstruturasExportado, orcamentosEstruturas} = React.useContext(OrcamentosEstruturasContext)
  const {dadosMetragem} =React.useContext(DadosInseridosContext)

  const exportar = () =>{ 
    setOrcamentoExportado(orcamentos)
    setOrcamentosEstruturasExportado(orcamentosEstruturas)
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