import React from 'react';
import styles from './CardOrcamentoLona.module.css'; 
import {OrcamentoContext} from '../../scripts/OrcamentoContext.jsx'


const CardOrcamentoLona = ({ orcamento, index}) => {
  const { removerOrcamento } = React.useContext(OrcamentoContext);


  const valorFormatado = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const handleClickRemover = () =>{
    removerOrcamento(index)
  }

  return (
    <div className={styles.cardContainer}>
       <h3>Informações da Lona</h3>
      <p><strong>Modelo:</strong> {orcamento.modelo}</p>
      <p><strong>Medidas:</strong> {orcamento.larguraDaLona}m x {orcamento.comprimentoDaLona}m </p>
      <p><strong>Material:</strong> {orcamento.material}</p>
      <p><strong>Metragem:</strong> {orcamento.metragem} <strong>m²</strong></p>
      <p><strong>Dias de Trabalho:</strong> {orcamento.diasDeTrabalho} dias</p>
      <p><strong>Valor:</strong> {valorFormatado(Number(orcamento.valor))}</p>
      <span className={styles.divisao} ></span>
        {
          orcamento.possuiFechamento && (
            <>
              <h3>Informações do Fechamento</h3>
              <p><strong>Medidas: </strong> {(orcamento.metragemFechamento / orcamento.alturaFechamento).toFixed(1)}m x {orcamento.alturaFechamento}m</p>
              <p><strong>Dias de Trabalho Fechamento:</strong> {orcamento.diasDeTrabalhoFechamento} dias</p>
              <p><strong>Valor do fechamento:</strong> {valorFormatado(Number(orcamento.fechamento))}</p>
              <span className={styles.divisao} ></span>
            </>
          )
        }
        
         {
          orcamento.possuiAranha && (
            <>
              <h3>Informações da Aranha</h3>
              <p><strong>Medidas: </strong> {(orcamento.metragemFechamentoAranha / orcamento.alturaAranha).toFixed(1)}m x {orcamento.alturaAranha}m</p>
              <p><strong>Dias de Trabalho Aranha:</strong> {orcamento.diasDeTrabalhoAranha} dias</p>
              <p><strong>Valor da Aranha:</strong> {valorFormatado(Number(orcamento.aranha))}</p>
            </>
          )
         }
    
       <button className={styles.btn_remover} onClick={handleClickRemover}>Remover</button>
   
    </div>
  );
};

export default CardOrcamentoLona;
