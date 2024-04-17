import React, { useRef } from 'react';
import styles from './Impressao.module.css';
import Header from './components/Header/Header';
import Infos from './components/Infos/Infos';
import Tabela from './components/Tabela/Tabela';
import Observacoes from './components/Observacoes/Observacoes';
import Valores from './components/Valores/Valores';
import Footer from './components/Footer/Footer';
import PageIInfoGeral from './components/PageIInfoGeral/PageIInfoGeral';

const Impressao = () => {
  const printContainer = useRef(null);

  const handlePrint = () => {
    // Oculta a segunda mainContainer antes de imprimir
    printContainer.current.style.display = 'none';

    // Aciona a função de impressão
    window.print();

    // Restaura a visibilidade da segunda mainContainer após a impressão
    printContainer.current.style.display = 'block';
  };

  return (
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
      <div  style={{alignSelf:'center'}} ref={printContainer}>
       <button button onClick={handlePrint}>Imprimir</button>
      </div > 
    </div>
  );
};

export default Impressao;
