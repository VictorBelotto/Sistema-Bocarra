import React, { useRef } from 'react';
import PreenchimentoPadrao from '../../components/PreenchimentoPadrao/PreenchimentoPadrao';
import { OrcamentoStorage } from '../../scripts/OrcamentoContext';
import { DadosInseridosStorage } from '../../scripts/DadosInseridosContext';
import CalculadoraMetragem from '../../components/CalculadoraMetragem/CalculadoraMetragem';
import ExibeOrcamentos from '../../components/ExibeOrcamentos/ExibeOrcamentos';
import BotaoPaginas from '../../components/Botoes/BotaoPaginas.jsx';
import { PopupProvider } from '../../context/PopupContext';
import CalculadoraEstruturas from '../../components/CalculadoraEstruturas/CalculadoraEstruturas';


const Home = () => {
  const [lonaView, setLonaView] = React.useState(true);
  const [estruturaView, setEstruturaView] = React.useState(false);
  const lonaButtonRef = useRef(null);
  const estruturaButtonRef = useRef(null);

  const handleLonaView = () => {
    lonaButtonRef.current.style.backgroundColor = 'rgb(255, 255, 255)'
    estruturaButtonRef.current.style.backgroundColor = 'rgb(231, 231, 231)'
    setLonaView(true);
    setEstruturaView(false);
  }

  const handleEstruturaView = () => {
    estruturaButtonRef.current.style.backgroundColor = 'rgb(255, 255, 255)'
    lonaButtonRef.current.style.backgroundColor = 'rgb(231, 231, 231)'
    setEstruturaView(true);
    setLonaView(false);
  }

  return (
    <PopupProvider>
      <DadosInseridosStorage>
        <OrcamentoStorage>
          <div className='fontRoboto flex flex-col justify-center items-center'>
            <div style={{margin: '8px 0px 32px 0px '}}>
              <BotaoPaginas refPg={'impressao'} label={'Planilha Orçamento'} />
            </div>

            <div className='flex w-2/4 mb-8'>
              <button onClick={handleLonaView} ref={lonaButtonRef}>Calculadora de Lonas</button>
              <button onClick={handleEstruturaView} ref={estruturaButtonRef}>Calculadora de Estruturas</button>
            </div>

            <div className='flex flex-col gap-8 rounded-lg mb-8  w-4/5'>
              {lonaView && (
                <div className='flex container justify-center gap-12'>
                  <CalculadoraMetragem />
                  <PreenchimentoPadrao />
                </div>
              )}
              {estruturaView && (
                <div className='flex container justify-center gap-12'>
                  <CalculadoraEstruturas />
                </div>
              )}
            </div>

            <div className='flex w-4/5 bg-card-escuro rounded-lg shadow-card'>
              <ExibeOrcamentos />
            </div>

            <div className='m-8'>
              <button>Preencher na Planilha</button>
            </div>
          </div>
        </OrcamentoStorage>
      </DadosInseridosStorage>
    </PopupProvider>
  );
};

export default Home;
