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

  const adicionarDado = (nome, valor) =>{
    setDadosInseridos(prevState => ({
      ...prevState, 
      [nome]:valor
    }));
  };


  const [dadosMetragem, setDadosMetragem] = React.useState({})
  const adicionarMetragem = (nome, valor) =>{ 
    setDadosMetragem(prevState => ({
      ...prevState, 
      [nome]:valor
    }))
  }
  const [checksDaMetragem, setChecksDaMetragem ] = React.useState({})

  const adicionarCheckMetragem = (nome, valor) =>{
    setChecksDaMetragem(prevState =>({
      ...prevState,
      [nome]: valor
    }))
  }

  const [checksDoOrcamento, setChecksDoOrcamento] = React.useState({})
  const adicionarChecksDoOrcamento = (nome, valor) =>{
    setChecksDoOrcamento(prevState =>({
      ...prevState,
      [nome]: valor
    }))
  }

  return (
    <DadosInseridosContext.Provider value={{ dadosInseridos, adicionarDado, dadosMetragem, adicionarMetragem, checksDaMetragem, adicionarCheckMetragem, checksDoOrcamento, adicionarChecksDoOrcamento}}>
      {children}
    </DadosInseridosContext.Provider>
  );
}
