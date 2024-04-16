import React from 'react';
import styles from './Tabela.module.css'; 

const Tabela = () => {
  // Array de dados de exemplo para preencher a tabela
  const dados = [
    { quantidade: 2, descricao: 'Lona tensionada cupula trad 24 x 30', precoUnitario: 10, total: 20 },
    { quantidade: 3, descricao: 'Item 2', precoUnitario: 15, total: 45 },
    { quantidade: 1, descricao: 'Item 3', precoUnitario: 20, total: 20 },
    { quantidade: 4, descricao: 'Item 4', precoUnitario: 8, total: 32 },
    { quantidade: 2, descricao: 'Item 5', precoUnitario: 12, total: 24 },
    { quantidade: 3, descricao: 'Item 2', precoUnitario: 15, total: 45 },
    { quantidade: 3, descricao: 'Item 2', precoUnitario: 15, total: 45 },
    { quantidade: 1, descricao: 'Item 3', precoUnitario: 20, total: 20 },
    { quantidade: 4, descricao: 'Item 4', precoUnitario: 8, total: 32 },
    { quantidade: 2, descricao: 'Item 5', precoUnitario: 12, total: 24 },
  
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
      <tbody>
      <td  rowSpan="11" className={styles.celulaVertical}>Lona</td>
        {dados.map((item, index) => (
          <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#d9d9d9' : '#f2f2f2' }}>
            <td className={styles.quantidade}>{item.quantidade}</td>
            <td className={styles.descricao} >{item.descricao}</td>
            <td className={styles.precoUnitario} >{item.precoUnitario}</td>
            <td className={styles.total} >{item.total}</td>
          </tr>
        ))}
      </tbody>
      <tbody>
      <td rowSpan="11" className={`${styles.celulaVertical} ${styles.celulaVerticalEstrutura}`}>Estrutura Metálica</td>

        {dados.map((item, index) => (
          <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#d9d9d9' : '#f2f2f2' }}>
            <td className={styles.quantidade}>{item.quantidade}</td>
            <td className={styles.descricao} >{item.descricao}</td>
            <td className={styles.precoUnitario} >{item.precoUnitario}</td>
            <td className={styles.total} >{item.total}</td>
          </tr>
        ))}
      </tbody>
      <tbody>
      <td  rowSpan="11" className={styles.celulaVertical}>Acessórios</td>
        {dados.map((item, index) => (
          <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#d9d9d9' : '#f2f2f2' }}>
            <td className={styles.quantidade}>{item.quantidade}</td>
            <td className={styles.descricao} >{item.descricao}</td>
            <td className={styles.precoUnitario} >{item.precoUnitario}</td>
            <td className={styles.total} >{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
