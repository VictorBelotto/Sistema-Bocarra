import React, { useState } from 'react';
import styles from './CalculadoraMetragem.module.css'; 
import { calcularMetragem } from '../../scripts/CalculoMetragem.class';
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext.jsx';

import InputLargura from './components/InputLargura/InputLargura.jsx';
import InputComprimento from './components/InputComprimento/InputComprimento.jsx';
import CheckBoxAranha from './components/CheckBoxAranha/CheckBoxAranha.jsx';
import CheckBoxFechamento from './components/CheckBoxFechamento/CheckBoxFechamento.jsx';

const CalculadoraMetragem = () => {
  const {dadosInseridos, dadosMetragem, adicionarDado, checksDaMetragem} = React.useContext(DadosInseridosContext)
  const [resultados, setResultados] = useState({});
  const [exibeResultado, setExibeResultado] = useState(false)

  const adicionaResultado = (nome, valor) => {
    setResultados(prevState => ({
      ...prevState,
      [nome] : valor
    }))
  }

  const calcular = () => {
   console.log(dadosInseridos)
   const resultado = calcularMetragem(dadosMetragem.larguraDaLona, dadosMetragem.comprimentoDaLona, dadosMetragem.alturaFechamento, dadosMetragem.alturaAranha)

   adicionaResultado('metragem', resultado['metragem'])
   adicionaResultado('fechamento', resultado['fechamento'])
   adicionaResultado('fechamentoDaAranha', resultado['fechamentoDaAranha'])
   adicionaResultado('perimetro', resultado['perimetro'])
    
   setExibeResultado(true)
  };

  const preencherOrcamento = () =>{
    adicionarDado('metragemQuadrada', {
      ...dadosInseridos.metragemQuadrada,
      lona: resultados.metragem,
      fechamento: resultados.fechamento,
      aranha: resultados.fechamentoDaAranha
    });
    
}

 

  return (
    <div className={styles.calculadoraContainer}>
      <h2>Calculadora de Metragem</h2>
      <div className={styles.comprimentoXLarguraContainer} >
        <InputLargura/>
        <InputComprimento/>
      </div>
     
      <CheckBoxFechamento/>
      <CheckBoxAranha/>
      
      <div style={{display:'flex', width:'100%', justifyContent:'center'}} >
        <button onClick={calcular}>Calcular Metragem</button>
      </div>
  
    {
      exibeResultado && (
        <div className={styles.resultados}>
        <p>Metragem Lona (m²): {resultados.metragem} m²</p>
        <p>Perimetro: {resultados.perimetro} m</p>
        {
          checksDaMetragem['fechamentoIsChecked'] &&(
          <>
            <p>Fechamento (m²): {resultados.fechamento} m²</p></>
          )
        }
        {
          checksDaMetragem['aranhaIsChecked'] && (
            <>
              <p>Aranha (m²): {resultados.fechamentoDaAranha} m²</p>
            </>
          )
        }

        
        <div style={{display:'flex', width:'100%', justifyContent:'center'}} >
          <button onClick={preencherOrcamento}>Preencher no Orçamento </button>
        </div>
      </div>
      )
    }

    </div>
  );
};

export default CalculadoraMetragem;
