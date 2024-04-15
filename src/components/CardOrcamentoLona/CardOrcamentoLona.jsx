import React from 'react';
import styles from './CardOrcamentoLona.module.css'; 
import {OrcamentoContext} from '../../scripts/OrcamentoContext.jsx'


const CardOrcamentoLona = ({ orcamento, index}) => {
  const { removerOrcamento } = React.useContext(OrcamentoContext);
  const valorTotal = (
    parseFloat(orcamento.valor) + 
    (orcamento.possuiFechamento ? parseFloat(orcamento.valorFechamento) : 0) + 
    (orcamento.possuiAranha ? parseFloat(orcamento.valorFechamentoAranha) : 0)
).toFixed(2);


  const valorDoImosto = parseFloat((valorTotal * 0.15)).toFixed(2)
  const valorComImposto = (parseFloat(valorDoImosto) + parseFloat(valorTotal)).toFixed(2);

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
      <p><strong>Metragem:</strong> {orcamento.metragemQuadrada.lona} <strong>m²</strong></p>
      <p><strong>Dias de Trabalho:</strong> {orcamento.diasDeTrabalho.lona} dias</p>
      <p><strong>Valor:</strong> {valorFormatado(Number(orcamento.valor))}</p>
      <span className={styles.divisao} ></span>
        {
          orcamento.possuiFechamento && (
            <>
              <h3>Informações do Fechamento</h3>
              <p><strong>Medidas: </strong> {(orcamento.metragemQuadrada.fechamento / orcamento.alturaFechamento).toFixed(1)}m x {orcamento.alturaFechamento}m</p>
              <p><strong>Metragem:</strong> {orcamento.metragemQuadrada.fechamento} <strong>m²</strong></p>
              <p><strong>Dias de Trabalho Fechamento:</strong> {orcamento.diasDeTrabalho.fechamento} dias</p>
              <p><strong>Valor do fechamento:</strong> {valorFormatado(Number(orcamento.valorFechamento))}</p>
              <span className={styles.divisao} ></span>
            </>
          )
        }
        
         {
          orcamento.possuiAranha && (
            <>
              <h3>Informações da Aranha</h3>
              <p><strong>Medidas: </strong> {(orcamento.metragemQuadrada.aranha / orcamento.alturaAranha).toFixed(1)}m x {orcamento.alturaAranha}m</p>
              <p><strong>Metragem:</strong> {orcamento.metragemQuadrada.aranha} <strong>m²</strong></p>
              <p><strong>Dias de Trabalho Aranha:</strong> {orcamento.diasDeTrabalho.aranha} dias</p>
              <p><strong>Valor da Aranha:</strong> {valorFormatado(Number(orcamento.valorFechamentoAranha))}</p>
              <span className={styles.divisao} ></span>
            </>
          )
         }

       <p>Valor Total : {valorFormatado(Number(valorTotal))}</p> 
       <p>Valor dos impostos : {valorFormatado(Number(valorDoImosto))}</p> 
       <p>Valor Total com imposto: {valorFormatado(Number(valorComImposto))}</p> 
       <span className={styles.divisao} ></span>
    
       <button className={styles.btn_remover} onClick={handleClickRemover}>Remover</button>
   
    </div>
  );
};

export default CardOrcamentoLona;
