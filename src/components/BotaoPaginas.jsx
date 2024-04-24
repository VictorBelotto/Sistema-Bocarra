import React from 'react'

const BotaoPaginas = ({refPg, label}) => {
  return (
    <div className='flex p-2'>
      <a className='text-lg text-white font-semibold bg-purple-700 px-6 hover:bg-purple-800 py-2 rounded-lg shadow-button' href={refPg}>{label}</a>
    </div>
  )
}

export default BotaoPaginas 