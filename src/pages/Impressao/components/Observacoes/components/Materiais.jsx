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
      adicionarMaterial('fechamento' ,orcamentosLonaExportardo[0].material)
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
      <p><strong>Lona :</strong> {materiais.lona}</p>
      <p><strong>Marquise :</strong> {materiais.marquise}</p>
      <p><strong>Fechamento :</strong> {materiais.fechamento}</p>
      <p>&nbsp;</p>    
    </>
  )
}

export default Materiais