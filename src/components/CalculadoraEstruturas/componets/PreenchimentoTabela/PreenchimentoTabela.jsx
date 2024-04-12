import React, { useState } from 'react';
import { ValoresDaEstrutura } from '../../../../scripts/ValoresDaEstrutura';
import styles from './PreenchimentoTabela.module.css';

const PreenchimentoTabela = () => {
  const [quantidades, setQuantidades] = useState(Array(ValoresDaEstrutura.length).fill(0));
  const [valoresUnitarios, setValoresUnitarios] = useState(ValoresDaEstrutura.map(item => item.valor));

  function formatarValorBRL(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  
  const handleChangeQuantidade = (index, value) => {
    const newQuantidades = [...quantidades];
    newQuantidades[index] = value;
    setQuantidades(newQuantidades);
  };

  const handleChangeValorUnitario = (index, value) => {
    const newValoresUnitarios = [...valoresUnitarios];
    newValoresUnitarios[index] = parseFloat(value);
    setValoresUnitarios(newValoresUnitarios);
  };

  const valorTotal = ValoresDaEstrutura.reduce((total, item, index) => total + valoresUnitarios[index] * quantidades[index], 0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.cell}>Item</h3>
        <h3 className={styles.cell}>Valor Unitário</h3>
        <h3 className={styles.cell}>Quantidade</h3>
        <h3 className={styles.cell}>Subtotal</h3>
      </div>
      {ValoresDaEstrutura.map((item, index) => (
        <div className={styles.row} key={index}>
          <div className={styles.cell}>{item.label}</div>
          <div className={styles.cell}>
            <input
              type="number"
              value={valoresUnitarios[index]}
              onChange={(e) => handleChangeValorUnitario(index, e.target.value)}
            />
          </div>
          <div className={styles.cell}>
            <input
              type="number"
              value={quantidades[index]}
              onChange={(e) => handleChangeQuantidade(index, parseInt(e.target.value))}
            />
          </div>
          <div className={styles.cell}>{formatarValorBRL(valoresUnitarios[index] * quantidades[index])}</div>
        </div>
      ))}
      <div className={styles.total}>
        <p>Total: {formatarValorBRL(valorTotal)}</p>
      </div>
    </div>
  );
};

export default PreenchimentoTabela;
