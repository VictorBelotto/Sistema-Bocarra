import React, { useRef } from 'react';
import PreenchimentoPadrao from '../../components/PreenchimentoPadrao/PreenchimentoPadrao';
import { OrcamentoStorage } from '../../scripts/OrcamentoContext';
import { DadosInseridosStorage } from '../../scripts/DadosInseridosContext';
import CalculadoraMetragem from '../../components/CalculadoraMetragem/CalculadoraMetragem';
import ExibeOrcamentos from '../../components/ExibeOrcamentos/ExibeOrcamentos';
import { PopupProvider } from '../../context/PopupContext';
import CalculadoraEstruturas from '../../components/CalculadoraEstruturas/CalculadoraEstruturas';

import BotaoMenu from '../../components/Botoes/BotaoMenu.jsx';
import BotaoPaginas from '../../components/Botoes/BotaoPaginas.jsx';


const Home = () => {
  const [lonaView, setLonaView] = React.useState(true);
  const [estruturaView, setEstruturaView] = React.useState(false);


  const handleLonaView = () => {
    setLonaView(true);
    setEstruturaView(false);
  }

  const handleEstruturaView = () => {
    setEstruturaView(true);
    setLonaView(false);
  }

  return (
    <PopupProvider>
      <DadosInseridosStorage>
        <OrcamentoStorage>
         <div className='fontRoboto flex '>
          <div className='flex flex-col items-center gap-2 w-72 h-vh bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg' >
            <h1 className='text-white text-4xl mt-2 mb-2'>System</h1>
            <span className='flex w-4/5 h-0.5 bg-gray-500 bg-opacity-80' ></span>
              <BotaoMenu
                label={'Lonas'}  
                onClick={handleLonaView}
                
              />
                <BotaoMenu
                  label={'Estruturas'}
                  onClick={handleEstruturaView}
                 
                />
                <span className='flex w-4/5 h-0.5 bg-gray-500 bg-opacity-80' ></span>
                
                <BotaoPaginas refPg={'impressao'} label={'Planilha Orçamento'} />
          </div>

          <div className='flex flex-col w-full h-vh justify-center items-center mt-8'>
  

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
         </div>
        </OrcamentoStorage>
      </DadosInseridosStorage>
    </PopupProvider>
  );
};

export default Home;
