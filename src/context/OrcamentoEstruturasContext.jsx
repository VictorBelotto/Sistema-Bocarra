import React from "react";

export const OrcamentosEstruturasContext = React.createContext();

export const OrcamentosEstruturasStorage = ({children}) => {
  const [orcamentosEstruturas, setOrcamentosEstruturas] = React.useState([])

  const removerOrcamentoEstrutura = () => {
    setOrcamentosEstruturas([]);
  };

  const [orcamentosEstruturasExportado, setOrcamentosEstruturasExportado] = React.useState([])

  return (
    <OrcamentosEstruturasContext.Provider value={{orcamentosEstruturas, setOrcamentosEstruturas , removerOrcamentoEstrutura, setOrcamentosEstruturasExportado, orcamentosEstruturasExportado}}>
      {children}
    </OrcamentosEstruturasContext.Provider>
  )
}