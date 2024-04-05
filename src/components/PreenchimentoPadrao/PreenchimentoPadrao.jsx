import React, { useState } from 'react';
import styles from './PreenchimentoPadrao.module.css';
import { orcamentoLona } from '../../scripts/orcamentoLona.class.js';
import CardOrcamentoLona from '../CardOrcamentoLona/CardOrcamentoLona';
import { OrcamentoContext } from '../../scripts/OrcamentoContext.jsx';
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext.jsx';
import { calculoFechamento } from '../../scripts/CalculoFechamento.js';


import SelectModeloLona from './components/SelectModeloLona/SelectModeloLona.jsx';
import SelectMaterial from './components/SelectMaterial/SelectMaterial.jsx';



const PreenchimentoPadrao = () => {

  const [diasTrabalho, setDiasTrabalho] = useState('');
  const [metragem, setMetragem] = useState('');
  const [metragemFechamento, setMetragemFechamento] = useState('');
  const [metragemFechamentoAranha, setMetragemFechamentoAranha] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isAranhaChecked, setIsAranhaChecked] = useState(false);

  const orcamento = React.useContext(OrcamentoContext);
  const inserirDados = React.useContext(DadosInseridosContext);

 

  const handleAddOrcamento = () => {
    const maoDeObra = 2727.27 * ModelosLona[selectedModelo.value]['multiplicador'];
    const valorMaterial = ModelosLona[selectedModelo.value][selectedMaterial];

    const valor = ((diasTrabalho * maoDeObra) + (metragem * valorMaterial)).toFixed(2);
    const valorFechamento = calculoFechamento(metragemFechamento, selectedMaterial, diasTrabalho)
    const valorFechamentoAranha = calculoFechamento(metragemFechamentoAranha, selectedMaterial, diasTrabalho)

    const novoOrcamento = new orcamentoLona(selectedModelo.label, selectedMaterial, diasTrabalho, metragem, valor, valorFechamento, valorFechamentoAranha);
    orcamento.setOrcamentos([...orcamento.orcamentos, novoOrcamento]);
    inserirDados.adicionarDado('valorFechamentoAranha',valorFechamentoAranha )
    inserirDados.adicionarDado('valorFechamento',valorFechamento )
    inserirDados.adicionarDado('valor',valor )
  };

  return (
    <div className={styles.mainContainer}>
      
      <h2>Orçamento Lona</h2>
      <SelectModeloLona/>
      <SelectMaterial/>
      

    

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
      <button onClick={()=> console.log(inserirDados)}>ver</button>

      <div className={styles.orcamentosContainer}>
        {orcamento.orcamentos.map((orcamento, index) => (
          <CardOrcamentoLona key={index} orcamento={orcamento} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PreenchimentoPadrao;
