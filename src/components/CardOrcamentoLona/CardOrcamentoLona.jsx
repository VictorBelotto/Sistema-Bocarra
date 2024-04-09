import React from 'react';
import styles from './CardOrcamentoLona.module.css'; 
import {OrcamentoContext} from '../../scripts/OrcamentoContext.jsx'
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext.jsx';


const CardOrcamentoLona = ({ orcamento, index}) => {
  const { removerOrcamento } = React.useContext(OrcamentoContext);
  const {checksDoOrcamento} = React.useContext(DadosInseridosContext);

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
      <p><strong>Modelo:</strong> {orcamento.modelo}</p>
      <p><strong>Material:</strong> {orcamento.material}</p>
      <p><strong>Dias de Trabalho:</strong> {orcamento.diasDeTrabalho} dias</p>
      <p><strong>Metragem:</strong> {orcamento.metragem} <strong>m²</strong></p>
      <p><strong>Valor:</strong> {valorFormatado(Number(orcamento.valor))}</p>

        <p><strong>Valor do fechamento:</strong> {valorFormatado(Number(orcamento.fechamento))}</p>
        <p><strong>Dias de Trabalho Fechamento:</strong> {orcamento.diasDeTrabalhoFechamento} dias</p>
        
          <p><strong>Valor da Aranha:</strong> {valorFormatado(Number(orcamento.aranha))}</p>
          <p><strong>Dias de Trabalho Aranha:</strong> {orcamento.diasDeTrabalhoAranha} dias</p>
   

      <div>
       <button className={styles.btn_remover} onClick={handleClickRemover}>Remover</button>
      </div>
    </div>
  );
};

export default CardOrcamentoLona;
