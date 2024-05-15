import { create } from "zustand";

const inputValuesInitial = {
  passo: 0.5,
};

const checksInitial = {
  passoCheck: false,
  travecaoCheck: false,
  parrudaCheck: false,
};

export const useTorreStore = create((set) => {
  return {
    inputValues: inputValuesInitial,
    checks: checksInitial,
    adicionarValueTorre: (id, value) =>
      set((state) => ({
        inputValues: {
          ...state.inputValues,
          [id]: parseFloat(value),
        },
      })),
    adicionarCheck: (id, value) =>
      set((state) => ({
        checks: {
          ...state.checks,
          [id]: value,
        },
      })),
  };
});
