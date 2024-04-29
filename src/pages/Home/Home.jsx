import React, { useState } from 'react';
import PreenchimentoPadrao from '../../components/PreenchimentoPadrao/PreenchimentoPadrao';
import { OrcamentoStorage } from '../../scripts/OrcamentoContext';
import { DadosInseridosStorage } from '../../scripts/DadosInseridosContext';
import CalculadoraMetragem from '../../components/CalculadoraMetragem/CalculadoraMetragem';
import ExibeOrcamentos from '../../components/ExibeOrcamentos/ExibeOrcamentos';
import { PopupProvider } from '../../context/PopupContext';
import CalculadoraEstruturas from '../../components/CalculadoraEstruturas/CalculadoraEstruturas';
import {Cone ,PanelsTopLeft, Landmark} from 'lucide-react';

import BotaoMenu from '../../components/Botoes/BotaoMenu.jsx';
import BotaoPaginas from '../../components/Botoes/BotaoPaginas.jsx';

const Home = () => {
  const [lonaView, setLonaView] = useState(true);
  const [estruturaView, setEstruturaView] = useState(false);

  const handleLonaView = () => {
    setLonaView(true);
    setEstruturaView(false);
  };

  const handleEstruturaView = () => {
    setEstruturaView(true);
    setLonaView(false);
  };

  return (
    <PopupProvider>
      <DadosInseridosStorage>
        <OrcamentoStorage>
          <div className="flex fontRoboto">
            <aside className="w-72 h-screen overflow-y-auto bg-slate-900 shadow-lg ">
              <nav className="flex flex-col items-center gap-2">
                <h1 className="text-fuchsia-700 text-4xl mt-2 mb-2">System</h1>

                <span className="w-4/5 h-0.5 bg-gray-500 bg-opacity-80"></span>
                <h2 className='text-base font-semibold text-slate-500 w-4/5 flex gap-2'>Calculadoras</h2>
                  <BotaoMenu 
                    label={'Lonas'} 
                    onClick={handleLonaView} 
                    icon={<Cone/>}
                  />
                  <BotaoMenu 
                    label={'Estruturas'} 
                    onClick={handleEstruturaView}
                    icon={<Landmark/>}
                  />

                <span className="w-4/5 h-0.5 bg-gray-500 bg-opacity-80"></span>
                <h2 className='text-base font-semibold text-slate-500 w-4/5 flex gap-2'>Dashboards</h2>
                <BotaoPaginas 
                  refPg={'impressao'} 
                  label={'Orçamento'} 
                  icon={<PanelsTopLeft/>}
                />
              </nav>
            </aside>

            {/* Conteudo main */}

            <main className="flex flex-col w-full px-4 py-4 h-screen overflow-y-auto items-center">
              <div className="flex flex-col gap-8 rounded-lg mb-8  mt-2">
                {lonaView && (
                  <div className="flex justify-center gap-12">
                    <CalculadoraMetragem />
                    <PreenchimentoPadrao />
                  </div>
                )}
                {estruturaView && (
                  <div className="flex justify-center gap-12">
                    <CalculadoraEstruturas />
                  </div>
                )}
              </div>
          
                <ExibeOrcamentos />
             

            </main>
          </div>
        </OrcamentoStorage>
      </DadosInseridosStorage>
    </PopupProvider>
  );
};

export default Home;
