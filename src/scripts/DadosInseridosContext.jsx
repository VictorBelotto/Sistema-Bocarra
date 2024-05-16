import React from "react";

export const DadosInseridosContext = React.createContext();

const diasDeTrabalho = {
  lona: 25,
  fechamento: 3,
  aranha: 1,
}

const metragemQuadrada = {
  lona: 0,
  fechamento: 0,
  aranha: 0,
}

export const DadosInseridosStorage = ({ children }) => {
  const [dadosInseridos, setDadosInseridos] = React.useState({
    diasDeTrabalho: diasDeTrabalho,
    metragemQuadrada: metragemQuadrada,
  });

  const adicionarDado = (nome, valor) => {
    setDadosInseridos(prevState => ({
      ...prevState,
      [nome]: valor
    }));
  };

  const [checksDoOrcamento, setChecksDoOrcamento] = React.useState({})

  const adicionarChecksDoOrcamento = (nome, valor) => {
    setChecksDoOrcamento(prevState => ({
      ...prevState,
      [nome]: valor
    }))
  }

  return (
    <DadosInseridosContext.Provider value={{ dadosInseridos, adicionarDado, checksDoOrcamento, adicionarChecksDoOrcamento }}>
      {children}
    </DadosInseridosContext.Provider>
  );
}
