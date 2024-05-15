import create from "zustand";

const dadosMetragemInicial = {
  larguraDaLona: '',
  comprimentoDaLona: '',
  alturaFechamento: ''
};

const checksDaMetragemInicial = {};

export const useCalculadoraMetragemStore = create((set) => ({
  dadosMetragem: dadosMetragemInicial,
  adicionarMetragem: (nome, valor) =>
    set((state) => ({
      dadosMetragem: {
        ...state.dadosMetragem,
        [nome]: valor,
      },
    })),
  stateMetragem: null,
  setStateMetragem: () =>
    set({ stateMetragem: Date.now() }),
  resetaMetragem: () =>
    set({
      stateMetragem: Date.now(),
      dadosMetragem: dadosMetragemInicial,
    }),
  checksDaMetragem: checksDaMetragemInicial,
  adicionarCheckMetragem: (nome, valor) =>
    set((state) => ({
      checksDaMetragem: {
        ...state.checksDaMetragem,
        [nome]: valor,
      },
    })),
}));
