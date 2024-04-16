import React from 'react'
import styles from './Infos.module.css'

const Infos = () => {
  return (
    <div className={styles.mainContainer} >
    <div className={styles.containerCliente} >
      <div>
        <p>Orçamento para:</p>
        <span>Nome aqui aqui nome aqui</span>
      </div>
      <div>
        <p>CPF/CNPJ:</p>
        <span></span>
      </div>
      <div>
        <p>Endereço:</p>
        <span></span>
      </div>
    </div>

    <div className={styles.descricao} >
      <p>Descrição:</p>
      <textarea name="descricao" id="descricao" cols="50" rows="7" ></textarea>
    </div>


    </div>
  )
}

export default Infos