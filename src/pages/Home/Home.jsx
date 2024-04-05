import React from 'react';
import styles from './Home.module.css';
import PreenchimentoPadrao from '../../components/PreenchimentoPadrao/PreenchimentoPadrao';
import {OrcamentoStorage} from '../../scripts/OrcamentoContext'
import CalculadoraMetragem from '../../components/CalculadoraMetragem/CalculadoraMetragem';
const Home = () => {
  

  return (
    <>
      <OrcamentoStorage>
        <CalculadoraMetragem/>
        <PreenchimentoPadrao/>
      </OrcamentoStorage>
    </>
  )
};

export default Home;
