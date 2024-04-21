import React, { useRef } from 'react';
import styles from './Impressao.module.css';
import Header from './components/Header/Header';
import Infos from './components/Infos/Infos';
import Tabela from './components/Tabela/Tabela';
import Observacoes from './components/Observacoes/Observacoes';
import Valores from './components/Valores/Valores';
import Footer from './components/Footer/Footer';
import PageIInfoGeral from './components/PageIInfoGeral/PageIInfoGeral';
import {OrcamentoStorage} from '../../scripts/OrcamentoContext'
import { DadosInseridosStorage } from '../../scripts/DadosInseridosContext';
import BotaoPaginas from '../../components/BotaoPaginas/BotaoPaginas'
import DadosFormatados from './components/DadosFormatados/DadosFormatados';

const Impressao = () => {
  const printContainer = useRef(null);
  const handlePrint = () => {
    printContainer.current.style.display = 'none';
    window.print();
    printContainer.current.style.display = 'block';
  };

  return (

    <DadosInseridosStorage>
      <OrcamentoStorage>
        <DadosFormatados/>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}} >
          <div className={styles.mainContainer}>
            <div className={styles.container}>
              <Header />
              <Infos />
              <Tabela />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Observacoes />
                <Valores />
              </div>
              <Footer />
            </div>
          </div>
          
        <div className={styles.pageInfoMainContainer} >
          <div className={styles.pageInfoContainer}>
              <PageIInfoGeral />
            </div>
          
          </div>
          <div  style={{justifyContent:'center', display:'flex', width:'100%', margin:'16px 0px 32px 0px'}} ref={printContainer}>
            <div style={{justifyContent:'center', display:'flex', gap:'16px',}} >
              <button className={styles.btnImprimir} onClick={handlePrint}>Imprimir</button>
              <BotaoPaginas refPg={'/'} label={'Pagina inicial'}/>
            </div>
          </div > 
        </div>
      </OrcamentoStorage>
    </DadosInseridosStorage>
  );
};

export default Impressao;
