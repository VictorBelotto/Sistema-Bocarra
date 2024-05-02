import React from 'react';
import styles from './Tabela.module.css'; 
import TabelaParte from '../TabelaParte/TabelaParte';
import { OrcamentoContext } from '../../../../scripts/OrcamentoContext';
import { getOrcamentosLonaStorage } from '../../../../scripts/orcamentosStorage';
import { Item } from '../../../../scripts/Item.class';
import {FormataDescricaoLona} from '../../../../scripts/FormataDescricaoLona.js'

const Tabela = () => {
  const rows = 10
  const {orcamentos} = React.useContext(OrcamentoContext)
  const orcamentosAtivos = getOrcamentosLonaStorage()
  const orcamentosFormatados = FormataDescricaoLona()



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
      <TabelaParte dados={orcamentosFormatados} linhasMinimas={rows} nomeParte={'Lona'} />
      <TabelaParte dados={dados} linhasMinimas={rows} nomeParte={'Estrutura Metálica'} />
      <TabelaParte dados={dados} linhasMinimas={rows} nomeParte={'Acessórios'} />
    </table>
  );
};

export default Tabela;
