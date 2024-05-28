import React from 'react';
import { ValoresDaEstrutura } from '../../../../scripts/ValoresDaEstrutura.js';
import BotaoPadrao from '../../../Botoes/BotaoPadrao.jsx';
import { useOrcamentosStore } from '../../../../context/OrcamentosStore.js';
import formataValor from '../../../../scripts/formataValor.js';
import Estruturas from '../Estruturas/Estruturas.jsx';
import { usePopup } from '../../../../context/PopupContext.jsx'

const TabelaEstruturas = () => {
  const [quantidadesEstrutura, setQuantidadesEstrutura] = React.useState(Array(ValoresDaEstrutura.length).fill(0));
  const [valoresUnitariosEstrutura, setValoresUnitariosEstrutura] = React.useState(ValoresDaEstrutura.map(item => item.valor));
  const [metragensEstrutura, setMetragensEstrutura] = React.useState(Array(ValoresDaEstrutura.length).fill(0));
  const adicionarOrcamentoEstruturas = useOrcamentosStore(state => state.adicionarOrcamentoEstruturas);
  const { showPopup } = usePopup();

  const handleChangeQuantidadeEstrutura = (index, value) => {
    const newQuantidades = [...quantidadesEstrutura];
    newQuantidades[index] = value;
    setQuantidadesEstrutura(newQuantidades);
  };

  const handleChangeValorUnitarioEstrutura = (index, value) => {
    const newValoresUnitarios = [...valoresUnitariosEstrutura];
    newValoresUnitarios[index] = parseFloat(value);
    setValoresUnitariosEstrutura(newValoresUnitarios);
  };

  const handleChangeMetragemEstrutura = (index, value) => {
    const newMetragens = [...metragensEstrutura];
    newMetragens[index] = parseFloat(value);
    setMetragensEstrutura(newMetragens);
  };

  const adicionarOrcamento = () => {
    const itensPreenchidosEstrutura = [];
    showPopup('Orçamento adicionado', 'blue')
    quantidadesEstrutura.forEach((qtd, index) => {
      if (qtd > 0) {
        const item = ValoresDaEstrutura[index];
        const orcamentoItem = {
          label: item.label,
          quantidade: qtd,
          valor: valoresUnitariosEstrutura[index],
          metragem: metragensEstrutura[index]
        };
        itensPreenchidosEstrutura.push(orcamentoItem);
      }
    });

    adicionarOrcamentoEstruturas(itensPreenchidosEstrutura);
  };

  const valorTotalEstrutura = ValoresDaEstrutura.reduce((total, item, index) => total + valoresUnitariosEstrutura[index] * quantidadesEstrutura[index], 0);
  const valorTotal = valorTotalEstrutura;

  return (
    <div className='flex flex-col px-6 py-4 shadow-card rounded-lg bg-card-escuro text-slate-100'>
      <h1 className='ti-1 mb-3 text-fundo-verdeH'>Estruturas</h1>

      <Estruturas
        quantidades={quantidadesEstrutura}
        valoresUnitarios={valoresUnitariosEstrutura}
        metragens={metragensEstrutura}
        handleChangeQuantidade={handleChangeQuantidadeEstrutura}
        handleChangeValorUnitario={handleChangeValorUnitarioEstrutura}
        handleChangeMetragem={handleChangeMetragemEstrutura}
      />


      <div className='flex justify-between items-center mt-4'>
        <div>
          <BotaoPadrao
            label={'Adicionar Orçamento'}
            onClick={adicionarOrcamento}
            variant={'verde'}
          />
        </div>
        <div className='rounded-lg w-fit bg-red-600 px-4 py-2'>
          <p>Total: {formataValor(valorTotal)}</p>
        </div>
      </div>
    </div>
  );
};

export default TabelaEstruturas;
