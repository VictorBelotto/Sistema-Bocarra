import React, { useState } from "react";

export const OrcamentoContext = React.createContext();

export const OrcamentoStorage = ({ children }) => {
  const [orcamentos, setOrcamentos] = useState([
    {
      modelo: 'Modelo de Teste',
      material: 'Material de Teste',
      diasDeTrabalho: {
        lona: 7,
        fechamento: 2,
        aranha: 1
      },
      metragemQuadrada: {
        lona: 100, // m²
        fechamento: 50, // m²
        aranha: 20 // m²
      },
      valor: 1500, // R$
      possuiFechamento: true,
      valorFechamento: 750, // R$
      possuiAranha: true,
      valorFechamentoAranha: 300, // R$
      larguraDaLona: 10, // m
      comprimentoDaLona: 15, // m
      alturaFechamento: 2, // m
      alturaAranha: 1 // m
    }
  ]);
  
    const removerOrcamento = (index) => {
      const novosOrcamentos = orcamentos.filter((_, i) => i !== index);
      setOrcamentos(novosOrcamentos);
    };

    

  return (
    <OrcamentoContext.Provider value={{ orcamentos, setOrcamentos, removerOrcamento }}>
      {children}
    </OrcamentoContext.Provider>
  );
}
