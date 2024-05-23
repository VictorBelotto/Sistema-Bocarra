import React from 'react';
import styles from './Tabela.module.css';
import TabelaParte from '../TabelaParte/TabelaParte';
import { FormataDescricaoLona } from '../../../../scripts/FormataDescricaoLona.js';
import { FormataDescricaoEstrutura } from '../../../../scripts/FormataDescricaoEstrutura.js';
import { useOrcamentosStore } from '../../../../context/OrcamentosStore.js';
import { FormataDescricaoAcessorio } from '../../../../scripts/FormataDescricaoAcessorio.js';

const Tabela = () => {
  const [orcamentosLonaExportardo, orcamentosEstruturaExportardo, orcamentosAcessoriosExportardo] = useOrcamentosStore(state => 
    [state.orcamentosLonaExportardo, state.orcamentosEstruturaExportardo, state.orcamentosAcessoriosExportardo])
  const [orcamentosLonas, setOrcamentosLonas] = React.useState([])
  const [orcamentosEstruturas, setOrcamentosEstruturas] = React.useState([])
  const [orcamentosAcessorios, setOrcamentosAcessorios] = React.useState([])

  React.useEffect(() => {
    let orcamentoFormatado = FormataDescricaoLona(orcamentosLonaExportardo)
    setOrcamentosLonas(orcamentoFormatado)
  }, [orcamentosLonaExportardo])

  React.useEffect(() => {
    let orcamentosEstruturasOrganizados = FormataDescricaoEstrutura(orcamentosEstruturaExportardo)
    let orcamentosAcessoriosOrganizados = FormataDescricaoAcessorio(orcamentosAcessoriosExportardo)
    setOrcamentosEstruturas(orcamentosEstruturasOrganizados)
    setOrcamentosAcessorios(orcamentosAcessoriosOrganizados)
  }, [orcamentosEstruturaExportardo, orcamentosAcessoriosExportardo])

  const rows = 10

  const dados = [
    { quantidade: '', descricao: '', precoUnitario: '', total: '' },
  ];


  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.celulaVerticalHeader}></th>
          <th className={styles.quantidadeHeader}>QUANT.</th>
          <th className={styles.descricaoHeader}>DESCRIÇÃO</th>
          <th className={styles.precoUnitarioHeader}>PREÇ UNI</th>
          <th className={styles.totalHeader}>TOTAL</th>
        </tr>
      </thead>
      <TabelaParte dados={orcamentosLonas} linhasMinimas={rows} nomeParte={'Lona'} id={'lona'} />
      <TabelaParte dados={orcamentosEstruturas} linhasMinimas={rows} nomeParte={'Estrutura Metálica'} id={'estrutura'} />
      <TabelaParte dados={orcamentosAcessorios} linhasMinimas={rows} nomeParte={'Acessórios'} id={'acessorios'} />
    </table>
  );
};

export default Tabela;
