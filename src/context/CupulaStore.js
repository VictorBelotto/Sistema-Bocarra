import { create } from "zustand";

export const useCupulaStore = create((set) => ({
  inputValues: {},
  adicionarValueCupula: (id, value) =>
    set((state) => ({
      inputValues: {
        ...state.inputValues,
        [id]: value,
      },
    })),
}));
