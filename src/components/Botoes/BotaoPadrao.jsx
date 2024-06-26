import React from 'react'

const BotaoPadrao = ({label, onClick, variant}) => {
  const estilos = {
    roxo: 'text-white w-56  py-2 font-medium bg-fundo-roxo rounded-2xl hover:bg-fundo-roxoH ',
    verde: 'text-black font-semibold text w-56 py-2 bg-fundo-verde rounded-2xl hover:bg-fundo-verdeH'
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