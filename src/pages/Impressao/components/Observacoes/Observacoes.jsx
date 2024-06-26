import React from 'react'
import styles from './Observacoes.module.css'
import { useOrcamentosStore } from '../../../../context/OrcamentosStore'
import EstruturaEFrete from './components/EstruturaEFrete'
import FormaDePagamento from './components/FormaDePagamento'
import Materiais from './components/Materiais'

const Observacoes = () => {
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
    <div className={styles.mainContainer} >
      <h3>Observações</h3>
      <span className={styles.detalhe} ></span>

      <EstruturaEFrete/>


      <h3>Forma de pagamento</h3>
      <span className={styles.detalhe} ></span>
   
      <FormaDePagamento/>

      <h3>Materiais</h3>
      <span className={styles.detalhe} ></span>
      
      <Materiais/>

    </div>

  )
}

export default Observacoes