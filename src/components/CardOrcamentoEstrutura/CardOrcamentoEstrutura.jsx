import React from 'react'
import { X } from 'lucide-react';

const CardOrcamentoEstrutura = () => {
  const [infoCompleta, setInfoCompleta] = React.useState(false)
  const estrutura = [
    { label: "Estacas Torre", quantidade: 21, value: 180.00 },
    { label: "Estacas", quantidade: 2, value: 180.00 },
    { label: "Estacas", quantidade: 1, value: 180.00 },
    { label: "Estacas", quantidade: 3, value: 180.00 },
    { label: "Estacas", quantidade: 4, value: 180.00 },
  ]

  const handleClick = () => {
    setInfoCompleta(!infoCompleta)
  };

  const handleClickRemover = () =>{
 
  }

  return (
    <main
      onClick={handleClick} 
      className='flex p-3 flex-col gap-4 w-80 h-fit bg-card-contraste  text-slate-100 rounded-2xl cursor-pointer 
      shadow-card outline-none hover:outline-indigo-600'
    >
      <div className='flex justify-between items-center' >
        <h2 className='text-xl text-fundo-verdeH font-semibold' >Informações da Lona</h2>
        <button className='rounded-full flex justify-center items-center w-10 h-10  p-0 bg-fundo-verde hover:bg-fundo-verdeH'
          onClick={handleClickRemover}
        >
          <X color="black"/>
        </button>

      </div>
      <span className='w-3/4 pt-0.5 bg-slate-600 '></span>

          {estrutura.slice(0, 2).map((item, index) => (
      <div key={index}>
        <p><strong className='text-purple-400'>{item.label}:</strong> </p>
        <p><strong className='text-fundo-verdeH'>Quantidade:</strong> {item.quantidade} X <strong className='text-fundo-verdeH'>Valor Uni:</strong> {item.value}</p>
      </div>
    ))}

    {estrutura.length > 2 && !infoCompleta && (
      <p className='text-base cursor-pointer ' onClick={handleClick}>Clique para mais informações...</p>
    )}

    {infoCompleta && (
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