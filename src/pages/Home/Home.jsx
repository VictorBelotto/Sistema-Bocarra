import React from 'react';
import PreenchimentoPadrao from '../../components/PreenchimentoPadrao/PreenchimentoPadrao';
import CalculadoraMetragem from '../../components/CalculadoraMetragem/CalculadoraMetragem';
import ExibeOrcamentos from '../../components/ExibeOrcamentos/ExibeOrcamentos';
import CalculadoraEstruturas from '../../components/CalculadoraEstruturas/CalculadoraEstruturas';
import ExportarParaPlanilha from '../../components/ExportarParaPlanilha/ExportarParaPlanilha.jsx';
import CalculadoraCupula from '../../components/CalculadoraCupula/CalculadoraCupula.jsx';
import { SideBar } from '../../components/SideBar/SideBar.jsx';
import CalculadoraTorre from '../../components/CalculadoraTorre/CalculadoraTorre.jsx';
import { useViewAtivaStore } from '../../context/ViewAtivaStore.js';
import { useOrcamentosStore } from '../../context/OrcamentosStore.js';

const Home = () => {
  const [orcamentosLona, orcamentosEstruturas] = useOrcamentosStore(state => [state.orcamentosLona, state.orcamentosEstruturas])
  const [exibeResultado, setExibeResultado] = React.useState(false)
  const viewAtivaStore = useViewAtivaStore(state => state.viewAtiva)

  React.useEffect(() => {
    if (orcamentosLona.length > 0 || orcamentosEstruturas.length > 0) {
      setExibeResultado(true)
    } else {
      setExibeResultado(false)
    }
  }, [orcamentosLona, orcamentosEstruturas])

  return (
    <div className="flex fontRoboto">
      <aside className="w-72 h-screen overflow-y-auto shadow-lg ">
        <SideBar />
      </aside>

      {/* Conteudo main */}
      <main className="flex flex-col w-full px-4 py-4 h-screen overflow-y-auto items-center">
        <div className="flex flex-col gap-8 rounded-lg mb-8  mt-2">
          {viewAtivaStore === 'calculadoraLona' && (
            <div className="flex justify-center gap-12 h-[536px] px-6 py-4 rounded-lg bg-card-claro shadow-card bg-opacity-90">
              <CalculadoraMetragem />
              <PreenchimentoPadrao />
            </div>
          )}
          {viewAtivaStore === 'calculadoraEstrutura' && (
            <div className="flex justify-center gap-12">
              <CalculadoraEstruturas />
            </div>
          )}
          {viewAtivaStore === 'calculadoraCupula' && (
            <div className="flex justify-center">
              <CalculadoraCupula />
            </div>
          )}
          {viewAtivaStore === 'calculadoraTorre' && (
            <div className="flex justify-center">
              <CalculadoraTorre />
            </div>
          )}
        </div>

        {(viewAtivaStore === 'calculadoraLona' || viewAtivaStore === 'calculadoraEstrutura') && exibeResultado && (
          <div className='flex flex-col  p-6 max-w-[1040px] rounded-lg bg-card-escuro shadow-card'>
            <ExibeOrcamentos />
            <div className='mt-4 self-end' >
              <ExportarParaPlanilha />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
