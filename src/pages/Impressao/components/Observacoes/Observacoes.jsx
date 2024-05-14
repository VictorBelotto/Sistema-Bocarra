import React from 'react'
import styles from './Observacoes.module.css'
const Observacoes = () => {
  const [frete, setFrete] = React.useState(false)
  const [estrutura, setEstrutura] = React.useState(false)

  return (
    <div className={styles.mainContainer} >
      <h3>Observações</h3>
      <span className={styles.detalhe} ></span>

      <div
        onClick={() => setFrete(!frete)}
        style={{ display: 'flex', gap: '4px', cursor: 'pointer' }}
      >
        <p>Frete e Instalação: </p>
        {frete ? <p> Incluso</p> : <p> Não incluso</p>}
      </div>

      <div
        onClick={() => setEstrutura(!estrutura)}
        style={{ display: 'flex', gap: '4px', cursor: 'pointer' }}
      >
        <p>Estrutura Metálica:</p>
        {estrutura ? <p> Incluso</p> : <p> Não incluso</p>}
      </div>


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