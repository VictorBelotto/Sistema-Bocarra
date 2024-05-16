import React from 'react'
import styles from './Valores.module.css'
import formataValor from '../../../../scripts/formataValor'
import { useValoresOrcamentosStore } from '../../../../context/ValoresOrcamentosStore'

function Valores() {
  const {lona, estrutura, acessorios} = useValoresOrcamentosStore(state => state.valoresTotais)
  const [subtotal, setSubtotal ] = React.useState(0)
  const [imposto, setImposto] = React.useState(0)
  const [instalacaoFrete, setInstalacaoFrete] = React.useState(0)

  React.useEffect(()=>{
    const somaValoresTotais = lona + estrutura + acessorios
    setSubtotal(somaValoresTotais)

    setImposto(Number((somaValoresTotais * 0.15).toFixed(2)))
  }, [lona, estrutura, acessorios])
  
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