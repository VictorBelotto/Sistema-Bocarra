import React from 'react'
import CardHeader from '../components/CardHeader'
import formataValor from '../../../scripts/formataValor'

const CardOrcamentoAcessorios = ({acessorios}) => {

  return (
    <main
      /* onClick={handleClick}  */
      className='flex p-3 flex-col gap-3 w-80 min-h-[242px] h-fit bg-card-contraste  text-slate-100 rounded-2xl cursor-pointer 
      shadow-card outline-none hover:outline-indigo-600'
    >
      <CardHeader title={'Acessórios'} type={'acessorio'}/>
    
      {acessorios.map(({label, quantidade, valor}, index) => ( 
        <div  key={index} className='gap-0.5 flex flex-col text-slate-100'>
          <span className='w-3/4 pt-0.5 bg-slate-600 '></span>
          <h2 className='text-xl text-purple-400  font-semibold mt-1 '>{label}</h2>
          <p><strong className='text-fundo-verdeH' >Quantidade :</strong> {quantidade}</p>
          <p><strong className='text-red-500' >Valor :</strong> {formataValor(Number(Number(valor) * Number(quantidade)))}</p>
        </div>
      ))}
    
    </main>
  )
}

export default CardOrcamentoAcessorios