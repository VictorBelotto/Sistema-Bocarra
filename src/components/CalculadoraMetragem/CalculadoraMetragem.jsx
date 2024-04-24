import React, { useState } from 'react';
import { calcularMetragem } from '../../scripts/CalculoMetragem.class';
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext.jsx';

import CheckBoxMetragens from './components/CheckBoxMetragens.jsx';
import BotaoPadrao from '../BotaoPadrao.jsx';
import InputMetragem from './components/InputMetragem.jsx';

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
    console.log('mudou')
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
    adicionarDado('metragemQuadrada', {
      ...dadosInseridos.metragemQuadrada,
      lona: resultados.metragem,
      fechamento: resultados.fechamento,
      aranha: resultados.fechamentoDaAranha
    });
    
}

  return (
    <div className='w-80 m-0 p-4 rounded-lg bg-branco-contraste shadow-card'>
      <h2 className='mb-3'>Calculadora de Metragem</h2>

      <div className='flex items-center mb-3'>
        <label htmlFor="marquiseCheckBox" className='mr-2'>
          Marquise Tradicional?
        </label>
        <input 
          className='w-5 h-5 m-0' 
          type="checkbox" 
          id="marquiseCheckBox" 
          value={marquiseIsChecked}
          onClick={handleCheckMarquiseChange}
        />
      </div>
    
      <div className='flex mb-3'>
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
        id={'fechamento'}
        labelCheck={'Adicionar Fechamento?'}
        labelInput={'Altura do Fechamento da Lona:'}
      />
      <CheckBoxMetragens
        id={'aranha'}
        labelCheck={'Adicionar Aranha?'}
        labelInput={'Altura do Fechamento da Aranha:'}
      />
      
      <div className='flex container justify-center'>
        <BotaoPadrao
            onClick={calcular}
            label={'Calcular Metragem'}
          />
      </div>
  
    {
      exibeResultado && (
        <div className='flex flex-col gap-2 mt-5'>
        <h2>Resultado:</h2> 
        <p>Metragem Lona (m²): {resultados.metragem} m²</p>
        <p>Perimetro: {resultados.perimetro} m</p>
        {
          checksDaMetragem['fechamentoIsChecked'] &&(
          <>
            <p>Fechamento (m²): {resultados.fechamento} m²</p></>
          )
        }
        {
          checksDaMetragem['aranhaIsChecked'] && (
            <>
              <p>Aranha (m²): {resultados.fechamentoDaAranha} m²</p>
            </>
          )
        }

        <div className='flex container justify-center'>
          <BotaoPadrao
            label={'Preencher no Orçamento'}
            onClick={preencherOrcamento}
          />
        </div>
      </div>
      )
    }

    </div>
  );
};

export default CalculadoraMetragem;
