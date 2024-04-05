import React from 'react'
import { materialOptions } from '../../../../scripts/MateriaisLona';
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext';

const SelectMaterial = () => {
  const inserirDados = React.useContext(DadosInseridosContext)
  
  const [selectedMaterial, setSelectedMaterial] = React.useState('');

  const handleMaterialChange = (e) =>{
    const materialAtual = e.target.value;
    setSelectedMaterial(materialAtual);
    inserirDados.adicionarDado('selectedMaterial', materialAtual)
  } 

  return (
    <div>
       <label htmlFor="materials">Selecione um material: </label>
      <select id="materials" value={selectedMaterial} onChange={handleMaterialChange}>
        <option value="">Selecione...</option>
        {materialOptions.map((material) => (
          <option key={material.value} value={material.value}>
            {material.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectMaterial