import React, { useRef } from 'react';
import styles from './Home.module.css';
import PreenchimentoPadrao from '../../components/PreenchimentoPadrao/PreenchimentoPadrao';
import { OrcamentoStorage } from '../../scripts/OrcamentoContext';
import { DadosInseridosStorage } from '../../scripts/DadosInseridosContext';
import CalculadoraMetragem from '../../components/CalculadoraMetragem/CalculadoraMetragem';
import ExibeOrcamentos from '../../components/ExibeOrcamentos/ExibeOrcamentos';
import BotaoPaginas from '../../components/BotaoPaginas/BotaoPaginas';
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
          <div className={styles.mainContainer}>
            <div style={{margin: '8px 0px 32px 0px '}}>
              <BotaoPaginas refPg={'impressao'} label={'Planilha Orçamento'} />
            </div>

            <div className={styles.containerBtnCalculadora}>
              <button onClick={handleLonaView} ref={lonaButtonRef}>Calculadora de Lonas</button>
              <button onClick={handleEstruturaView} ref={estruturaButtonRef}>Calculadora de Estruturas</button>
            </div>

            <div className={styles.containerCalculadoras}>
              {lonaView && (
                <div className={styles.containerCalculo}>
                  <CalculadoraMetragem />
                  <PreenchimentoPadrao />
                </div>
              )}
              {estruturaView && (
                <div className={styles.containerCalculo}>
                  <CalculadoraEstruturas />
                </div>
              )}
            </div>

            <div className={styles.containerOrcamentos}>
              <ExibeOrcamentos />
            </div>

            <div className={styles.containerPreencher}>
              <button>Preencher na Planilha</button>
            </div>
          </div>
        </OrcamentoStorage>
      </DadosInseridosStorage>
    </PopupProvider>
  );
};

export default Home;
