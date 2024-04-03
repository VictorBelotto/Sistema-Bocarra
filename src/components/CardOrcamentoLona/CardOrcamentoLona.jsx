import React from 'react';
import styles from './CardOrcamentoLona.module.css'; // Importando o arquivo CSS de estilos
import {OrcamentoContext} from '../../scripts/OrcamentoContext.jsx'

const CardOrcamentoLona = ({ orcamento, index}) => {
  const { removerOrcamento } = React.useContext(OrcamentoContext);
  const valor = Number(orcamento.valor)
  const valorFormatado = valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

  const handleClickRemover = () =>{
    removerOrcamento(index)
  }

  return (
    <div className={styles.cardContainer}>
      <p><strong>Modelo:</strong> {orcamento.modelo}</p>
      <p><strong>Material:</strong> {orcamento.material}</p>
      <p><strong>Dias de Trabalho:</strong> {orcamento.diasTrabalho}</p>
      <p><strong>Metragem:</strong> {orcamento.metragem}</p>
      <p><strong>Valor:</strong> {valorFormatado}</p>
      <div>
       <button className={styles.btn_remover} onClick={handleClickRemover}>Remover</button>
      </div>
    </div>
  );
};

export default CardOrcamentoLona;
