import React from 'react'
import styles from './Observacoes.module.css'
const Observacoes = () => {
  return (
    <div className={styles.mainContainer} >
      <h3>Observações</h3>
      <span className={styles.detalhe} ></span>
      <p>Frete e Instalação: </p>
      <p>Estrutura Metálica:</p>
      <p style={{textDecoration: 'underline'}} >Validade do Orçamento: <strong>15 dias</strong></p>

      <h3>Forma de pagamento</h3>
      <span className={styles.detalhe} ></span>
      <p>60% de entrada na assinatura do contrato</p>
      <p>40% de entrada na assinatura do contrato</p>

      <h3>Materiais</h3>
      <span className={styles.detalhe} ></span>
      <p>Lona</p>
      <p>Lona</p>
      <p>Lona</p>
      <p>Lona</p>

    </div>

  )
}

export default Observacoes