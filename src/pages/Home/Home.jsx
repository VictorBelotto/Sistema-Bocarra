import React from 'react';
import styles from './Home.module.css';
import PreenchimentoPadrao from '../../components/PreenchimentoPadrao/PreenchimentoPadrao';
import {OrcamentoStorage} from '../../scripts/OrcamentoContext'
const Home = () => {
  

  return (
    <>
      <OrcamentoStorage>
        <PreenchimentoPadrao/>
      </OrcamentoStorage>
    </>
  )
};

export default Home;
