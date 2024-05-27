import React from 'react'
import { useValoresImpressaoStore } from '../../../../../context/ValoresImpressaoStore'
import formataValor from '../../../../../scripts/formataValor'
formataValor

const FormaDePagamento = () => {
  const valorTotal = useValoresImpressaoStore(state => state.valorTotal)

  return (
    <>
      <p>60% de entrada na assinatura do contrato : ({formataValor(valorTotal * 0.6)})</p>
      <p>40% na entrega dos itens : ({formataValor(valorTotal * 0.4)})</p>
    </>
  )
}

export default FormaDePagamento