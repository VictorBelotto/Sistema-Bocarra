import { create } from "zustand";

export const useValoresImpressaoStore = create((set) =>({
  valorTotal : 0,
  setValorTotal : (valor) => set({valorTotal: valor}),

  contador: 1,
  setContador: () => set((state) =>({
    contador: state.contador < 3? state.contador + 1 : 1
  }))

}))