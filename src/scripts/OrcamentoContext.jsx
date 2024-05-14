import React, { useState } from "react";

export const OrcamentoContext = React.createContext();

export const OrcamentoStorage = ({ children }) => {
  const [orcamentos, setOrcamentos] = useState([]);
  
    const removerOrcamento = (index) => {
      const novosOrcamentos = orcamentos.filter((_, i) => i !== index);
      setOrcamentos(novosOrcamentos);
    };

    const [orcamentoExportado, setOrcamentoExportado] = React.useState([])

    const [valorTotal, setValorTotal] = React.useState({
      lona: 10,
      estrutura: 20,
      acessorios: 0,
      total: 0
    })
    React.useEffect(() => {
      setValorTotal(prevState => ({
        ...prevState,
        total: prevState.estrutura + prevState.lona + prevState.acessorios
      }));
    }, [valorTotal.estrutura, valorTotal.lona, valorTotal.acessorios]);

    const adicionaValorTotal = (id, valor) =>{
      setValorTotal(prevState =>({
        ...prevState,
        [id] : valor
      }))
    }

  return (
    <OrcamentoContext.Provider value={{ orcamentos, setOrcamentos, removerOrcamento, orcamentoExportado, setOrcamentoExportado, valorTotal, adicionaValorTotal }}>
      {children}
    </OrcamentoContext.Provider>
  );
}
