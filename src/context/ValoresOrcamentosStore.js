import {create} from "zustand";

const valoresTotaisInicial = {
  lona: 0,
  estrutura: 0,
  acessorios: 0,
};

export const useValoresOrcamentosStore = create((set) => ({
  valoresTotais: valoresTotaisInicial,
  adicionarValor: (id, valor) =>
    set((state) => ({
      valoresTotais: {
        ...state.valoresTotais,
        [id]: Number(valor),
      },
    })),
}));
