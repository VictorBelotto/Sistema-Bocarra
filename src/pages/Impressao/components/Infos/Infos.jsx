import React from 'react'
import styles from './Infos.module.css'

const Infos = () => {
  const [nome, setNome] = React.useState('')

  return (
    <div className={styles.mainContainer} >
    <div className={styles.containerCliente} >
      <div>
        <p>Orçamento para:</p>
        <input 
        className={styles.input} 
        type="text" 
        value={nome}
        onChange={({target})=>setNome(target.value)}
        placeholder='Insira um nome...'
        />
      </div>
     
      
    </div>

    <div className={styles.descricao} >
      <p>Descrição:</p>
      <textarea name="descricao" id="descricao" cols="50" rows="3" placeholder='Insira uma descrição...'></textarea>
    </div>


    </div>
  )
}

export default Infos