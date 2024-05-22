import React from 'react'
import { X } from 'lucide-react';
import { useOrcamentosStore } from '../../../context/OrcamentosStore';


const CardHeader = ({title, type}) => {
  const [removerOrcamentoEstrutura, removerOrcamentoAcessorio] = useOrcamentosStore(state => 
    [state.removerOrcamentoEstrutura, state.removerOrcamentoAcessorio]
  )
  
  const handleClickRemover = () =>{
    if(type === 'estrutura'){
      removerOrcamentoEstrutura()
    }else if(type === 'acessorio'){
      removerOrcamentoAcessorio()
    }
  }

  return (
    <div className='flex justify-between items-center' >
      <h2 className='text-xl text-fundo-verdeH font-semibold'>{title}</h2>
      <button className='rounded-full flex justify-center items-center w-10 h-10  p-0 bg-purple-400 hover:bg-purple-500'
      onClick={handleClickRemover}
      >
      <X color="white"/>
    </button>

  </div>

  )
}

export default CardHeader