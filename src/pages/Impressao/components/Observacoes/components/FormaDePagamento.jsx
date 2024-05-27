import React from 'react'
import { useValoresImpressaoStore } from '../../../../../context/ValoresImpressaoStore'
import formataValor from '../../../../../scripts/formataValor'
formataValor

const FormaDePagamento = () => {
  const valorTotal = useValoresImpressaoStore(state => state.valorTotal)

  return (
    <>
      <p><strong>60%</strong> de entrada na assinatura do contrato : ({formataValor(valorTotal * 0.6)})</p>
      <p><strong>40%</strong> na entrega dos itens : ({formataValor(valorTotal * 0.4)})</p>
    </>
  )
}

export default FormaDePagamento