import React, { useState } from 'react';
import styles from './PreenchimentoPadrao.module.css';
import { orcamentoLona } from '../../scripts/orcamentoLona.class.js';
import CardOrcamentoLona from '../CardOrcamentoLona/CardOrcamentoLona';
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
  const dadosAtuais = dados.dadosInseridos;
 

  const handleAddOrcamento = () => {
    const maoDeObra = 2727.27 * ModelosLona[dadosAtuais.selectedModelo.value]['multiplicador'];
    const valorMaterial = ModelosLona[dadosAtuais.selectedModelo.value][dadosAtuais.selectedMaterial];

    const valorDaLona = ((dadosAtuais.diasDeTrabalho * maoDeObra) + (dadosAtuais.metragemLona * valorMaterial)).toFixed(2);

    const valorFechamento = calculoFechamento(dadosAtuais.metragemFechamento, dadosAtuais.selectedMaterial, dadosAtuais.diasDeTrabalhoFechamento)

    const valorFechamentoAranha = calculoFechamento(dadosAtuais.metragemFechamentoAranha, dadosAtuais.selectedMaterial, dadosAtuais.diasDeTrabalhoAranha)

    const novoOrcamento = new orcamentoLona(dadosAtuais.selectedModelo.label, dadosAtuais.selectedMaterial, dadosAtuais.diasDeTrabalho, dadosAtuais.metragemLona, valorDaLona, valorFechamento,dadosAtuais.diasDeTrabalhoFechamento, valorFechamentoAranha, dadosAtuais.diasDeTrabalhoAranha);

    orcamento.setOrcamentos([...orcamento.orcamentos, novoOrcamento]);
  
  };

  return (
    <div className={styles.mainContainer}>
      
      <h2>Orçamento Lona</h2>
      <SelectModeloLona/>
      <SelectMaterial/>
      <InputDiasDeTrabalho/>
      <InputMetragemLona/>
      <CheckBoxFechamento/>
      <CheckBoxAranha/>

      <button onClick={handleAddOrcamento}>Adicionar Orçamento</button>

      <div className={styles.orcamentosContainer}>
        {orcamento.orcamentos.map((orcamento, index) => (
          <CardOrcamentoLona key={index} orcamento={orcamento} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PreenchimentoPadrao;
