import React, { useState } from "react";

export const OrcamentoContext = React.createContext();

export const OrcamentoStorage = ({ children }) => {
  const [orcamentos, setOrcamentos] = useState([]);
  const [orcamentosSalvos, setOrcamentosSalvos] = useState([]);
  
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
