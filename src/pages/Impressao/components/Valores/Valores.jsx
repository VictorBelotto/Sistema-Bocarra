import React from 'react'
import styles from './Valores.module.css'

function Valores() {
  return (
    <div className={styles.mainContainer} >
      <div className={styles.containerValores} >
        <h3>Subtotal:</h3>
        <p>R$ 200.000.00</p>
      </div>
      <div className={styles.containerValores} >
        <h3>Impostos:</h3>
        <p>R$ 200.000.00</p>
      </div>
      <div className={styles.containerValores} >
        <h3>Frete + Instalação:</h3>
        <p>R$ 200.000.00</p>
      </div>
      <div className={styles.containerTotal} >
        <h3>Total:</h3>
        <p>R$ 200.000.00</p>
      </div>

      <div className={styles.containerPrazo} >
        <h3>Prazo de Entrega</h3>
        <span className={styles.detalhe} ></span>
        <p>Agosto</p>
      </div>

    </div>
  )
}

export default Valores