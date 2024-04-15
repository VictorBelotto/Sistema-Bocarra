import React from 'react'
import styles from './Impressao.module.css'
import Header from './components/Header/Header'

const Impressao = () => {
  return (
    <div className={styles.mainContainer} >
      <div className={styles.container} >
        <Header/>
      </div>

    </div>
  )
}

export default Impressao