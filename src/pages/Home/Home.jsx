import React from 'react';
import styles from './Home.module.css';
import PreenchimentoPadrao from '../../components/PreenchimentoPadrao/PreenchimentoPadrao';
import {OrcamentoStorage} from '../../scripts/OrcamentoContext'
import { DadosInseridosStorage } from '../../scripts/DadosInseridosContext';
import CalculadoraMetragem from '../../components/CalculadoraMetragem/CalculadoraMetragem';
import ExibeOrcamentos from '../../components/ExibeOrcamentos/ExibeOrcamentos';
const Home = () => {
  

  return (
    <>
    <DadosInseridosStorage>
      <OrcamentoStorage>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}} >
          <CalculadoraMetragem/>
          <PreenchimentoPadrao/>
        </div>
        <div>
          <ExibeOrcamentos/>
        </div>
      </OrcamentoStorage>
    </DadosInseridosStorage>
    </>
  )
};

export default Home;
