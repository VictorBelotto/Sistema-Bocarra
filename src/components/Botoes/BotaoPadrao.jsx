import React from 'react'

const BotaoPadrao = ({label, onClick, variant}) => {
  const estilos = {
    roxo: 'text-white font-bold bg-fundo-roxo rounded-lg hover:bg-fundo-roxoH ',
    verde: 'text-black font-bold bg-fundo-verde rounded-lg hover:bg-fundo-verdeH'
  } 
  return (
    <>
      <button 
        className={estilos[variant]}
        onClick={onClick}
      >
        {label}
      </button>
    </>
  )
}

export default BotaoPadrao