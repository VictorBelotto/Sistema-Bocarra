import React, { useRef } from 'react';
import styles from './Impressao.module.css';
import Header from './components/Header/Header';
import Infos from './components/Infos/Infos';
import Tabela from './components/Tabela/Tabela';
import Observacoes from './components/Observacoes/Observacoes';
import Valores from './components/Valores/Valores';
import Footer from './components/Footer/Footer';
import PageIInfoGeral from './components/PageIInfoGeral/PageIInfoGeral';
import { Link } from 'react-router-dom';

const Impressao = () => {

  const printContainer = useRef(null);
  const handlePrint = () => {
    printContainer.current.style.display = 'none';
    window.print();
    printContainer.current.style.display = 'block';
  };

  return (
    <>
      <div  className='fontGothic flex flex-col justify-center bg-white '>
        <div className={styles.mainContainer}>
          <div className={styles.container}>
            <Header />
            <Infos />
            <Tabela/>
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
            
            <Link
             className='bg-fundo-verde py-1 px-3 rounded-lg hover:bg-fundo-verdeH'
             to={'/'}
            >
              Home
            </Link>
          
          </div>
        </div > 
      </div>
    </>
  );
};

export default Impressao;
