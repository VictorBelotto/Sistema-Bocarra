import React from 'react';
import {OrcamentoContext} from '../../scripts/OrcamentoContext.jsx'
import { usePopup } from '../../context/PopupContext.jsx';
import { X } from 'lucide-react';

const CardOrcamentoLona = ({ orcamento, index}) => {
  const { removerOrcamento } = React.useContext(OrcamentoContext);
  const {showPopup} = usePopup();
  const [infoCompleta, setInfoCompleta] = React.useState(false)

  const handleClick = () => {
    setInfoCompleta(!infoCompleta)
  };

  const valorTotal = (
    parseFloat(orcamento.valor) + 
    (orcamento.possuiFechamento ? parseFloat(orcamento.valorFechamento) : 0) + 
    (orcamento.possuiAranha ? parseFloat(orcamento.valorFechamentoAranha) : 0)
).toFixed(2);


  const valorDoImosto = parseFloat((valorTotal * 0.15)).toFixed(2)
  const valorComImposto = (parseFloat(valorDoImosto) + parseFloat(valorTotal)).toFixed(2);

  const valorFormatado = (valor) => {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const handleClickRemover = () =>{
    removerOrcamento(index)
    showPopup('Orçamento removido da lista', 'red')
  }

  return (
    <main 
      onClick={handleClick} 
      className='flex p-3 flex-col gap-4 w-80 h-fit bg-card-contraste  text-slate-100 rounded-2xl cursor-pointer 
      shadow-card outline-none hover:outline-indigo-600'
    >
    <div className='flex justify-between items-center' >
      <h2 className='text-xl text-purple-400 font-semibold' >Informações da Lona</h2>
      <button className='rounded-full flex justify-center items-center w-10 h-10  p-0 bg-fundo-verde hover:bg-fundo-verdeH'
        onClick={handleClickRemover}
      >
        <X color="black"/>
      </button>
    </div>
    <span className='w-3/4 pt-0.5 bg-slate-600 '></span>
      <p><strong className='text-fundo-verdeH' >Modelo :</strong> {orcamento.modelo}</p>
      <p><strong className='text-fundo-verdeH' >Medidas :</strong> {orcamento.larguraDaLona}m x {orcamento.comprimentoDaLona}m </p>
      <p><strong className='text-fundo-verdeH' >Material :</strong> {orcamento.material}</p>
      {!infoCompleta &&(<p className='text-base' >Clique para mais Informações...</p>)}
     {infoCompleta && (
       <>
        <p><strong className='text-fundo-verdeH' >Metragem :</strong> {orcamento.metragemQuadrada.lona} <strong>m²</strong></p>
        <p><strong className='text-fundo-verdeH' >Dias de Trabalho :</strong> {orcamento.diasDeTrabalho.lona} dias</p>
        <p><strong className='text-fundo-verdeH' >Valor :</strong> {valorFormatado(Number(orcamento.valor))}</p>
        <p><strong className='text-fundo-verdeH' >Mão de Obra :</strong> {valorFormatado(Number(orcamento.maoDeObra))}</p>
          {
            orcamento.possuiFechamento && (
              <>
                <span className='w-3/4 pt-0.5 bg-slate-600 '></span>
                <h2 className='text-xl text-purple-400  font-semibold mt-1 '>Informações do Fechamento</h2>
                <p><strong className='text-fundo-verdeH' >Medidas : </strong> {(orcamento.metragemQuadrada.fechamento / orcamento.alturaFechamento).toFixed(1)}m x {orcamento.alturaFechamento}m</p>
                <p><strong className='text-fundo-verdeH' >Metragem :</strong> {orcamento.metragemQuadrada.fechamento} <strong>m²</strong></p>
                <p><strong className='text-fundo-verdeH' >Dias de Trabalho Fechamento :</strong> {orcamento.diasDeTrabalho.fechamento} dias</p>
                <p><strong className='text-fundo-verdeH' >Valor do fechamento :</strong> {valorFormatado(Number(orcamento.valorFechamento))}</p>
              </>
            )
          }
            
          {
            orcamento.possuiAranha && (
              <>
                 <span className='w-3/4 pt-0.5 bg-slate-600 '></span>       
                <h2 className='text-xl text-purple-400  font-semibold mt-1 '>Informações da Aranha</h2>
                <p><strong className='text-fundo-verdeH' >Medidas : </strong> {(orcamento.metragemQuadrada.aranha / orcamento.alturaAranha).toFixed(1)}m x {orcamento.alturaAranha}m</p>
                <p><strong className='text-fundo-verdeH' >Metragem :</strong> {orcamento.metragemQuadrada.aranha} <strong>m²</strong></p>
                <p><strong className='text-fundo-verdeH' >Dias de Trabalho Aranha :</strong> {orcamento.diasDeTrabalho.aranha} dias</p>
                <p><strong className='text-fundo-verdeH' >Valor da Aranha :</strong> {valorFormatado(Number(orcamento.valorFechamentoAranha))}</p>
              </>
            )
          }
         <span className='w-3/4 pt-0.5 bg-slate-600 '></span>       
        <h2 className='text-xl text-purple-400  font-semibold mt-1 '>Valores</h2>
        <p><strong className='text-fundo-verdeH'>Total :</strong>  {valorFormatado(Number(valorTotal))}</p> 
        <p><strong className='text-red-500'>Impostos : </strong>{valorFormatado(Number(valorDoImosto))}</p> 
        <p><strong className='text-fundo-verdeH'>Total com <span className='text-red-500'>impostos</span> : </strong>{valorFormatado(Number(valorComImposto))}</p> 
     </>
     )}
    </main>
  );
};

export default CardOrcamentoLona;
