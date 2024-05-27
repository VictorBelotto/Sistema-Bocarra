import React from 'react'
import styles from './Valores.module.css'
import formataValor from '../../../../scripts/formataValor'
import { useValoresOrcamentosStore } from '../../../../context/ValoresOrcamentosStore'
import { useValoresImpressaoStore } from '../../../../context/ValoresImpressaoStore'

function Valores() {
  const { lona, estrutura, acessorios } = useValoresOrcamentosStore(state => state.valoresTotais)
  const setValorTotalStore = useValoresImpressaoStore(state => state.setValorTotal)
  const [subtotal, setSubtotal] = React.useState(0)
  const [valorImposto, setValorImposto] = React.useState(0)
  const [valorTotal, setValorTotal] = React.useState(0)
  const [viewImposto, setViewImposto] = React.useState(false)
  const [prazo, setPrazo] = React.useState('90 a 120 dias úteis')
  const [valorFrete, setValorFrete] = React.useState('0')
  const [toggleFrete, setToggleFrete] = React.useState('Frete + Instalação')
  const [contador, setContador] = useValoresImpressaoStore(state => [state.contador, state.setContador]);

  React.useEffect(() => {
    setSubtotal(lona + estrutura + acessorios)

    const totalImposto = Number((subtotal * 0.15).toFixed(2))
    setValorImposto(totalImposto)
    
    if (viewImposto) {
      setValorTotal(subtotal + totalImposto + parseFloat(valorFrete.replace(/[^\d,-]/g, '').replace(',', '.')))
      setValorTotalStore(subtotal + totalImposto + parseFloat(valorFrete.replace(/[^\d,-]/g, '').replace(',', '.')))
    } else {
      setValorTotal(subtotal + parseFloat(valorFrete.replace(/[^\d,-]/g, '').replace(',', '.')))
      setValorTotalStore(subtotal + parseFloat(valorFrete.replace(/[^\d,-]/g, '').replace(',', '.')))
    }
  }, [lona, estrutura, acessorios, viewImposto, valorFrete, subtotal])

  const handleFreteChange = (event) => {
    setValorFrete(event.target.value)
  }

  const handleFreteBlur = () => {
    setValorFrete(formataValor(parseFloat(valorFrete.replace(/[^\d,-]/g, '').replace(',', '.')) || 0))
  }


  React.useEffect(() => {
    if (contador === 1) {
      setToggleFrete('Frete + Instalação');
    } else if (contador === 2) {
      setToggleFrete('Frete');
    } else if (contador === 3) {
      setToggleFrete('Instalação');
    }
  }, [contador]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerValores}>
        <h3>Subtotal:</h3>
        <p>{formataValor(subtotal)}</p>
      </div>
      <div className={styles.containerValores} onClick={() => setViewImposto(!viewImposto)}>
        <h3 className='cursor-pointer'>Impostos:</h3>
        {viewImposto && (
          <>
            <p>{formataValor(valorImposto)}</p>
          </>
        )}
      </div>
      <div className={styles.containerValores}>
        <h3 className='cursor-pointer'>{toggleFrete}</h3>
        <input
          className='text-end text-[10px]'
          type="text"
          value={valorFrete}
          onChange={handleFreteChange}
          onBlur={handleFreteBlur}
        />
      </div>
      <div className={styles.containerTotal}>
        <h3>Total:</h3>
        <p>{formataValor(valorTotal)}</p>
      </div>
      <div className={styles.containerPrazo}>
        <h3>Prazo de Entrega</h3>
        <span className={styles.detalhe}></span>
        <input
          className='text-end text-[10px]'
          type="text"
          value={prazo}
          onChange={({ target }) => setPrazo(target.value)}
        />
      </div>
    </div>
  )
}

export default Valores
