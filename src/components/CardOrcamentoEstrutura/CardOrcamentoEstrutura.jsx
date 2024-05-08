import React, { useContext } from 'react'
import { X } from 'lucide-react';
import { OrcamentosEstruturasContext } from '../../context/OrcamentoEstruturasContext';

const CardOrcamentoEstrutura = ({estrutura}) => {
  const [infoCompleta, setInfoCompleta] = React.useState(false)
  const {removerOrcamentoEstrutura} = useContext(OrcamentosEstruturasContext)


  const handleClick = () => {
    setInfoCompleta(!infoCompleta)
  };

  const handleClickRemover = () =>{
    removerOrcamentoEstrutura()
  }

  return (
    <main
      onClick={handleClick} 
      className='flex p-3 flex-col gap-3 w-80 min-h-[242px] h-fit bg-card-contraste  text-slate-100 rounded-2xl cursor-pointer 
      shadow-card outline-none hover:outline-indigo-600'
    >
      <div className='flex justify-between items-center' >
        <h2 className='text-xl text-fundo-verdeH font-semibold'>Estruturas e Acessórios</h2>
        <button className='rounded-full flex justify-center items-center w-10 h-10  p-0 bg-fundo-verde hover:bg-fundo-verdeH'
          onClick={handleClickRemover}
        >
          <X color="black"/>
        </button>

      </div>
      <span className='w-3/4 pt-0.5 bg-slate-600 '></span>

    
      {estrutura.length > 2 ? (
  estrutura.slice(0, 2).map((item, index) => (
    <div key={index} className='gap-0.5 flex flex-col'>
      <p><strong className='text-purple-400'>{item.label}:</strong> </p>
      <p><strong className='text-fundo-verdeH'>Quantidade:</strong> {item.quantidade} X <strong className='text-fundo-verdeH'>Valor Uni:</strong> {item.value}</p>
    </div>
  ))
) : (
  estrutura.map((item, index) => (
    <div key={index} className='gap-0.5 flex flex-col'>
      <p><strong className='text-purple-400'>{item.label}:</strong> </p>
      <p><strong className='text-fundo-verdeH'>Quantidade:</strong> {item.quantidade} X <strong className='text-fundo-verdeH'>Valor Uni:</strong> {item.value}</p>
    </div>
  ))
)}

    {estrutura.length > 2 && !infoCompleta && (
      <p className='text-base cursor-pointer ' onClick={handleClick}>Clique para mais informações...</p>
    )}

    {infoCompleta &&  estrutura.length > 2 && (
      <>
        {estrutura.slice(2).map((item, index) => (
          <div key={index}>
            <p><strong className='text-purple-400'>{item.label}:</strong> </p>
            <p><strong className='text-fundo-verdeH'>Quantidade:</strong> {item.quantidade} X <strong className='text-fundo-verdeH'>Valor Uni:</strong> {item.value}</p>
          </div>
        ))}
      </>
    )}


    </main>
  )
}

export default CardOrcamentoEstrutura