import React, { useContext } from 'react'
import { X } from 'lucide-react';
import formataValor from '../../scripts/formataValor'
import { useOrcamentosStore } from '../../context/OrcamentosStore';

const CardOrcamentoEstrutura = ({estrutura}) => {
  const [infoCompleta, setInfoCompleta] = React.useState(false)
  const removerOrcamentoEstrutura = useOrcamentosStore(state => state.removerOrcamentoEstrutura)
  
  const valorTotal = estrutura.reduce((a, item) => a + (item.value * item.quantidade), 0);

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
       <p><strong className='text-fundo-verdeH'>Quantidade:</strong> {item.quantidade} <strong className='text-purple-400'>X</strong> <strong 
       className='text-fundo-verdeH'>Valor :</strong> {formataValor(item.value * item.quantidade)}</p>
      
     </div>
  ))
) : (
  estrutura.map((item, index) => (
    <div key={index} className='gap-0.5 flex flex-col'>
      <p><strong className='text-purple-400'>{item.label}:</strong> </p>
      <p><strong className='text-fundo-verdeH'>Quantidade:</strong> {item.quantidade} <strong className='text-purple-400'>X</strong> <strong className='text-fundo-verdeH'>Valor :</strong> {formataValor(item.value * item.quantidade)}</p>
      <hr className='w-[75%] mb-2' />
      <p><strong className='text-red-400 h-3'>Valor total:</strong>{formataValor(valorTotal)} </p>
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
            <p className='flex gap-0.5'><strong className='text-fundo-verdeH'>Quantidade:</strong> {item.quantidade} <strong className='text-purple-400'>X</strong> <strong className='text-fundo-verdeH'>Valor :</strong> {formataValor(item.value * item.quantidade)}</p>
            
          </div>
        ))}
        <div>
          <hr className='w-[75%] mb-2' />
          <p><strong className='text-red-400 mt-1'>Valor total:</strong>{formataValor(valorTotal)} </p>
        </div>
      </>
    )}


    </main>
  )
}

export default CardOrcamentoEstrutura