import React from "react";

export const DadosMetragemContext = React.createContext();

export const DadosMetragemProvider = ({children}) => {
  const [dadosMetragemOrcamento, setDadosMetragemOrcamento] = React.useState({})

  return (
    <DadosMetragemContext.Provider value={{dadosMetragemOrcamento, setDadosMetragemOrcamento}}>
      {children}
    </DadosMetragemContext.Provider>
  )

}