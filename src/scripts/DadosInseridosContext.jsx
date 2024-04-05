import React, { useState } from "react";

export const DadosInseridosContext = React.createContext();

export const DadosInseridosStorage = ({ children }) => {
  const [dadosInseridos, setDadosInseridos] = useState({});

  const adicionarDado = (nome, valor) =>{
    setDadosInseridos(prevState => ({
      ...prevState, 
      [nome]:valor
    }));
  };

  return (
    <DadosInseridosContext.Provider value={{ dadosInseridos, adicionarDado}}>
      {children}
    </DadosInseridosContext.Provider>
  );
}
