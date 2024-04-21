import React from 'react';
import styles from './Home.module.css'
import PreenchimentoPadrao from '../../components/PreenchimentoPadrao/PreenchimentoPadrao';
import {OrcamentoStorage} from '../../scripts/OrcamentoContext'
import { DadosInseridosStorage } from '../../scripts/DadosInseridosContext';
import CalculadoraMetragem from '../../components/CalculadoraMetragem/CalculadoraMetragem';
import ExibeOrcamentos from '../../components/ExibeOrcamentos/ExibeOrcamentos';
import BotaoPaginas from '../../components/BotaoPaginas/BotaoPaginas';
import { PopupProvider } from '../../context/PopupContext';
import CalculadoraEstruturas from '../../components/CalculadoraEstruturas/CalculadoraEstruturas';
const Home = () => {
  const containerCalculoLona = React.useRef(null);
  React.useEffect(()=>{
    containerCalculoLona.current.style.display = 'none'
  },[])

  return (
    <>
      <PopupProvider>
        <DadosInseridosStorage>
          <OrcamentoStorage>
            <div className={styles.mainContainer} >
              <div>
                <BotaoPaginas refPg={'impressao'} label={'Planilha Orçamento'}/>
              </div> 
              <div className={styles.container} >
                <button>ola</button>
                <div ref={containerCalculoLona} >
                  <CalculadoraMetragem/>
                  <PreenchimentoPadrao/>
                </div>
                <div>
                  <CalculadoraEstruturas/>
                </div>
               
                
              </div>
              <div>
                <ExibeOrcamentos/>
              </div>
            </div>
        </OrcamentoStorage>
      </DadosInseridosStorage>
      </PopupProvider>
    </>
  )
};

export default Home;
