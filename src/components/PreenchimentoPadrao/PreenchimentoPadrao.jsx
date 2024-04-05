import React, { useState } from 'react';
import styles from './PreenchimentoPadrao.module.css';
import { ModelosLona } from '../../scripts/ModelosDaLona';
import { materialOptions } from '../../scripts/MateriaisLona';
import { orcamentoLona } from '../../scripts/orcamentoLona.class.js';
import CardOrcamentoLona from '../CardOrcamentoLona/CardOrcamentoLona';
import { OrcamentoContext } from '../../scripts/OrcamentoContext.jsx';
import { calculoFechamento } from '../../scripts/CalculoFechamento.js';

const PreenchimentoPadrao = () => {
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedModelo, setSelectedModelo] = useState({ value: '', label: '' });
  const [diasTrabalho, setDiasTrabalho] = useState('');
  const [metragem, setMetragem] = useState('');
  const [metragemFechamento, setMetragemFechamento] = useState('');
  const [metragemFechamentoAranha, setMetragemFechamentoAranha] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isAranhaChecked, setIsAranhaChecked] = useState(false);

  const orcamento = React.useContext(OrcamentoContext);

  const handleModeloChange = (e) => setSelectedModelo({ value: e.target.value, label: e.target.options[e.target.selectedIndex].text });
  const handleMaterialChange = (e) => setSelectedMaterial(e.target.value);

  const handleAddOrcamento = () => {
    const maoDeObra = 2727.27 * ModelosLona[selectedModelo.value]['multiplicador'];
    const valorMaterial = ModelosLona[selectedModelo.value][selectedMaterial];

    const valor = ((diasTrabalho * maoDeObra) + (metragem * valorMaterial)).toFixed(2);
    const valorFechamento = calculoFechamento(metragemFechamento, selectedMaterial, diasTrabalho)
    const valorFechamentoAranha = calculoFechamento(metragemFechamentoAranha, selectedMaterial, diasTrabalho)

    const novoOrcamento = new orcamentoLona(selectedModelo.label, selectedMaterial, diasTrabalho, metragem, valor, valorFechamento, valorFechamentoAranha);
    orcamento.setOrcamentos([...orcamento.orcamentos, novoOrcamento]);
    
  };

  return (
    <div className={styles.mainContainer}>
      <h2>Orçamento Lona</h2>
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

      <div>
        <label htmlFor="diasTrabalho">Dias de trabalho</label>
        <input type="number" id="diasTrabalho" value={diasTrabalho} onChange={(e) => setDiasTrabalho(e.target.value)} />
      </div>

      <div>
        <label htmlFor="metragem">Metragem (m²) da lona</label>
        <input type="number" id="metragem" value={metragem} onChange={(e) => setMetragem(e.target.value)} />
      </div>

      <div className={styles.checkBox}>
        <label htmlFor="meuCheckbox">Adicionar Fechamento?</label>
        <input
          type="checkbox"
          id="meuCheckbox"
          name="meuCheckbox"
          value="valorDoCheckbox"
          defaultChecked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />
      </div>

      {isChecked && (
        <div>
          <label htmlFor="metragemFechamento">Metragem (m²) do fechamento</label>
          <input type="number" id="metragemFechamento" value={metragemFechamento} onChange={(e) => setMetragemFechamento(e.target.value)} />
        </div>
      )}

      <div className={styles.checkBox}>
        <label htmlFor="aranhaCheckbox">Adicionar Aranha?</label>
        <input
          type="checkbox"
          id="aranhaCheckbox"
          name="aranhaCheckbox"
          value="valorDoAranhaCheckbox"
          defaultChecked={isAranhaChecked}
          onClick={() => setIsAranhaChecked(!isAranhaChecked)}
        />
      </div>

      {isAranhaChecked && (
        <div>
          <label htmlFor="metragemAranha">Metragem (m²) da aranha</label>
          <input type="number" id="metragemAranha" value={metragemFechamentoAranha} onChange={(e) => setMetragemFechamentoAranha(e.target.value)} />
        </div>
      )}

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
