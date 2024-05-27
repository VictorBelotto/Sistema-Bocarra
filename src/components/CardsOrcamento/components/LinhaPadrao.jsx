import React from 'react'

const LinhaPadrao = ({titulo, descricao, variante}) => {
  const variantes = {
    'verde': 'text-fundo-verdeH',
    'verdeDestaque': 'text-green-500',
    'azul': 'text-blue-600',
    'vermelho' : 'text-red-400'

  }

  return (
    <p><strong className={variantes[variante]}>{titulo} :</strong> {descricao}</p>
  )
}

export default LinhaPadrao