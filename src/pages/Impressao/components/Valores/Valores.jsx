import React from 'react'
import styles from './Valores.module.css'
import { OrcamentoContext } from '../../../../scripts/OrcamentoContext'
import formataValor from '../../../../scripts/formataValor'



function Valores() {
  const {valorTotal} = React.useContext(OrcamentoContext)
  const [subtotal, setSubtotal ] = React.useState(0)
  const [imposto, setImposto] = React.useState(0)
  const [instalacaoFrete, setInstalacaoFrete] = React.useState(0)

  React.useEffect(()=>{
    setSubtotal(valorTotal.total)
    setImposto(Number((subtotal * 0.15).toFixed(2)))
  }, [valorTotal])
  
  return (
    <div className={styles.mainContainer} >
      <div className={styles.containerValores} >
        <h3>Subtotal:</h3>
        <p>{formataValor(subtotal)}</p>
      </div>
      <div className={styles.containerValores} >
        <h3>Impostos:</h3>
        <p>{formataValor(imposto)}</p>
      </div>
      <div className={styles.containerValores} >
        <h3>Frete + Instalação: </h3>
        <p>{formataValor(instalacaoFrete)}</p>
      </div>
      <div className={styles.containerTotal} >
        <h3>Total:</h3>
        <p>{formataValor(subtotal + imposto + instalacaoFrete)}</p>
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