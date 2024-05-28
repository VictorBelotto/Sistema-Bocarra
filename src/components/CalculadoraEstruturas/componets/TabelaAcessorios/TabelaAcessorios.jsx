import React from 'react'
import {ValoresAcessorios} from '../../../../scripts/ValoresAcessorios.js'
import BotaoPadrao from '../../../Botoes/BotaoPadrao.jsx';
import { useOrcamentosStore } from '../../../../context/OrcamentosStore.js';
import Acessorios from '../Acessorios/Acessorios.jsx';
import formataValor from '../../../../scripts/formataValor.js';

const TabelaAcessorios = () => {
  const [quantidadesAcessorios, setQuantidadesAcessorios] = React.useState(Array(ValoresAcessorios.length).fill(0));
  const [valoresUnitariosAcessorios, setValoresUnitariosAcessorios] = React.useState(ValoresAcessorios.map(item => item.valor));

  const adicionarOrcamentoAcessorios = useOrcamentosStore(state => state.adicionarOrcamentoAcessorios);

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
    const itensPreenchidosAcessorios = [];

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

    adicionarOrcamentoAcessorios(itensPreenchidosAcessorios);
  };
  const valorTotalAcessorios = ValoresAcessorios.reduce((total, item, index) => total + valoresUnitariosAcessorios[index] * quantidadesAcessorios[index], 0);
  const valorTotal = valorTotalAcessorios;

  return (
    <div className='flex flex-col px-6 py-4 shadow-card rounded-lg bg-card-escuro text-slate-100'>
    <h1 className='ti-1 mb-3 text-fundo-verdeH'>Acessórios</h1>

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
  )
}

export default TabelaAcessorios