import React from 'react';
import styles from './Home.module.css';
import PreenchimentoPadrao from '../../components/PreenchimentoPadrao/PreenchimentoPadrao';
import {OrcamentoStorage} from '../../scripts/OrcamentoContext'
import { DadosInseridosStorage } from '../../scripts/DadosInseridosContext';
import CalculadoraMetragem from '../../components/CalculadoraMetragem/CalculadoraMetragem';
const Home = () => {
  

  return (
    <>
    <DadosInseridosStorage>
      <OrcamentoStorage>
        <div style={{display: 'flex', justifyContent: 'space-between'}} >
          <CalculadoraMetragem/>
          <PreenchimentoPadrao/>
        </div>
      </OrcamentoStorage>
    </DadosInseridosStorage>
    </>
  )
};

export default Home;
