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
      className='flex p-3 flex-col gap-4 w-80 h-fit bg-card-contraste  text-slate-100 rounded-2xl cursor-pointer shadow-card'

    >
    <div className='flex justify-between' >
      <h2 className='text-xl text-slate-300  font-semibold mt-1 ' >Informações da Lona</h2>
      <button className='rounded-full flex justify-center items-center w-10 h-10  p-0 bg-fundo-verde hover:bg-fundo-verdeH'
        onClick={handleClickRemover}
      >
        <X color="black"/>
      </button>
    </div>
    <span className='w-3/4 pt-0.5 bg-slate-600 '></span>
      <p><strong className='text-text-contraste' >Modelo :</strong> {orcamento.modelo}</p>
      <p><strong className='text-text-contraste' >Medidas :</strong> {orcamento.larguraDaLona}m x {orcamento.comprimentoDaLona}m </p>
      <p><strong className='text-text-contraste' >Material :</strong> {orcamento.material}</p>
      {!infoCompleta &&(<p className='text-base' >Clique para mais Informações...</p>)}
     {infoCompleta && (
       <>
        <p><strong className='text-text-contraste' >Metragem :</strong> {orcamento.metragemQuadrada.lona} <strong>m²</strong></p>
        <p><strong className='text-text-contraste' >Dias de Trabalho :</strong> {orcamento.diasDeTrabalho.lona} dias</p>
        <p><strong className='text-text-contraste' >Valor :</strong> {valorFormatado(Number(orcamento.valor))}</p>
        <p><strong className='text-text-contraste' >Mão de Obra :</strong> {valorFormatado(Number(orcamento.maoDeObra))}</p>
        <span className='w-3/4 pt-0.5 bg-slate-600 '></span>
        
          {
            orcamento.possuiFechamento && (
              <>
                <h2 className='text-xl text-slate-300  font-semibold mt-1 '>Informações do Fechamento</h2>
                <p><strong className='text-text-contraste' >Medidas : </strong> {(orcamento.metragemQuadrada.fechamento / orcamento.alturaFechamento).toFixed(1)}m x {orcamento.alturaFechamento}m</p>
                <p><strong className='text-text-contraste' >Metragem :</strong> {orcamento.metragemQuadrada.fechamento} <strong>m²</strong></p>
                <p><strong className='text-text-contraste' >Dias de Trabalho Fechamento :</strong> {orcamento.diasDeTrabalho.fechamento} dias</p>
                <p><strong className='text-text-contraste' >Valor do fechamento :</strong> {valorFormatado(Number(orcamento.valorFechamento))}</p>
              </>
            )
          }
          <span className='w-3/4 pt-0.5 bg-slate-600 '></span>          
          {
            orcamento.possuiAranha && (
              <>
                <h2 className='text-xl text-slate-300  font-semibold mt-1 '>Informações da Aranha</h2>
                <p><strong className='text-text-contraste' >Medidas : </strong> {(orcamento.metragemQuadrada.aranha / orcamento.alturaAranha).toFixed(1)}m x {orcamento.alturaAranha}m</p>
                <p><strong className='text-text-contraste' >Metragem :</strong> {orcamento.metragemQuadrada.aranha} <strong>m²</strong></p>
                <p><strong className='text-text-contraste' >Dias de Trabalho Aranha :</strong> {orcamento.diasDeTrabalho.aranha} dias</p>
                <p><strong className='text-text-contraste' >Valor da Aranha :</strong> {valorFormatado(Number(orcamento.valorFechamentoAranha))}</p>
                <span className='w-3/4 pt-0.5 bg-slate-600 '></span>
              </>
            )
          }
       
        <p><strong className='text-text-contraste'>Valor Total :</strong>  {valorFormatado(Number(valorTotal))}</p> 
        <p><strong className='text-text-contraste'>Valor dos impostos : </strong>{valorFormatado(Number(valorDoImosto))}</p> 
        <p><strong className='text-text-contraste'>Valor Total com imposto : </strong>{valorFormatado(Number(valorComImposto))}</p> 
        <span ></span>
     </>
     )}
    
    
   
    </main>
  );
};

export default CardOrcamentoLona;
