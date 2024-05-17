import React from 'react';
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

import { useCalculadoraMetragemStore } from '../../context/CalculadoraMetragemStore.js';
import { useOrcamentosStore } from '../../context/OrcamentosStore.js';

const PreenchimentoPadrao = () => {
  const adicionarOrcamentoLona = useOrcamentosStore(state => state.adicionarOrcamentoLona)
  const dadosMetragemOcamento = useCalculadoraMetragemStore(state => state.dadosMetragemOcamento)
  const { checksDoOrcamento, dadosInseridos } = React.useContext(DadosInseridosContext);
  const { metragemQuadrada, selectedMaterial, diasDeTrabalho, selectedModelo } = dadosInseridos
  const { showPopup } = usePopup();

  const handleAddOrcamento = () => {
    const valoresDaLona = calculaValorDaLona(dadosInseridos)
    const valorFechamento = calculoFechamento(metragemQuadrada.fechamento, selectedMaterial, diasDeTrabalho.fechamento);
    const valorFechamentoAranha = calculoFechamento(metragemQuadrada.aranha, selectedMaterial, diasDeTrabalho.aranha)

    const novoOrcamento = {
      modelo: selectedModelo,
      material: selectedMaterial,
      diasDeTrabalho: diasDeTrabalho,
      metragemQuadrada: metragemQuadrada,
      valor: Number(valoresDaLona.valorDaLona),
      possuiFechamento: checksDoOrcamento.fechamentoIsChecked,
      valorFechamento: Number(valorFechamento),
      possuiAranha: checksDoOrcamento.aranhaIsChecked,
      valorFechamentoAranha: Number(valorFechamentoAranha),
      larguraDaLona: dadosMetragemOcamento.larguraDaLona,
      comprimentoDaLona: dadosMetragemOcamento.comprimentoDaLona,
      alturaFechamento: dadosMetragemOcamento.alturaFechamentoMetragem,
      alturaAranha: dadosMetragemOcamento.alturaAranhaMetragem,
      maoDeObra: valoresDaLona.valorDaMaoDeObra,
      perimetroLona: dadosInseridos.perimetroLona,
    };
    adicionarOrcamentoLona(novoOrcamento);
    showPopup('Orçamento adicionado a lista', 'blue');
  };

  return (
    <div className='flex flex-col m-0 h-fit py-4 px-6 rounded-lg bg-card-claro shadow-card bg-opacity-90'>
      <ExibePopUp />
      <h1 className='ti-1 text-fundo-verdeH mb-3'>Orçamento Lona</h1>
      <div className='flex gap-6 mb-3 mt-1' >
        <SelectModeloLona />
        <InputMetragemQuadrada id={'lona'} />

      </div>
      <div className='flex gap-6 mb-3' >
        <SelectMaterial />
        <InputDiasDeTrabalho id={'lona'} />
      </div>

      <div className='flex flex-col gap-4' >
        <CheckBoxFechamentos
          label={'Adicionar Fechamento?'}
          id={'fechamento'}
        />
        <CheckBoxFechamentos
          label={'Adicionar Aranha?'}
          id={'aranha'}
        />

        <div className='flex container justify-center mt-2'>
          <BotaoPadrao
            variant={'roxo'}
            label={'Adicionar Orçamento'}
            onClick={handleAddOrcamento}
          />
        </div>
      </div>

    </div>
  );
};

export default PreenchimentoPadrao;
