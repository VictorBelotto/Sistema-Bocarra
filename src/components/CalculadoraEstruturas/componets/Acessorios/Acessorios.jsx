import React from 'react';
import { ValoresAcessorios } from '../../../../scripts/ValoresAcessorios';
import formataValor from '../../../../scripts/formataValor';

const Acessorios = ({ quantidades, valoresUnitarios, handleChangeQuantidade, handleChangeValorUnitario }) => {
  return (
    <div>
      <div className='flex py-1 gap-4'>
        <h2 className='w-40 ti-2 text-fundo-verdeH'>Acessorios</h2>
        <h2 className='w-32 '>Valor Uni.</h2>
        <h2 className='w-28 '>Quant.</h2>
        <h2 className='w-28'></h2>
        <h2 className='w-28'>Total</h2>
      </div>
      {ValoresAcessorios.map((item, index) => (
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
              value={quantidades[index]}
              onWheel={() => document.activeElement.blur()}
              onChange={(e) => handleChangeQuantidade(index, parseInt(e.target.value))}
            />
          </div>
          <h2 className='w-28'></h2>
          <div className='w-28 py-2'>{formataValor(valoresUnitarios[index] * quantidades[index])}</div>
        </div>
      ))}
    </div>
  );
};

export default Acessorios;
