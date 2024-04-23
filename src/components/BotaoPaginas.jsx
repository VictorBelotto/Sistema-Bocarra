import React from 'react'

const BotaoPaginas = ({refPg, label}) => {
  return (
    <>
      <a className='text-xl text-white font-bold bg-redBocarra-d px-4 py-2 rounded-lg' href={refPg}>{label}</a>
    </>
  )
}

export default BotaoPaginas