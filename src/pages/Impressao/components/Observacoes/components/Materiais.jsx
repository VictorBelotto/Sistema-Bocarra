import React from 'react'
import { useOrcamentosStore } from '../../../../../context/OrcamentosStore'

const Materiais = () => {
  const orcamentosLonaExportardo = useOrcamentosStore(state => state.orcamentosLonaExportardo)
  const [materiais, setMateriais] = React.useState({
    lona: '',
    marquise: '',
    fechamento: ''
  })
  const adicionarMaterial = (id, valor) =>{
    setMateriais(prevState =>({
      ...prevState,
      [id]: valor,
    }))
  }

  React.useEffect(() =>{
    if(orcamentosLonaExportardo.length >= 1){
      adicionarMaterial('lona', orcamentosLonaExportardo[0].material)

      let materialMarquise = orcamentosLonaExportardo.find(orcamento => (
        orcamento.modelo.value === 'marquise'
      ))
      if(materialMarquise){
        adicionarMaterial('marquise', materialMarquise.material)
      }
    }
    
  },[orcamentosLonaExportardo])
  return (
    <>
      <p>Lona : {materiais.lona}</p>
      <p>Marquise : {materiais.marquise}</p>
      <p>Fechamento : {materiais.fechamento}</p>
      <p>&nbsp;</p>    
    </>
  )
}

export default Materiais