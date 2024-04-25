import React, { useState } from 'react';
import { calcularMetragem } from '../../scripts/CalculoMetragem.class';
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext.jsx';

import CheckBoxMetragens from './components/CheckBoxMetragens.jsx';
import BotaoPadrao from '../Botoes/BotaoPadrao.jsx';
import InputMetragem from './components/InputMetragem.jsx';
import InputsCheckBox from '../InputsCheckBox/InputsCheckBox.jsx';

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
    <div className='flex flex-col w-96 m-0 py-4 px-6 rounded-lg bg-card-claro shadow-card bg-opacity-90'>
      <h1 className='ti-1 mb-3 text-white'>Calculadora de Metragem</h1>

      <InputsCheckBox
        label={'Marquise Tradicional?'}
        id={'marquise'}
        onClick={handleCheckMarquiseChange}
        value={marquiseIsChecked}
      />
    
      <div className='flex justify-between mb-3'>
        <InputMetragem
          id={'largura'}
          label={'Largura'}
        />
        <InputMetragem
          id={'comprimento'}
          label={'Comprimento'}
        />
      </div>
      <CheckBoxMetragens
        id={'fechamentoMetragem'}
        labelCheck={'Adicionar Fechamento?'}
        labelInput={'Altura do Fechamento da Lona:'}
      />
      <CheckBoxMetragens
        id={'aranhaMetragem'}
        labelCheck={'Adicionar Aranha?'}
        labelInput={'Altura do Fechamento da Aranha:'}
      />
      
      <div className='flex container justify-center mt-2'>
        <BotaoPadrao
            onClick={calcular}
            variant={'verde'}
            label={'Calcular Metragem'}
          />
      </div>
  
    {
      exibeResultado && (
        <div className='flex flex-col gap-2 mt-5'>
        <h2 className='ti-2 text-white'>Resultado:</h2> 
        <p className=' text-white'>Metragem Lona (m²): {resultados.metragem} m²</p>
        <p className=' text-white'>Perimetro: {resultados.perimetro} m</p>
        {
          checksDaMetragem['fechamentoMetragemIsChecked'] &&(
          <>
            <p className=' text-white'>Fechamento (m²): {resultados.fechamento} m²</p></>
          )
        }
        {
          checksDaMetragem['aranhaMetragemIsChecked'] && (
            <>
              <p className=' text-white'>Aranha (m²): {resultados.fechamentoDaAranha} m²</p>
            </>
          )
        }

        <div className='flex container justify-center mt-4'>
          <BotaoPadrao
            label={'Preencher no Orçamento'}
            onClick={preencherOrcamento}
            variant={'verde'}
          />
        </div>
      </div>
      )
    }

    </div>
  );
};

export default CalculadoraMetragem;
