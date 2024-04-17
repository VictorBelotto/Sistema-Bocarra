import React from 'react';
import PreenchimentoPadrao from '../../components/PreenchimentoPadrao/PreenchimentoPadrao';
import {OrcamentoStorage} from '../../scripts/OrcamentoContext'
import { DadosInseridosStorage } from '../../scripts/DadosInseridosContext';
import CalculadoraMetragem from '../../components/CalculadoraMetragem/CalculadoraMetragem';
import ExibeOrcamentos from '../../components/ExibeOrcamentos/ExibeOrcamentos';
import BotaoPaginas from '../../components/BotaoPaginas/BotaoPaginas';
const Home = () => {
  

  return (
    <>
    <DadosInseridosStorage>
      <OrcamentoStorage>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}} >
          <CalculadoraMetragem/>
          <PreenchimentoPadrao/>
          <BotaoPaginas refPg={'impressao'} label={'Planilha Orçamento >'}/>
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
