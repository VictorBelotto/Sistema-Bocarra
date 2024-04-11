import React, { useState } from 'react';
import styles from './PreenchimentoPadrao.module.css';
import { orcamentoLona } from '../../scripts/orcamentoLona.class.js';
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
  const dados = React.useContext(DadosInseridosContext);
  const {checksDoOrcamento, dadosMetragem} = React.useContext(DadosInseridosContext);
  const dadosAtuais = dados.dadosInseridos;
 

  const handleAddOrcamento = () => {
    const maoDeObra = 2727.27 * ModelosLona[dadosAtuais.selectedModelo.value]['multiplicador'];
    const valorMaterial = ModelosLona[dadosAtuais.selectedModelo.value][dadosAtuais.selectedMaterial];
    const possuiFechamento = checksDoOrcamento.fechamentoIsChecked
    const possuiAranha = checksDoOrcamento.fechamentoAranhaIsChecked
    const valorDaLona = ((dadosAtuais.diasDeTrabalho * maoDeObra) + (dadosAtuais.metragemLona * valorMaterial)).toFixed(2);

    const valorFechamento = calculoFechamento(dadosAtuais.metragemFechamento, dadosAtuais.selectedMaterial, dadosAtuais.diasDeTrabalhoFechamento)

    const valorFechamentoAranha = calculoFechamento(dadosAtuais.metragemFechamentoAranha, dadosAtuais.selectedMaterial, dadosAtuais.diasDeTrabalhoAranha)

    const novoOrcamento = new orcamentoLona(
      dadosAtuais.selectedModelo.label, 
      dadosAtuais.selectedMaterial, 
      dadosAtuais.diasDeTrabalho, 
      dadosAtuais.metragemLona, 
      valorDaLona,possuiFechamento, 
      valorFechamento,
      dadosAtuais.diasDeTrabalhoFechamento,
      possuiAranha, 
      valorFechamentoAranha, 
      dadosAtuais.diasDeTrabalhoAranha,
      dadosMetragem.larguraDaLona,
      dadosMetragem.comprimentoDaLona,
      dadosMetragem.alturaFechamento,
      dadosAtuais.metragemFechamento,
      dadosMetragem.alturaAranha,
      dadosAtuais.metragemFechamentoAranha
    )


    orcamento.setOrcamentos([...orcamento.orcamentos, novoOrcamento]);
    console.log(orcamento.orcamentos)
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
