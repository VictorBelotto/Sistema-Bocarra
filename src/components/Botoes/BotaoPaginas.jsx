import React from 'react'

const BotaoPaginas = ({refPg, label, icon}) => {
  return (
    <>
      <a className='flex gap-2 w-4/5 mt-2 text-left text-white py-2 px-4 bg-purple-700 bg-opacity-0 hover:bg-purple-800 rounded-2xl' 
      href={refPg}>
        {icon}{label}</a>
    </>
  )
}

export default BotaoPaginas 