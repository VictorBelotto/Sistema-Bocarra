import React from 'react'

const BotaoPadrao = ({label, onClick}) => {
  return (
    <>
      <button 
       className='bg-slate-900'
        onClick={onClick}
      >
        {label}
      </button>
    </>
  )
}

export default BotaoPadrao