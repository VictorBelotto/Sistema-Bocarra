import React from 'react';
import styles from './PreenchimentoPadrao.module.css';
import { OrcamentoContext } from '../../scripts/OrcamentoContext.jsx';
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext.jsx';
import { calculoFechamento } from '../../scripts/CalculoFechamento.js';
import { ModelosLona } from '../../scripts/ModelosDaLona.js';
import ExibePopUp from '../ExibePopUp/ExibePopUp.jsx';
import { usePopup } from '../../context/PopupContext.jsx';

import SelectModeloLona from './components/SelectModeloLona/SelectModeloLona.jsx';
import SelectMaterial from './components/SelectMaterial/SelectMaterial.jsx';
import InputDiasDeTrabalho from '../InputDiasDeTrabalho/InputDiasDeTrabalho.jsx';
import InputMetragemQuadrada from '../InputMetragemQuadrada/InputMetragemQuadrada.jsx';
import CheckBoxAranha from './components/CheckBoxAranha/CheckBoxAranha.jsx';
import CheckBoxFechamento from './components/CheckBoxFechamento/CheckBoxFechamento.jsx';

const PreenchimentoPadrao = () => {
  const orcamento = React.useContext(OrcamentoContext);
  const { checksDoOrcamento, dadosMetragem, dadosInseridos } = React.useContext(DadosInseridosContext);

  const { showPopup } = usePopup();

  const handleAddOrcamento = () => {
    const maoDeObra = 2727.27 * ModelosLona[dadosInseridos.selectedModelo.value]['multiplicador'];
    const valorMaterial = ModelosLona[dadosInseridos.selectedModelo.value][dadosInseridos.selectedMaterial];
    const valorDaLona = ((dadosInseridos.diasDeTrabalho.lona * maoDeObra) + (dadosInseridos.metragemQuadrada.lona * valorMaterial)).toFixed(2);

    const valorFechamento = calculoFechamento(dadosInseridos.metragemQuadrada.fechamento, dadosInseridos.selectedMaterial, dadosInseridos.diasDeTrabalho.fechamento);
    const valorFechamentoAranha = calculoFechamento(dadosInseridos.metragemQuadrada.aranha, dadosInseridos.selectedMaterial, dadosInseridos.diasDeTrabalho.aranha);

    const novoOrcamento = {
      modelo: dadosInseridos.selectedModelo.label,
      material: dadosInseridos.selectedMaterial,
      diasDeTrabalho: dadosInseridos.diasDeTrabalho,
      metragemQuadrada: dadosInseridos.metragemQuadrada,
      valor: valorDaLona,
      possuiFechamento: checksDoOrcamento.fechamentoIsChecked,
      valorFechamento: valorFechamento,
      possuiAranha: checksDoOrcamento.fechamentoAranhaIsChecked,
      valorFechamentoAranha: valorFechamentoAranha,
      larguraDaLona: dadosMetragem.larguraDaLona,
      comprimentoDaLona: dadosMetragem.comprimentoDaLona,
      alturaFechamento: dadosMetragem.alturaFechamento,
      alturaAranha: dadosMetragem.alturaAranha,
    };

    

    orcamento.setOrcamentos([...orcamento.orcamentos, novoOrcamento]);
    console.log(orcamento)
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
