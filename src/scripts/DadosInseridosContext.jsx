import React from "react";

export const DadosInseridosContext = React.createContext();

export const DadosInseridosStorage = ({ children }) => {
  const [dadosInseridos, setDadosInseridos] = React.useState({
    diasDeTrabalhoAranha: 1,
    diasDeTrabalhoFechamento: 3,
    diasDeTrabalho: 25,
    metragemFechamentoAranha: 0,
    metragemFechamento: 0,
    metragemLona: 0
  });

  const [dadosMetragem, setDadosMetragem] = React.useState({})
  const adidionaMetragem = (nome, valor) =>{ 
    setDadosMetragem(prevState => ({
      ...prevState, 
      [nome]:valor
    }))
  }

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
