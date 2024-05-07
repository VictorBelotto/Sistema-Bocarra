import React from 'react';
import PreenchimentoPadrao from '../../components/PreenchimentoPadrao/PreenchimentoPadrao';
import CalculadoraMetragem from '../../components/CalculadoraMetragem/CalculadoraMetragem';
import ExibeOrcamentos from '../../components/ExibeOrcamentos/ExibeOrcamentos';
import CalculadoraEstruturas from '../../components/CalculadoraEstruturas/CalculadoraEstruturas';
import ExportarParaPlanilha from '../../components/ExportarParaPlanilha/ExportarParaPlanilha.jsx';
import CalculadoraCupula from '../../components/CalculadoraCupula/CalculadoraCupula.jsx'; 
import { SideBar } from '../../components/SideBar/SideBar.jsx';
import { ViewAtivaContext } from '../../context/ViewAtiva.jsx';
import { OrcamentoContext } from '../../scripts/OrcamentoContext.jsx';
import CardOrcamentoEstrutura from '../../components/CardOrcamentoEstrutura/CardOrcamentoEstrutura.jsx';

const Home = () => {
  const {viewAtiva, setViewAtiva} = React.useContext(ViewAtivaContext)
  const {orcamentos} = React.useContext(OrcamentoContext)
  const [exibeResultado, setExibeResultado] = React.useState(false)

  React.useEffect(()=>{
    if(orcamentos.length > 0){
      setExibeResultado(true)
    }else{
      setExibeResultado(false)
    }
  }, [orcamentos])

  return (
    <div className="flex fontRoboto">
      <aside className="w-72 h-screen overflow-y-auto shadow-lg ">
        <SideBar/>
      </aside>

      {/* Conteudo main */}
      <main className="flex flex-col w-full px-4 py-4 h-screen overflow-y-auto items-center">
        <div className="flex flex-col gap-8 rounded-lg mb-8  mt-2">
          {viewAtiva === 'calculadoraLona' && (
            <div className="flex justify-center gap-12">
              <CalculadoraMetragem />
              <PreenchimentoPadrao />
            </div>
          )}
          {viewAtiva === 'calculadoraEstrutura' && (
            <div className="flex justify-center gap-12">
              <CalculadoraEstruturas />
              <CardOrcamentoEstrutura/>
            </div>
          )}
          {viewAtiva === 'calculadoraCupula' && (
            <div className="flex justify-center">
              <CalculadoraCupula />
            </div>
          )}
        </div>

        {(viewAtiva === 'calculadoraLona' || viewAtiva === 'calculadoraEstrutura')&& exibeResultado && (
           <div className='flex flex-col  p-6 max-w-[1040px] rounded-lg bg-card-escuro shadow-card'>
           <ExibeOrcamentos/>
           <div className='mt-4 self-end' >
             <ExportarParaPlanilha/>
           </div>
         </div>
          )}
      </main>
    </div>
  );
};

export default Home;
