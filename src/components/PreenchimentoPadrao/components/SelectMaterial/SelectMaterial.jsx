import React from 'react'
import { materialOptions } from '../../../../scripts/MateriaisLona';
import { DadosInseridosContext } from '../../../../scripts/DadosInseridosContext';

const SelectMaterial = () => {
  const {adicionarDado} = React.useContext(DadosInseridosContext)
  
  const [selectedMaterial, setSelectedMaterial] = React.useState('');

  const handleMaterialChange = (e) =>{
    const materialAtual = e.target.value;
    setSelectedMaterial(materialAtual);
    adicionarDado('selectedMaterial', materialAtual)
  } 

  return (
    <div className='flex w-36 flex-col gap-2 '>
      <label className='text-slate-300' htmlFor="materials">Material: </label>
      <select  
        className='bg-card-contraste text-slate-100 border-none  rounded-md py-1 px-2'
        id="materials" 
        value={selectedMaterial} 
        onChange={handleMaterialChange}
      >
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