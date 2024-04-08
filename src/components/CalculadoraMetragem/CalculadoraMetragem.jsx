import React, { useState } from 'react';
import styles from './CalculadoraMetragem.module.css'; 
import { calcularMetragem } from '../../scripts/CalculoMetragem.class';
import { DadosInseridosContext } from '../../scripts/DadosInseridosContext.jsx';

import InputLargura from './components/InputLargura/InputLargura.jsx';
import InputComprimento from './components/InputComprimento/InputComprimento.jsx';
import CheckBoxAranha from './components/CheckBoxAranha/CheckBoxAranha.jsx';
import CheckBoxFechamento from './components/CheckBoxFechamento/CheckBoxFechamento.jsx';

const CalculadoraMetragem = () => {
 
  const [resultadoMetragem, setResultadoMetragem] = useState('');
  const [resultadoFechamento, setResultadoFechamento] = useState('');
  const [resultadoAranha, setResultadoAranha] = useState('');

  const [exibeResultado, setExibeResultado] = useState(false)

  const dadosInseridos = React.useContext(DadosInseridosContext)

  const calcular = () => {
    const resultado = calcularMetragem(largura, comprimento, altura, alturaAranha)

    setResultadoMetragem(resultado[0].toFixed(0))
    setResultadoFechamento(resultado[1].toFixed(0))
    setResultadoAranha(resultado[2].toFixed(0));
    setExibeResultado(true)
  };

 

  return (
    <div className={styles.calculadoraContainer}>
      <h2>Calculadora de Metragem</h2>
      <InputLargura/>
      <InputComprimento/>
      <CheckBoxFechamento/>
      <CheckBoxAranha/>
      
    

      <button onClick={calcular}>Calcular Metragem</button>
  
    {
      exibeResultado && (
        <div className={styles.resultados}>
        <p>Metragem: {resultadoMetragem} m²</p>
        <p>Fechamento: {resultadoFechamento} m²</p>
        {
          isChecked && (
            <>
              <p>Aranha: {resultadoAranha} m²</p>
            </>
          )
        }
      </div>
      )
    }

    </div>
  );
};

export default CalculadoraMetragem;
