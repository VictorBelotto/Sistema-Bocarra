import React from 'react'
import styles from './BotaoPaginas.module.css'
const BotaoPaginas = ({refPg, label}) => {
  return (
    <div style={{display:'flex'}} >
      <a className={styles.btn} href={refPg}>{label}</a>
    </div>
  )
}

export default BotaoPaginas