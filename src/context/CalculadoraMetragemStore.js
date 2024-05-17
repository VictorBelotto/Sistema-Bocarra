import {create} from "zustand";

const dadosMetragemInicial = {
  larguraDaLona: '',
  comprimentoDaLona: '',
  alturaFechamentoMetragem: '',
  alturaAranhaMetragem: ''
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

    dadosMetragemOcamento : {},
    adicionarDadosMetragemOrcamento : (dados) => set({dadosMetragemOcamento : dados}),

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
