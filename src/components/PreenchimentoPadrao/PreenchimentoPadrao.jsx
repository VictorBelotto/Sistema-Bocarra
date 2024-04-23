import React from 'react';
import styles from './PreenchimentoPadrao.module.css';
import { OrcamentoContext } from '../../scripts/OrcamentoContext.jsx';
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext.jsx';
import { calculoFechamento } from '../../scripts/CalculoFechamento.js';
import ExibePopUp from '../ExibePopUp/ExibePopUp.jsx';
import { usePopup } from '../../context/PopupContext.jsx';

import SelectModeloLona from './components/SelectModeloLona/SelectModeloLona.jsx';
import SelectMaterial from './components/SelectMaterial/SelectMaterial.jsx';
import InputDiasDeTrabalho from '../InputDiasDeTrabalho/InputDiasDeTrabalho.jsx';
import InputMetragemQuadrada from '../InputMetragemQuadrada/InputMetragemQuadrada.jsx';
import CheckBoxAranha from './components/CheckBoxAranha/CheckBoxAranha.jsx';
import CheckBoxFechamento from './components/CheckBoxFechamento/CheckBoxFechamento.jsx';
import { calculaValorDaLona } from '../../scripts/CalculaValorDaLona.js';

const PreenchimentoPadrao = () => {
  const orcamento = React.useContext(OrcamentoContext);
  const { checksDoOrcamento, dadosMetragem, dadosInseridos } = React.useContext(DadosInseridosContext);
  const {metragemQuadrada, selectedMaterial, diasDeTrabalho, selectedModelo} = dadosInseridos
  const { showPopup } = usePopup();

  const handleAddOrcamento = () => {
    const valoresDaLona = calculaValorDaLona(dadosInseridos)
    const valorFechamento = calculoFechamento(metragemQuadrada.fechamento, selectedMaterial, diasDeTrabalho.fechamento);
    const valorFechamentoAranha = calculoFechamento(metragemQuadrada.aranha, selectedMaterial, diasDeTrabalho.aranha);

    const novoOrcamento = {
      modelo: selectedModelo.label,
      material: selectedMaterial,
      diasDeTrabalho: diasDeTrabalho,
      metragemQuadrada: metragemQuadrada,
      valor: valoresDaLona.valorDaLona,
      possuiFechamento: checksDoOrcamento.fechamentoIsChecked,
      valorFechamento: valorFechamento,
      possuiAranha: checksDoOrcamento.fechamentoAranhaIsChecked,
      valorFechamentoAranha: valorFechamentoAranha,
      larguraDaLona: dadosMetragem.larguraDaLona,
      comprimentoDaLona: dadosMetragem.comprimentoDaLona,
      alturaFechamento: dadosMetragem.alturaFechamento,
      alturaAranha: dadosMetragem.alturaAranha,
      maoDeObra: valoresDaLona.valorDaMaoDeObra
    };

    orcamento.setOrcamentos([...orcamento.orcamentos, novoOrcamento]);
    showPopup('Orçamento adicionado a lista', 'blue');
  };
  
  return (
    <div className={styles.mainContainer}>
      <ExibePopUp /> 
      <h2>Orçamento Lona</h2>
      <div className={styles.modeloXMaterial} >
        <SelectModeloLona />
        <SelectMaterial />
      </div>
      <div className={styles.metragemLona} >
        <InputMetragemQuadrada id={'lona'} />
        <InputDiasDeTrabalho id={'lona'} />
      </div>
      <div>
        <CheckBoxFechamento />
      </div>
      <div>
        <CheckBoxAranha />
      </div>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: '16px' }} >
        <button onClick={handleAddOrcamento}>Adicionar Orçamento</button>
      </div>
    </div>
  );
};

export default PreenchimentoPadrao;
