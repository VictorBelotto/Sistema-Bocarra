import React from 'react';
import { ValoresDaEstrutura } from '../../../../scripts/ValoresDaEstrutura.js';
import { ValoresAcessorios } from '../../../../scripts/ValoresAcessorios.js';
import BotaoPadrao from '../../../Botoes/BotaoPadrao.jsx';
import { useOrcamentosStore } from '../../../../context/OrcamentosStore.js';
import formataValor from '../../../../scripts/formataValor.js';
import Estruturas from '../Estruturas/Estruturas.jsx';
import Acessorios from '../Acessorios/Acessorios.jsx';

const PreenchimentoTabela = () => {
  const [quantidadesEstrutura, setQuantidadesEstrutura] = React.useState(Array(ValoresDaEstrutura.length).fill(0));
  const [valoresUnitariosEstrutura, setValoresUnitariosEstrutura] = React.useState(ValoresDaEstrutura.map(item => item.valor));
  const [metragensEstrutura, setMetragensEstrutura] = React.useState(Array(ValoresDaEstrutura.length).fill(0));
  const [quantidadesAcessorios, setQuantidadesAcessorios] = React.useState(Array(ValoresAcessorios.length).fill(0));
  const [valoresUnitariosAcessorios, setValoresUnitariosAcessorios] = React.useState(ValoresAcessorios.map(item => item.valor));

  const adicionarOrcamentoEstruturas = useOrcamentosStore(state => state.adicionarOrcamentoEstruturas);
  const adicionarOrcamentoAcessorios = useOrcamentosStore(state => state.adicionarOrcamentoAcessorios);

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

  const handleChangeQuantidadeAcessorios = (index, value) => {
    const newQuantidades = [...quantidadesAcessorios];
    newQuantidades[index] = value;
    setQuantidadesAcessorios(newQuantidades);
  };

  const handleChangeValorUnitarioAcessorios = (index, value) => {
    const newValoresUnitarios = [...valoresUnitariosAcessorios];
    newValoresUnitarios[index] = parseFloat(value);
    setValoresUnitariosAcessorios(newValoresUnitarios);
  };

  const adicionarOrcamento = () => {
    const itensPreenchidosEstrutura = [];
    const itensPreenchidosAcessorios = [];

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

    quantidadesAcessorios.forEach((qtd, index) => {
      if (qtd > 0) {
        const item = ValoresAcessorios[index];
        const orcamentoItem = {
          label: item.label,
          quantidade: qtd,
          valor: valoresUnitariosAcessorios[index],
          id: item.item
        };
        itensPreenchidosAcessorios.push(orcamentoItem);
      }
    });

    adicionarOrcamentoEstruturas(itensPreenchidosEstrutura);
    adicionarOrcamentoAcessorios(itensPreenchidosAcessorios);
  };

  const valorTotalEstrutura = ValoresDaEstrutura.reduce((total, item, index) => total + valoresUnitariosEstrutura[index] * quantidadesEstrutura[index], 0);
  const valorTotalAcessorios = ValoresAcessorios.reduce((total, item, index) => total + valoresUnitariosAcessorios[index] * quantidadesAcessorios[index], 0);
  const valorTotal = valorTotalEstrutura + valorTotalAcessorios;

  return (
    <div className='flex flex-col px-6 py-4 shadow-card rounded-lg bg-card-escuro text-slate-100'>
      <h1 className='ti-1 mb-3 text-fundo-verdeH'>Estruturas e Acessórios</h1>

      <Estruturas
        quantidades={quantidadesEstrutura}
        valoresUnitarios={valoresUnitariosEstrutura}
        metragens={metragensEstrutura}
        handleChangeQuantidade={handleChangeQuantidadeEstrutura}
        handleChangeValorUnitario={handleChangeValorUnitarioEstrutura}
        handleChangeMetragem={handleChangeMetragemEstrutura}
      />

      <Acessorios
        quantidades={quantidadesAcessorios}
        valoresUnitarios={valoresUnitariosAcessorios}
        handleChangeQuantidade={handleChangeQuantidadeAcessorios}
        handleChangeValorUnitario={handleChangeValorUnitarioAcessorios}
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

export default PreenchimentoTabela;
