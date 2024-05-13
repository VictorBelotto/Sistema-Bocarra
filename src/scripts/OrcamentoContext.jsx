import React, { useState } from "react";

export const OrcamentoContext = React.createContext();

export const OrcamentoStorage = ({ children }) => {
  const [orcamentos, setOrcamentos] = useState([]);
  
    const removerOrcamento = (index) => {
      const novosOrcamentos = orcamentos.filter((_, i) => i !== index);
      setOrcamentos(novosOrcamentos);
    };

    const [orcamentoExportado, setOrcamentoExportado] = React.useState([])


  return (
    <OrcamentoContext.Provider value={{ orcamentos, setOrcamentos, removerOrcamento, orcamentoExportado, setOrcamentoExportado }}>
      {children}
    </OrcamentoContext.Provider>
  );
}
