import React from 'react'
import styles from './Observacoes.module.css'
import { useOrcamentosStore } from '../../../../context/OrcamentosStore'

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
    adicionarMaterial('lona', orcamentosLonaExportardo[0].material)

    let materialMarquise = orcamentosLonaExportardo.find(orcamento => (
      orcamento.modelo.value === 'marquise'
    ))
    adicionarMaterial('marquise', materialMarquise.material)
    console.log(materialMarquise)
  },[])

  const [frete, setFrete] = React.useState(false)
  const [estrutura, setEstrutura] = React.useState(false)

  return (
    <div className={styles.mainContainer} >
      <h3>Observações</h3>
      <span className={styles.detalhe} ></span>

      <div
        onClick={() => setFrete(!frete)}
        style={{ display: 'flex', gap: '4px', cursor: 'pointer' }}
      >
        <p>Frete e Instalação: </p>
        {frete ? <p> Incluso</p> : <p> Não incluso</p>}
      </div>

      <div
        onClick={() => setEstrutura(!estrutura)}
        style={{ display: 'flex', gap: '4px', cursor: 'pointer' }}
      >
        <p>Estrutura Metálica:</p>
        {estrutura ? <p> Incluso</p> : <p> Não incluso</p>}
      </div>


      <h3>Forma de pagamento</h3>
      <span className={styles.detalhe} ></span>
      <p>60% de entrada na assinatura do contrato</p>
      <p>40% na entrega dos itens</p>

      <h3>Materiais</h3>
      <span className={styles.detalhe} ></span>
      <p>Lona : {materiais.lona}</p>
      <p>Marquise : {materiais.marquise}</p>
      <p>Fechamento : {materiais.fechamento}</p>
      <p>&nbsp;</p>      

    </div>

  )
}

export default Observacoes