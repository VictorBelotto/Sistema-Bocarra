import React, { useState } from 'react';
import { calcularMetragem } from '../../scripts/CalculoMetragem.class';
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext.jsx';

import CheckBoxMetragens from './components/CheckBoxMetragens.jsx';
import BotaoPadrao from '../Botoes/BotaoPadrao.jsx';
import InputMetragem from './components/InputMetragem.jsx';
import InputsCheckBox from '../InputsCheckBox/InputsCheckBox.jsx';
import { X } from 'lucide-react';

const CalculadoraMetragem = () => {
  const {dadosInseridos, dadosMetragem, adicionarDado, checksDaMetragem} = React.useContext(DadosInseridosContext)
  const [resultados, setResultados] = React.useState({});
  const [exibeResultado, setExibeResultado] = React.useState(false)
  const [marquiseIsChecked, setMarquiseIsChecked] = React.useState(false)

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
    console.log(dadosMetragem)
   adicionaResultado('metragem', resultado['metragem'])
   adicionaResultado('fechamento', resultado['fechamento'])
   adicionaResultado('fechamentoDaAranha', resultado['fechamentoDaAranha'])
   adicionaResultado('perimetro', resultado['perimetro'])
    
   setExibeResultado(true)
  };

  const preencherOrcamento = () =>{
    adicionarDado('metragemQuadrada', {
      ...dadosInseridos.metragemQuadrada,
      lona: resultados.metragem,
      fechamento: resultados.fechamento,
      aranha: resultados.fechamentoDaAranha
    });
    
}

  return (
   <div className='flex flex-col  w-fit py-4 px-6 rounded-lg bg-card-claro shadow-card bg-opacity-90'>
    
     <h1 className='ti-1 mb-3 text-slate-300'>Metragem da Lona</h1>

      <main className='flex m-0 gap-8'>
        <div className='flex flex-col gap-3'>
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
          <div className='flex flex-col gap-3'>
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
          <div className='flex h-full gap-6'>
            <span className='h-full w-0.5 bg-slate-400'></span>

            <div className='flex h-full flex-col justify-between'>
              <div className='flex flex-col gap-2'>
                  <h2 className='ti-2 text-purple-400'>Resultado:</h2> 
                  <p className=' text-white'>Metragem Lona (m²): {resultados.metragem} m²</p>
                  <p className=' text-white'>Perimetro: {resultados.perimetro} m</p>
                  {
                    checksDaMetragem['fechamentoMetragemIsChecked'] &&(
                    <>
                      <p className=' text-white'>Fechamento (m²): {resultados.fechamento} m²</p>
                    </>
                    )
                  }
                  {
                    checksDaMetragem['aranhaMetragemIsChecked'] && (
                      <>
                        <p className=' text-white'>Aranha (m²): {resultados.fechamentoDaAranha} m²</p>
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
