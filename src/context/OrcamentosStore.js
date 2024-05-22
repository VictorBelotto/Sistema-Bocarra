import { create } from "zustand";

export const useOrcamentosStore = create((set) =>{
  return {
    orcamentosLona: [],

    setOrcamentosLona: (orcamentos) => set({ orcamentosLona: orcamentos }),
  
    adicionarOrcamentoLona: (orcamento) =>
      set((state) => ({ orcamentosLona: [...state.orcamentosLona, orcamento] })),
  
    removerOrcamentoLona: (index) =>
      set((state) => ({
        orcamentosLona: state.orcamentosLona.filter((_, i) => i !== index),
      })),
  
    orcamentosLonaExportardo: [],
    setOrcamentoLonaExportado: (orcamento) => set({ orcamentosLonaExportardo: orcamento }),
  
    orcamentosEstruturas: [],
    adicionarOrcamentoEstruturas : (orcamento) => set({orcamentosEstruturas : orcamento}),
    removerOrcamentoEstrutura: () => set({ orcamentosEstruturas: []}),

    orcamentosEstruturaExportardo: [],
    setOrcamentoEstruturaExportado: (orcamento) => set({ orcamentosEstruturaExportardo: orcamento }),

    orcamentoAcessorios: [],
    adicionarOrcamentoAcessorios: (acessorio) => set({orcamentoAcessorios: acessorio}),
    removerOrcamentoAcessorio: () => set({ orcamentoAcessorios: []}),

    orcamentosAcessoriosExportardo: [],
    setOrcamentoAcessoriosExportado: (orcamento) => set({ orcamentosAcessoriosExportardo: orcamento }),
  
 
  }
});
