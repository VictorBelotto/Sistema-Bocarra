import React from "react";

export const OrcamentosEstruturasContext = React.createContext();

export const OrcamentosEstruturasStorage = ({children}) => {
  const [orcamentosEstruturas, setOrcamentosEstruturas] = React.useState([])

  const removerOrcamentoEstrutura = () => {
    setOrcamentosEstruturas([]);
  };

 

  return (
    <OrcamentosEstruturasContext.Provider value={{orcamentosEstruturas, setOrcamentosEstruturas , removerOrcamentoEstrutura}}>
      {children}
    </OrcamentosEstruturasContext.Provider>
  )
}