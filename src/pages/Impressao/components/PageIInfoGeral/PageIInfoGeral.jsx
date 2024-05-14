import React from 'react'
import styles from './PageIInfoGeral.module.css'
import Footer from '../Footer/Footer.jsx'
import { OrcamentoContext } from '../../../../scripts/OrcamentoContext.jsx'
OrcamentoContext

const PageIInfoGeral = () => {
  const {orcamentoExportado} = React.useContext(OrcamentoContext)
  let durabilidade
  if(orcamentoExportado.length >= 1){
    const material = orcamentoExportado[0].material
     durabilidade = material === 'MP1400' || material === 'MP10722'? '5 a 7' : '3 a 5'
  }else{
     durabilidade = ''
  }

  const [visivel, setVisivel] = React.useState(false)


  return (
    <div className={styles.mainContainer} >
      <h3>Confecção</h3>
      <span className={styles.detalhe}></span>
      <p><strong>Lona:</strong> Lona calandrada com tramas de fibras de poliéster impermeável aditivadas com anti-chamas, anti-uv, revestida com black-out solar. Moldes unidos por solda eletrônica (radiofrequência) mais reforços nos pontos de maior tensão;</p>
      <ul className={styles.lista} >
        <li>Chapas reforçadas nos pontos de contato com a estrutura;</li>
        <li>Costuras com faixas que podem ser substituídas;</li>
        <li>Reforços com faixas de poliéster nos pontos de maior tensão;</li>
      </ul>
      <p><strong>Estrutura metálica:</strong> Uniões realizadas através de solda no sistema MIG, Pintada;</p>

      <h3>Garantias</h3>
      <span className={styles.detalhe}></span>
      <div style={{display:'flex', justifyContent:'space-between'}} >

        <div onClick={()=> setVisivel(!visivel)} className={styles.garantiasContainer}>
          <h3>Lona Vinílica</h3>
          {visivel && (
            <>
              <p ><strong>Durabilidade Média: </strong>{durabilidade} Anos (atrelado à manutenção preventiva adequada)</p>
            </>
          )}
          <p><strong>Garantia: </strong>1 Ano (pelo fabricante)</p>
          </div>
        <div>
          <h3>Estrutura metálica</h3>
          
          <p><strong>Durabilidade Média: </strong>sem prazo pré-definido</p>
          <p><strong>Garantia: </strong>1 Ano (pelo fabricante)</p>
          </div>
      </div>

      <h3>Observações Gerais</h3>
      <span className={styles.detalhe}></span>
      <ul className={styles.lista}>
        <li>Não há garantia contra danos causados por caso fortuito e força maior (tempestades, vendavais etc).</li>
        <li>Perderá a garantia caso seja retirado algum tipo de peça, reforço, fixação sem consentimento do responsável BOCARRA CIRCUS;</li>
        <li>É necessário um responsável da empresa contratante no local da entrega para acompanhar e indicar a equipe o local exato da montagem (se houver);</li>
        <li>Caso a montagem for iniciada será cobrado o valor total do Frete/Montagem para modificar o local (sujeito a disponibilidade da Equipe).</li>
        <li>O cliente deverá confeccionar bases em concreto após marcação da área para fixação dos pés direitos. Qualquer custo com obras relacionadas a alvenaria e fundação são por conta do contratante.</li>
        <li>A reserva se fará mediante acerto de condições de pagamento;</li>
        <li>Após reserva e pagamento de 60% não haverá devolução do valor caso o cliente cancele o pedido;</li>
        <li>Proposta válida por 15 dias / após esse período poderá sofrer reajuste.</li>
        <li>O prazo de confecção pode variar dependendo da data de compra, e de acordo com a disponibilidade da empresa.</li>
      </ul>

      <br />
      <br />
      <br />
      <p ><strong>Obrigado por fazer negócios conosco!</strong></p>
      <br />
      <br />
      <br />
      <Footer/>

    </div>
  )
}

export default PageIInfoGeral