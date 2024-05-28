import React from 'react'
import TabelaAcessorios from './componets/TabelaAcessorios/TabelaAcessorios.jsx'
import TabelaEstruturas from './componets/TabelaEstruturas/TabelaEstruturas.jsx'

const CalculadoraEstruturas = () => {
  return (
    <div className='flex flex-col gap-6'>
      <TabelaEstruturas/>
      <TabelaAcessorios/>
    </div>

  )
}

export default CalculadoraEstruturas