import React from 'react';
import { usePopup } from '../../../context/PopupContext.jsx';
import { X } from 'lucide-react';
import formataValor from '../../../scripts/formataValor.js';
import { useOrcamentosStore } from '../../../context/OrcamentosStore.js';
import LinhaPadrao from '../components/LinhaPadrao.jsx';

const CardOrcamentoLona = ({ orcamento, index, tipo }) => {
  const removerOrcamentoLona = useOrcamentosStore(state => state.removerOrcamentoLona)
  const { showPopup } = usePopup();
  const [infoCompleta, setInfoCompleta] = React.useState(false)

  const handleClick = () => {
    setInfoCompleta(!infoCompleta)
  };

  const valorTotal = (
    parseFloat(orcamento.valor) +
    (orcamento.possuiFechamento ? parseFloat(orcamento.valorFechamento) : 0) +
    (orcamento.possuiAranha ? parseFloat(orcamento.valorFechamentoAranha) : 0)
  ).toFixed(2);

  const valorDoImposto = parseFloat((valorTotal * 0.15)).toFixed(2)
  const valorComImposto = (parseFloat(valorDoImposto) + parseFloat(valorTotal)).toFixed(2);

  const handleClickRemover = () => {
    removerOrcamentoLona(index)
    showPopup('Orçamento removido da lista', 'red')
  }

  return (
    <main
      onClick={handleClick}
      className='flex p-3 flex-col gap-4 w-80 min-h-[242px] h-fit bg-card-contraste  text-slate-100 rounded-2xl cursor-pointer 
      shadow-card outline-none hover:outline-indigo-600'
    >
      <div className='flex justify-between items-center' >
        <h2 className='text-xl text-purple-400 font-semibold' >Lona - {tipo}</h2>
        <button className='rounded-full flex justify-center items-center w-10 h-10  p-0 bg-fundo-verde hover:bg-fundo-verdeH'
          onClick={handleClickRemover}
        >
          <X color="black" />
        </button>
      </div>
      <span className='w-3/4 pt-0.5 bg-slate-600 '></span>
      <LinhaPadrao titulo={'Modelo'} descricao={orcamento.modelo.label} variante={'verde'} />
      <LinhaPadrao titulo={'Medidas'} descricao={`${orcamento.larguraDaLona}m x ${orcamento.comprimentoDaLona}m`} variante={'verde'} />
      <LinhaPadrao titulo={'Material'} descricao={orcamento.material} variante={'verde'} />

      {!infoCompleta && (<p className='text-base' >Clique para mais Informações...</p>)}
      {infoCompleta && (
        <>
          <LinhaPadrao titulo={'Metragem'} descricao={orcamento.metragemQuadrada.lona} variante={'verde'} />
          <LinhaPadrao titulo={'Dias de Trabalho'} descricao={orcamento.diasDeTrabalho.lona} variante={'verde'} />
          <LinhaPadrao titulo={'Mão de Obra'} descricao={formataValor(Number(orcamento.maoDeObra))} variante={'verdeDestaque'} />
          <LinhaPadrao titulo={'Valor da Lona'} descricao={formataValor(Number(orcamento.valor))} variante={'azul'} />
          {
            orcamento.possuiFechamento && (
              <>
                <span className='w-3/4 pt-0.5 bg-slate-600 '></span>
                <h2 className='text-xl text-purple-400 font-semibold mt-1'>Informações do Fechamento</h2>
                <LinhaPadrao titulo={'Medidas'} descricao={`${(orcamento.metragemQuadrada.fechamento / orcamento.alturaFechamento).toFixed(1)}m x ${orcamento.alturaFechamento}m`} variante={'verde'} />
                <LinhaPadrao titulo={'Metragem'} descricao={`${orcamento.metragemQuadrada.fechamento} m²`} variante={'verde'} />
                <LinhaPadrao titulo={'Dias de Trabalho Fechamento'} descricao={`${orcamento.diasDeTrabalho.fechamento} dias`} variante={'verde'} />
                <LinhaPadrao titulo={'Valor do fechamento'} descricao={formataValor(Number(orcamento.valorFechamento))} variante={'azul'} />
              </>
            )
          }

          {
            orcamento.possuiAranha && (
              <>
                <span className='w-3/4 pt-0.5 bg-slate-600 '></span>
                <h2 className='text-xl text-purple-400 font-semibold mt-1'>Informações da Aranha</h2>
                <LinhaPadrao titulo={'Medidas'} descricao={`${(orcamento.metragemQuadrada.aranha / orcamento.alturaAranha).toFixed(1)}m x ${orcamento.alturaAranha}m`} variante={'verde'} />
                <LinhaPadrao titulo={'Metragem'} descricao={`${orcamento.metragemQuadrada.aranha} m²`} variante={'verde'} />
                <LinhaPadrao titulo={'Dias de Trabalho Aranha'} descricao={`${orcamento.diasDeTrabalho.aranha} dias`} variante={'verde'} />
                <LinhaPadrao titulo={'Valor da Aranha'} descricao={formataValor(Number(orcamento.valorFechamentoAranha))} variante={'azul'} />
              </>
            )
          }
          <span className='w-3/4 pt-0.5 bg-slate-600 '></span>
          <h2 className='text-xl text-purple-400 font-semibold mt-1'>Valores</h2>
          <LinhaPadrao titulo={'Total'} descricao={formataValor(Number(valorTotal))} variante={'azul'} />
          <LinhaPadrao titulo={'Impostos'} descricao={formataValor(Number(valorDoImposto))} variante={'vermelho'} />
          <LinhaPadrao titulo={'Total com impostos'} descricao={formataValor(Number(valorComImposto))} variante={'verdeDestaque'} />
        </>
      )}
    </main>
  );
};

export default CardOrcamentoLona;
