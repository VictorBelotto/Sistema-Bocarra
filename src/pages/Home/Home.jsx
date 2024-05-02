import React from 'react';
import PreenchimentoPadrao from '../../components/PreenchimentoPadrao/PreenchimentoPadrao';
import CalculadoraMetragem from '../../components/CalculadoraMetragem/CalculadoraMetragem';
import ExibeOrcamentos from '../../components/ExibeOrcamentos/ExibeOrcamentos';
import CalculadoraEstruturas from '../../components/CalculadoraEstruturas/CalculadoraEstruturas';
import BotaoMenu from '../../components/Botoes/BotaoMenu.jsx';
import BotaoPaginas from '../../components/Botoes/BotaoPaginas.jsx';
import ExportarParaPlanilha from '../../components/ExportarParaPlanilha/ExportarParaPlanilha.jsx';
import CalculadoraCupula from '../../components/CalculadoraCupula/CalculadoraCupula.jsx'; 
import {Cone ,PanelsTopLeft, Landmark, Pyramid} from 'lucide-react';

const Home = () => {
  const [viewsAtivas, setViewsAtivas] = React.useState('calculadoraCupula')



  return (
    <div className="flex fontRoboto">
      <aside className="w-72 h-screen overflow-y-auto bg-slate-900 shadow-lg ">
        <nav className="flex flex-col items-center gap-2">
          <h1 className="text-fuchsia-700 text-4xl mt-2 mb-2">System</h1>

          <span className="w-4/5 h-0.5 bg-gray-500 bg-opacity-80"></span>
          <h2 className='text-base font-semibold text-slate-500 w-4/5 flex gap-2'>Calculadora de Valor</h2>
            <BotaoMenu 
              label={'Lonas'} 
              onClick={()=> setEstruturaView('calculadoraLona')} 
              icon={<Cone/>}
            />
            <BotaoMenu 
              label={'Estruturas'} 
              onClick={()=> setEstruturaView('calculadoraEstrutura')}
              icon={<Landmark/>}
            />
          <span className="w-4/5 h-0.5 bg-gray-500 bg-opacity-80"></span>
          <h2 className='text-base font-semibold text-slate-500 w-4/5 flex gap-2'>Calculadora de Metragem</h2>
            <BotaoMenu 
                label={'Cúpula'} 
                onClick={()=> setEstruturaView('calculadoracupula')}
                icon={<Pyramid/>}
              />
          <span className="w-4/5 h-0.5 bg-gray-500 bg-opacity-80"></span>
          <h2 className='text-base font-semibold text-slate-500 w-4/5 flex gap-2'>Dashboards</h2>
          <BotaoPaginas 
            to={'/impressao'} 
            label={'Orçamento'} 
            icon={<PanelsTopLeft/>}
          />
        </nav>
      </aside>

      {/* Conteudo main */}

      <main className="flex flex-col w-full px-4 py-4 h-screen overflow-y-auto items-center">
        <div className="flex flex-col gap-8 rounded-lg mb-8  mt-2">
          {viewsAtivas === 'calculadoraLona' && (
            <div className="flex justify-center gap-12">
              <CalculadoraMetragem />
              <PreenchimentoPadrao />
            </div>
          )}
          {viewsAtivas === 'calculadoraEstrutura' && (
            <div className="flex justify-center gap-12">
              <CalculadoraEstruturas />
            </div>
          )}
          {viewsAtivas === 'calculadoraCupula' && (
            <div className="flex justify-center">
              <CalculadoraCupula />
            </div>
          )}
        </div>
        <div className='flex flex-col  p-6 max-w-[1040px] rounded-lg bg-card-escuro shadow-card'>
          <ExibeOrcamentos/>
          <div className='mt-4 self-end' >
            <ExportarParaPlanilha/>
          </div>
        </div>
        
      </main>
    </div>
  );
};

export default Home;
