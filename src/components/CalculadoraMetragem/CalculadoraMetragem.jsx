import React, { useState } from 'react';
import { calcularMetragem } from '../../scripts/CalculoMetragem.class';
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext.jsx';
import {DadosMetragemContext} from '../../context/DadosMetragemContext.jsx'

import CheckBoxMetragens from './components/CheckBoxMetragens.jsx';
import BotaoPadrao from '../Botoes/BotaoPadrao.jsx';
import InputMetragem from './components/InputMetragem.jsx';
import InputsCheckBox from '../InputsCheckBox/InputsCheckBox.jsx';

const CalculadoraMetragem = () => {
  const {dadosInseridos, dadosMetragem, adicionarDado, checksDaMetragem, resetaMetragem} = React.useContext(DadosInseridosContext)
  const [resultados, setResultados] = React.useState({});
  const [exibeResultado, setExibeResultado] = React.useState(false)
  const [marquiseIsChecked, setMarquiseIsChecked] = React.useState(false)

  const {setDadosMetragemOrcamento} = React.useContext(DadosMetragemContext)

  const adicionaResultado = (nome, valor) => {
    setResultados(prevState => ({
      ...prevState,
      [nome] : valor
    }))
  }

  const handleCheckMarquiseChange = () =>{
    setMarquiseIsChecked(!marquiseIsChecked)
  }

  const calcular = () => {
   const resultado = calcularMetragem(dadosMetragem, marquiseIsChecked )
   adicionaResultado('metragem', resultado['metragem'])
   adicionaResultado('fechamento', resultado['fechamento'])
   adicionaResultado('fechamentoDaAranha', resultado['fechamentoDaAranha'])
   adicionaResultado('perimetro', resultado['perimetro'])
    
   setExibeResultado(true)
  };

  const preencherOrcamento = () =>{
    setDadosMetragemOrcamento(dadosMetragem)
    adicionarDado('metragemQuadrada', {
      ...dadosInseridos.metragemQuadrada,
      lona: resultados.metragem,
      fechamento: resultados.fechamento,
      aranha: resultados.fechamentoDaAranha,
    });
    adicionarDado('perimetroLona', resultados.perimetro)
    setExibeResultado(false)
    setMarquiseIsChecked(false)
    resetaMetragem()
}

  return (
   <div className='flex flex-col w-fit h-fit py-4 px-6 rounded-lg bg-card-claro shadow-card bg-opacity-90'>
    
     <h1 className='ti-1 mb-3 text-fundo-verdeH'>Metragem da Lona</h1>

      <main className='flex w-fit h-fit m-0 gap-8'>
        <div className='flex w-fit flex-col gap-3'>
          <InputsCheckBox
              label={'Marquise Tradicional?'}
              id={'marquise'}
              onClick={handleCheckMarquiseChange}
              value={marquiseIsChecked}
            />
          <div className='flex justify-between'>
            <InputMetragem
              id={'largura'}
              label={'Largura'}
            />
            <InputMetragem
              id={'comprimento'}
              label={'Comprimento'}
            />
          </div>
          <div className='flex flex-col gap-4'>
            <CheckBoxMetragens
              labelCheck={'Adicionar Fechamento?'}
              id={'fechamentoMetragem'}
              labelInput={'Altura da Lona:'}
            />
            <CheckBoxMetragens
              labelCheck={'Adicionar Aranha?'}
              id={'aranhaMetragem'}
              labelInput={'Altura da Aranha:'}
            />
            <BotaoPadrao
                onClick={calcular}
                variant={'verde'}
                label={'Calcular Metragem'}
            />
          </div>
        </div>
        
   
  
      {
        exibeResultado && (
          <div className='flex gap-6'>
            <span className='h-full w-0.5 bg-slate-400'></span>

            <div className='flex h-full flex-col justify-between'>
              <div className='flex flex-col gap-3'>
                  <h2 className='ti-2 text-purple-400'>Resultado:</h2> 
                  <p className=' text-slate-100'><strong className='text-text-contraste' >Metragem Lona (m²):</strong> {resultados.metragem} m²</p>
                  <p className=' text-slate-100'><strong className='text-text-contraste' >Perimetro:</strong> {resultados.perimetro} m</p>
                  {
                    checksDaMetragem['fechamentoMetragemIsChecked'] &&(
                    <>
                      <p className=' text-slate-100'><strong className='text-text-contraste' >Fechamento (m²):</strong> {resultados.fechamento} m²</p>
                    </>
                    )
                  }
                  {
                    checksDaMetragem['aranhaMetragemIsChecked'] && (
                      <>
                        <p className=' text-slate-100'><strong className='text-text-contraste' >Aranha (m²): </strong>{resultados.fechamentoDaAranha} m²</p>
                      </>
                    )
                  }
              </div>

              <BotaoPadrao
                className='justify-self-end'
                  label={'Preencher no Orçamento'}
                  onClick={preencherOrcamento}
                  variant={'roxo'}
                />
            </div>

          </div>
        )
      }

      </main>
   </div>
  );
};

export default CalculadoraMetragem;
