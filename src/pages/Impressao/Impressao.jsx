import React from 'react'
import styles from './Impressao.module.css'
import Header from './components/Header/Header'
import Infos from './components/Infos/Infos'
import Tabela from './components/Tabela/Tabela'
import Observacoes from './components/Observacoes/Observacoes'
import Valores from './components/Valores/Valores'
import Footer from './components/Footer/Footer'

const Impressao = () => {
  return (
    <div className={styles.mainContainer} >
      <div className={styles.container} >
        <Header/>
        <Infos/>
        <Tabela/>
        <div style={{display:'flex', justifyContent: 'space-between'}} >
          <Observacoes/>
          <Valores/>
        </div>
        <Footer/>
      </div>
     
    </div>
  )
}

export default Impressao