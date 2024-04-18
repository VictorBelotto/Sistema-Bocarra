import React from 'react';
import styles from './Tabela.module.css'; 
import TabelaParte from '../TabelaParte/TabelaParte';

const Tabela = () => {
  const rows = 10
  const dados = [
    { quantidade: 1, descricao: 'Lona tensionada cupula trad 24 x 30', precoUnitario: 10, total: 20 },
   


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
      <TabelaParte dados={dados} linhasMinimas={rows} nomeParte={'Lona'} />
      <TabelaParte dados={dados} linhasMinimas={rows} nomeParte={'Estrutura Metálica'} />
      <TabelaParte dados={dados} linhasMinimas={rows} nomeParte={'Acessórios'} />
    </table>
  );
};

export default Tabela;
