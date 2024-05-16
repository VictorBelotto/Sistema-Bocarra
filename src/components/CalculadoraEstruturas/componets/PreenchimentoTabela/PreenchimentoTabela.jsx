import React from 'react';
import { ValoresDaEstrutura } from '../../../../scripts/ValoresDaEstrutura';
import BotaoPadrao from '../../../Botoes/BotaoPadrao.jsx'
import { useOrcamentosStore } from '../../../../context/OrcamentosStore.js';

const PreenchimentoTabela = () => {
  const [quantidades, setQuantidades] = React.useState(Array(ValoresDaEstrutura.length).fill(0));
  const [valoresUnitarios, setValoresUnitarios] = React.useState(ValoresDaEstrutura.map(item => item.valor));
  const adicionarOrcamentoEstruturas = useOrcamentosStore(state => state.adicionarOrcamentoEstruturas)

  function formatarValorBRL(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  const handleChangeQuantidade = (index, value) => {
    const newQuantidades = [...quantidades];
    newQuantidades[index] = value;
    setQuantidades(newQuantidades);
  };

  const handleChangeValorUnitario = (index, value) => {
    const newValoresUnitarios = [...valoresUnitarios];
    newValoresUnitarios[index] = parseFloat(value);
    setValoresUnitarios(newValoresUnitarios);
  };

  const adicionarOrcamento = () => {
    const itensPreenchidos = [];

    quantidades.forEach((qtd, index) => {
      if (qtd > 0) {
        const item = ValoresDaEstrutura[index];
        const orcamentoItem = {
          label: item.label,
          quantidade: qtd,
          value: valoresUnitarios[index]
        };
        itensPreenchidos.push(orcamentoItem);
      }
    });
    adicionarOrcamentoEstruturas(itensPreenchidos)
  };

  const handleWheel = (e) => {
    e.preventDefault();
    inputElem.current.blur();
  };

  const valorTotal = ValoresDaEstrutura.reduce((total, item, index) => total + valoresUnitarios[index] * quantidades[index], 0);

  return (
    <div className='flex flex-col px-6 py-4 shadow-card rounded-lg bg-card-escuro text-slate-100'>
      <h1 className='ti-1 mb-3 text-fundo-verdeH'>Estruturas e Acessórios</h1>
      <div className='flex py-2 bg-card-contraste gap-4 rounded-lg bg-opacity-70'>
        <h3 className='w-40 self-center  py-1 text-purple-400 uppercase font-medium'>Item</h3>
        <h3 className='w-32 self-center  py-1 text-purple-400 uppercase font-medium'>Valor Uni.</h3>
        <h3 className='w-28 self-center  py-1 text-purple-400 uppercase font-medium'>Quantidade</h3>
        <h3 className='w-28 self-center  py-1 text-purple-400 uppercase font-medium'>Subtotal</h3>
      </div>
      {ValoresDaEstrutura.map((item, index) => (
        <div className='flex border-b border-slate-500 py-1 gap-4' key={index}>
          <div className='w-40 py-1'>{item.label}</div>
          <div  className='w-32 py-1'>
            <input
              className='bg-card-contraste w-24 py-1 rounded-lg text-center'
              type="number"
              value={valoresUnitarios[index]}
              onWheel={() => document.activeElement.blur()}
              onChange={(e) => handleChangeValorUnitario(index, e.target.value)}
            />
          </div>
          <div className='w-28 py-1' >
            <input
              className='bg-card-contraste w-20 py-1 rounded-lg text-center'
              type="number"
              value={quantidades[index]}
              onWheel={() => document.activeElement.blur()}
              onChange={(e) => handleChangeQuantidade(index, parseInt(e.target.value))}
            />
          </div>
          <div className='w-28 py-2'>{formatarValorBRL(valoresUnitarios[index] * quantidades[index])}</div>
        </div>
      ))}
      <div className='flex justify-between items-center mt-4' >
        <div>
          <BotaoPadrao 
            label={'Adicionar Orçamento'} 
            onClick={adicionarOrcamento} 
            variant={'verde'} 
          />
        </div>
        <div className='rounded-lg w-fit bg-red-600 px-4 py-2'>
          <p>Total: {formatarValorBRL(valorTotal)}</p>
        </div>
      </div>
    </div>
  );
};

export default PreenchimentoTabela;
