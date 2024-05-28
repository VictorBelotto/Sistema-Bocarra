import React from 'react';
import { ValoresDaEstrutura } from '../../../../scripts/ValoresDaEstrutura';
import formataValor from '../../../../scripts/formataValor';

const Estruturas = ({ quantidades, valoresUnitarios, metragens, handleChangeQuantidade, handleChangeValorUnitario, handleChangeMetragem }) => {
  return (
    <div>
      <div className='flex py-1 gap-4'>
        <h2 className='w-40 ti-2 text-fundo-verdeH'>Itens</h2>
        <h2 className='w-32 '>Valor Uni.</h2>
        <h2 className='w-28'>Metragem</h2>
        <h2 className='w-28 '>Quant.</h2>
        <h2 className='w-28'>Total</h2>
      </div>
      {ValoresDaEstrutura.map((item, index) => (
        <div className='flex border-b border-slate-500 py-1 gap-4' key={index}>
          <div className='w-40 py-1'>{item.label}</div>
          <div className='w-32 py-1'>
            <input
              className='bg-card-contraste w-24 py-1 rounded-lg text-center'
              type="number"
              value={valoresUnitarios[index]}
              onWheel={() => document.activeElement.blur()}
              onChange={(e) => handleChangeValorUnitario(index, e.target.value)}
            />
          </div>
          <div className='w-28 py-1'>
              <input
                className='bg-card-contraste w-20 py-1 rounded-lg text-center'
                type="number"
                value={metragens[index]}
                onWheel={() => document.activeElement.blur()}
                onChange={(e) => handleChangeMetragem(index, parseFloat(e.target.value))}
              />
            </div>
          <div className='w-28 py-1'>
            <input
              className='bg-card-contraste w-20 py-1 rounded-lg text-center'
              type="number"
              value={quantidades[index]}
              onWheel={() => document.activeElement.blur()}
              onChange={(e) => handleChangeQuantidade(index, parseInt(e.target.value))}
            />
          </div>
          
          
         
          <div className='w-28 py-2'>{formataValor((valoresUnitarios[index] * metragens[index]) *quantidades[index] )}</div>
        </div>
      ))}
    </div>
  );
};

export default Estruturas;
