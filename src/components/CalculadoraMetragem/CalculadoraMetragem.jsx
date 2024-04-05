import React, { useState } from 'react';
import styles from './CalculadoraMetragem.module.css'; // Importando o arquivo CSS de estilos
import { calcularMetragem } from '../../scripts/CalculoMetragem.class';


const CalculadoraMetragem = () => {
  const [largura, setLargura] = useState('');
  const [comprimento, setComprimento] = useState('');
  const [altura, setAltura] = useState('');
  const [alturaAranha, setAlturaAranha] = useState('')
  const [resultadoMetragem, setResultadoMetragem] = useState('');
  const [resultadoFechamento, setResultadoFechamento] = useState('');
  const [resultadoAranha, setResultadoAranha] = useState('');
  const [isChecked, setIsChecked] = useState(false)
  const [exibeResultado, setExibeResultado] = useState(false)

  const calcular = () => {
    const resultado = calcularMetragem(largura, comprimento, altura, alturaAranha)

    setResultadoMetragem(resultado[0].toFixed(0))
    setResultadoFechamento(resultado[1].toFixed(0))
    setResultadoAranha(resultado[2].toFixed(0));
    setExibeResultado(true)
  };

 
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.calculadoraContainer}>
      <h2>Calculadora de Metragem</h2>

      <div>
        <label htmlFor="largura">Largura (m²):</label>
        <input type="number" id="largura" value={largura} onChange={(e) => setLargura(e.target.value)} />
      </div>

     <div>
        <label htmlFor="comprimento">Comprimento (m²):</label>
        <input type="number" id="comprimento" value={comprimento} onChange={(e) => setComprimento(e.target.value)} />
     </div>

      <div>
        <label htmlFor="altura">Altura do Fechamento da Lona (m²):</label>
        <input type="number" id="altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>

     <div className={styles.checkBox}>
      <label htmlFor="meuCheckbox">Adicionar Aranha?</label>
      <input 
        type="checkbox" 
        id="meuCheckbox" 
        name="meuCheckbox" 
        value="valorDoCheckbox"
        defaultChecked ={isChecked}
        onClick={handleCheckboxChange}
      />
     </div>

      {
        isChecked && (
          <>
             <label htmlFor="aranha">Altura da Aranha (m²):</label>
             <input type="number" id="aranha" value={alturaAranha} onChange={(e) => setAlturaAranha(e.target.value)} />
          </>
        )
      }

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
