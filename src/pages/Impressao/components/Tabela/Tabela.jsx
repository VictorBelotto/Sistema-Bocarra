import React from 'react';
import styles from './Tabela.module.css'; 
import TabelaParte from '../TabelaParte/TabelaParte';
import { OrcamentoContext } from '../../../../scripts/OrcamentoContext.jsx';
import { FormataDescricaoLona } from '../../../../scripts/FormataDescricaoLona.js';
import { OrcamentosEstruturasContext } from '../../../../context/OrcamentoEstruturasContext.jsx';
import { FormataDescricaoEstrutura } from '../../../../scripts/FormataDescricaoEstrutura.js';

const Tabela = () => {
  const {orcamentoExportado} = React.useContext(OrcamentoContext)
  const {orcamentosEstruturasExportado} = React.useContext(OrcamentosEstruturasContext)
  const [orcamentosLonas, setOrcamentosLonas] = React.useState([])
  const [orcamentosEstruturas, setOrcamentosEstruturas] = React.useState([])

  React.useEffect(()=>{
    let orcamentoFormatado = FormataDescricaoLona(orcamentoExportado)
    setOrcamentosLonas(orcamentoFormatado)
  }, [orcamentoExportado])

  React.useEffect(()=>{
    let orcamentoFormatado = FormataDescricaoEstrutura(orcamentosEstruturasExportado)
    setOrcamentosEstruturas(orcamentoFormatado)
  }, )

  const rows = 10

  const dados = [
    { quantidade: '', descricao: '', precoUnitario: '', total:'' },
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
      <TabelaParte dados={orcamentosLonas} linhasMinimas={rows} nomeParte={'Lona'} />
      <TabelaParte dados={orcamentosEstruturas} linhasMinimas={rows} nomeParte={'Estrutura Metálica'} />
      <TabelaParte dados={dados} linhasMinimas={rows} nomeParte={'Acessórios'} />
    </table>
  );
};

export default Tabela;
