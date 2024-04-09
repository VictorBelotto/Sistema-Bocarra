import React from 'react'
import { ModelosLona } from '../../../../scripts/ModelosDaLona';
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext';

const SelectModeloLona = () => {
  const {adicionarDado} = React.useContext(DadosInseridosContext)
  const [selectedModelo, setSelectedModelo] = React.useState({ value: '', label: '' });

  const handleModeloChange = (e) => {
    const modeloAtual = { value: e.target.value, label: e.target.options[e.target.selectedIndex].text}
    setSelectedModelo(modeloAtual);
    adicionarDado('selectedModelo',modeloAtual)
}

  return (
    <div>
      <label htmlFor="modelo">Selecione o modelo da Lona: </label>
      <select id="modelo" value={selectedModelo.value} onChange={handleModeloChange}>
        <option value="">Selecione...</option>
        {ModelosLona.selectModelos.map((modelo) => (
          <option key={modelo.value} value={modelo.value}>
            {modelo.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectModeloLona