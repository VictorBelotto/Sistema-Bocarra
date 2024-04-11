import React, { useState } from 'react';
import styles from './PreenchimentoPadrao.module.css';
import { OrcamentoContext } from '../../scripts/OrcamentoContext.jsx';
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext.jsx';
import { calculoFechamento } from '../../scripts/CalculoFechamento.js';
import { ModelosLona } from '../../scripts/ModelosDaLona.js';


import SelectModeloLona from './components/SelectModeloLona/SelectModeloLona.jsx';
import SelectMaterial from './components/SelectMaterial/SelectMaterial.jsx';
import InputDiasDeTrabalho from './components/InputDiasDeTrabalho/InputDiasDeTrabalho.jsx';
import InputMetragemLona from './components/InputMetragemLona/InputMetragemLona.jsx';
import CheckBoxFechamento from './components/CheckBoxFechamento/CheckBoxFechamento.jsx';
import CheckBoxAranha from './components/CheckBoxAranha/CheckBoxAranha.jsx';


const PreenchimentoPadrao = () => {
  const orcamento = React.useContext(OrcamentoContext);
  const {checksDoOrcamento, dadosMetragem, dadosInseridos} = React.useContext(DadosInseridosContext);
 

  const handleAddOrcamento = () => {
    const maoDeObra = 2727.27 * ModelosLona[dadosInseridos.selectedModelo.value]['multiplicador'];
    const valorMaterial = ModelosLona[dadosInseridos.selectedModelo.value][dadosInseridos.selectedMaterial];
    const valorDaLona = ((dadosInseridos.diasDeTrabalho * maoDeObra) + (dadosInseridos.metragemLona * valorMaterial)).toFixed(2);

    const valorFechamento = calculoFechamento(dadosInseridos.metragemFechamento, dadosInseridos.selectedMaterial, dadosInseridos.diasDeTrabalhoFechamento)

    const valorFechamentoAranha = calculoFechamento(dadosInseridos.metragemFechamentoAranha, dadosInseridos.selectedMaterial, dadosInseridos.diasDeTrabalhoAranha)

    const novoOrcamento = {
      modelo: dadosInseridos.selectedModelo.label,
      material: dadosInseridos.selectedMaterial,
      diasDeTrabalho: dadosInseridos.diasDeTrabalho,
      metragem: dadosInseridos.metragemLona,
      valor: valorDaLona,
      possuiFechamento: checksDoOrcamento.fechamentoIsChecked,
      valorFechamento: valorFechamento,
      possuiAranha: checksDoOrcamento.fechamentoAranhaIsChecked, 
      valorFechamentoAranha: valorFechamentoAranha,
      larguraDaLona: dadosMetragem.larguraDaLona,
      comprimentoDaLona: dadosMetragem.comprimentoDaLona,
      alturaFechamento: dadosMetragem.alturaFechamento,
      metragemFechamento: dadosInseridos.metragemFechamento,
      alturaAranha: dadosMetragem.alturaAranha,
      metragemFechamentoAranha: dadosInseridos.metragemFechamentoAranha
    };


    orcamento.setOrcamentos([...orcamento.orcamentos, novoOrcamento]);
  };


  return (
    <div className={styles.mainContainer}>
      
      <h2>Orçamento Lona</h2>
      <div className={styles.modeloXMaterial} >
        <SelectModeloLona/>
        <SelectMaterial/>
      </div>
      <div className={styles.metragemXDiasDeTrabalho} >
      <InputMetragemLona/>
      <InputDiasDeTrabalho/>
      </div>

      <CheckBoxFechamento/>
      <CheckBoxAranha/>

      <button onClick={handleAddOrcamento}>Adicionar Orçamento</button>
    </div>
  );
};

export default PreenchimentoPadrao;
