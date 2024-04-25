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
import { calculaValorDaLona } from '../../scripts/CalculaValorDaLona.js';
import CheckBoxFechamentos from './components/CheckBoxFechamentos.jsx';
import BotaoPadrao from '../Botoes/BotaoPadrao.jsx'

const PreenchimentoPadrao = () => {
  const orcamento = React.useContext(OrcamentoContext);
  const { checksDoOrcamento, dadosMetragem, dadosInseridos } = React.useContext(DadosInseridosContext);
  const {metragemQuadrada, selectedMaterial, diasDeTrabalho, selectedModelo} = dadosInseridos
  const { showPopup } = usePopup();

  const handleAddOrcamento = () => {
    const valoresDaLona = calculaValorDaLona(dadosInseridos)
    const valorFechamento = calculoFechamento(metragemQuadrada.fechamento, selectedMaterial, diasDeTrabalho.fechamento);
    const valorFechamentoAranha = calculoFechamento(metragemQuadrada.aranha, selectedMaterial, diasDeTrabalho.aranha) 

    const novoOrcamento = {
      modelo: selectedModelo.label,
      material: selectedMaterial,
      diasDeTrabalho: diasDeTrabalho,
      metragemQuadrada: metragemQuadrada,
      valor: valoresDaLona.valorDaLona,
      possuiFechamento: checksDoOrcamento.fechamentoIsChecked,
      valorFechamento: valorFechamento,
      possuiAranha: checksDoOrcamento.aranhaIsChecked,
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
    <div className='flex flex-col w-96 m-0 py-4 px-6 rounded-lg bg-card-claro shadow-card bg-opacity-90'>
      <ExibePopUp /> 
      <h1 className='ti-1 text-white mb-3'>Orçamento Lona</h1>
      <div className='flex justify-between mb-3' >
        <SelectModeloLona/>
        <SelectMaterial />
      </div>
      <div className='flex justify-between mb-3' >
        <InputMetragemQuadrada id={'lona'} />
        <InputDiasDeTrabalho id={'lona'} />
      </div>
     
      <div className='mb-3' >
        <CheckBoxFechamentos
          label={'Adicionar Fechamento?'}
          id={'fechamento'}
        />
      </div>
      <div className='mb-3' >
        <CheckBoxFechamentos
          label={'Adicionar Aranha?'}
          id={'aranha'}
        />
      </div>
      <div className='flex container justify-center mt-2'>
        <BotaoPadrao
          variant={'roxo'}
          label={'Adicionar Orçamento'}
          onClick={handleAddOrcamento}
        />
      </div>
    </div>
  );
};

export default PreenchimentoPadrao;
