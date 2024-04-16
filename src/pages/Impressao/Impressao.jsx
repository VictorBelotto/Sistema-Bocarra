import React from 'react'
import styles from './Impressao.module.css'
import Header from './components/Header/Header'
import Infos from './components/Infos/Infos'
import Tabela from './components/Tabela/Tabela'

const Impressao = () => {
  return (
    <div className={styles.mainContainer} >
      <div className={styles.container} >
        <Header/>
        <Infos/>
        <Tabela/>
      </div>

    </div>
  )
}

export default Impressao