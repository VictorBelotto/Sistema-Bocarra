import { create } from "zustand";

const dadosMetragemInicial = {
  larguraDaLona: 0,
  comprimentoDaLona: 0,
  alturaFechamentoMetragem: 0,
  alturaAranhaMetragem: 0
};

const checksDaMetragemInicial = {};

export const useCalculadoraMetragemStore = create((set) => ({
  dadosMetragem: dadosMetragemInicial,
  adicionarMetragem: (id, valor) =>
    set((state) => ({
      dadosMetragem: {
        ...state.dadosMetragem,
        [id]: valor,
      },
    })),

  dadosMetragemOcamento: {},
  adicionarDadosMetragemOrcamento: (dados) => set({ dadosMetragemOcamento: dados }),

  stateMetragem: null,
  setStateMetragem: () => set({stateMetragem: Date.now()}),
  

  checksDaMetragem: checksDaMetragemInicial,
  adicionarCheckMetragem: (nome, valor) =>
    set((state) => ({
      checksDaMetragem: {
        ...state.checksDaMetragem,
        [nome]: valor,
      },
    })),
}));
