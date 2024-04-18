import React from 'react'
import styles from './ExibePopUp.module.css'
const ExibePopUp = ({estado}) => {
  return (
    <>
      {estado && (
      <>
      <div  style={{backgroundColor:estado.cor,  position:'fixed', bottom:'60px', left:'8px', padding:'8px 16px', borderRadius:'5px'}} >
       <span style={{color:'white', fontSize:'18px'}} >{estado.mensagem}</span>
      </div>
      </>
    )}
  </>
  )
}

export default ExibePopUp