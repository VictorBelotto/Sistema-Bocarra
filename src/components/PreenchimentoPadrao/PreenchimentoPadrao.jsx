import React, { useState } from 'react';
import styles from './PreenchimentoPadrao.module.css';
import { ModelosLona } from '../../scripts/ModelosDaLona';
import { materialOptions } from '../../scripts/MateriaisLona';
import { orcamentoLona } from '../../scripts/orcamentoLona.class.js';
import CardOrcamentoLona from '../CardOrcamentoLona/CardOrcamentoLona';
import {OrcamentoContext} from '../../scripts/OrcamentoContext.jsx'

const PreenchimentoPadrao = () => {
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedModelo, setSelectedModelo] = useState({ value: '', label: '' });
  const [diasTrabalho, setDiasTrabalho] = useState('');
  const [metragem, setMetragem] = useState('');
  const orcamento = React.useContext(OrcamentoContext);


  const handleModeloChange = (e) => {
    const selectedValue = e.target.value;
    const selectedLabel = e.target.options[e.target.selectedIndex].text;
    setSelectedModelo({ value: selectedValue, label: selectedLabel });
  };

  const handleMaterialChange = (e) => {
    setSelectedMaterial(e.target.value);
  };

  const handleDiasTrabalhoChange = (e) => {
    setDiasTrabalho(e.target.value);
  };

  const handleMetragemChange = (e) => {
    setMetragem(e.target.value);
  };

  const handleAddOrcamento = () => {
    const maoDeObra = 2727.27 * ModelosLona[selectedModelo.value]['multiplicador'];
    const valorMaterial = ModelosLona[selectedModelo.value][selectedMaterial];
    const conta = ((diasTrabalho * maoDeObra) + (metragem * valorMaterial)).toFixed(2);

    const novoOrcamento = new orcamentoLona(selectedModelo.label, selectedMaterial, diasTrabalho, metragem, conta);
    orcamento.setOrcamentos([...orcamento.orcamentos, novoOrcamento]);
  };

  return (
    <div className={styles.mainContainer}>
      <label htmlFor="modelo">Selecione o modelo da Lona: </label>
      <select id="modelo" value={selectedModelo.value} onChange={handleModeloChange}>
        <option value="">Selecione...</option>
        {ModelosLona.selectModelos.map((modelo) => (
          <option key={modelo.value} value={modelo.value}>
            {modelo.label}
          </option>
        ))}
      </select>

      <label htmlFor="materials">Selecione um material: </label>
      <select id="materials" value={selectedMaterial} onChange={handleMaterialChange}>
        <option value="">Selecione...</option>
        {materialOptions.map((material) => (
          <option key={material.value} value={material.value}>
            {material.label}
          </option>
        ))}
      </select>

      <label htmlFor="diasTrabalho">Dias de trabalho</label>
      <input type="number" id="diasTrabalho" value={diasTrabalho} onChange={handleDiasTrabalhoChange} />

      <label htmlFor="metragem">Metragem m²</label>
      <input type="number" id="metragem" value={metragem} onChange={handleMetragemChange} />

      <button onClick={handleAddOrcamento}>Adicionar Orçamento</button>

      <div className={styles.orcamentosContainer}>
        {orcamento.orcamentos.map((orcamento, index) => (
          <CardOrcamentoLona key={index} orcamento={orcamento} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default PreenchimentoPadrao;
