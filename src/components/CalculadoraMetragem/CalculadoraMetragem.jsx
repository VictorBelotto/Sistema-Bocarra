import React from 'react';
import { calcularMetragem } from '../../scripts/CalculoMetragem.class';
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext.jsx';
import { useCalculadoraMetragemStore } from '../../context/CalculadoraMetragemStore.js';

import CheckBoxMetragens from './components/CheckBoxMetragens.jsx';
import BotaoPadrao from '../Botoes/BotaoPadrao.jsx';
import InputMetragem from './components/InputMetragem.jsx';
import InputsCheckBox from '../InputsCheckBox/InputsCheckBox.jsx';

const CalculadoraMetragem = () => {
  const { dadosInseridos, adicionarDado } = React.useContext(DadosInseridosContext)
  const [dadosMetragem, checksDaMetragem, adicionarDadosMetragemOrcamento, setStateMetragem] = useCalculadoraMetragemStore(state =>
    [state.dadosMetragem, state.checksDaMetragem, state.adicionarDadosMetragemOrcamento, state.setStateMetragem]
  )

  const [resultados, setResultados] = React.useState({});
  const [exibeResultado, setExibeResultado] = React.useState(false)
  const [marquiseIsChecked, setMarquiseIsChecked] = React.useState(false)

  const adicionaResultado = (nome, valor) => {
    setResultados(prevState => ({
      ...prevState,
      [nome]: valor
    }))
  }

  const handleCheckMarquiseChange = () => {
    setMarquiseIsChecked(!marquiseIsChecked)
  }

  const calcular = () => {
    adicionarDadosMetragemOrcamento(dadosMetragem)
    const resultado = calcularMetragem(dadosMetragem, marquiseIsChecked)
    adicionaResultado('metragem', resultado['metragem'])
    adicionaResultado('fechamento', resultado['fechamento'])
    adicionaResultado('fechamentoDaAranha', resultado['fechamentoDaAranha'])
    adicionaResultado('perimetro', resultado['perimetro'])
    setExibeResultado(true)
  };

  const preencherOrcamento = () => {
    adicionarDado('metragemQuadrada', {
      ...dadosInseridos.metragemQuadrada,
      lona: resultados.metragem,
      fechamento: resultados.fechamento,
      aranha: resultados.fechamentoDaAranha,
    });
    adicionarDado('perimetroLona', resultados.perimetro)
    setExibeResultado(false)
    setMarquiseIsChecked(false)
    setStateMetragem()
  }

  return (
    <div className='flex flex-col w-fit h-full '>

      <h1 className='ti-1 mb-3 text-fundo-verdeH'>Metragem da Lona</h1>

      <main className='flex  w-fit h-full m-0 gap-8 mt-4'>
        <div className='flex w-fit h-full flex-col gap-6'>
         
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
         
          <div className='flex h-full flex-col justify-between'>
            <div className='flex flex-col gap-4'>
              <InputsCheckBox
                label={'Marquise Tradicional?'}
                id={'marquise'}
                onClick={handleCheckMarquiseChange}
                value={marquiseIsChecked}
              />
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
            </div>
            <div className='flex'>
              <BotaoPadrao
                onClick={calcular}
                variant={'verde'}
                label={'Calcular Metragem'}
              />
            </div>
          </div>
        </div>
        <span className='h-full w-0.5 bg-slate-400'></span>
        {
          exibeResultado && (
            <div className='flex gap-6'>

              <div className='flex h-full flex-col justify-between'>
                <div className='flex flex-col gap-3'>
                  <h2 className='ti-2 text-purple-400'>Resultado:</h2>
                  <p className=' text-slate-100'><strong className='text-text-contraste' >Metragem Lona (m²):</strong> {resultados.metragem} m²</p>
                  <p className=' text-slate-100'><strong className='text-text-contraste' >Perimetro:</strong> {resultados.perimetro} m</p>
                  {
                    checksDaMetragem['fechamentoMetragemIsChecked'] && (
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
              <span className='h-full w-0.5 bg-slate-400'></span>
            </div>
          )
        }

      </main>
    </div>
  );
};

export default CalculadoraMetragem;
