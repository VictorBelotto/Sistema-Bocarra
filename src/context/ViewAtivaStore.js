import { create } from "zustand"

export const useViewAtivaStore = create((set) =>{
  return {
    viewAtiva : '',
    setViewAtiva : (view) => set({viewAtiva : view})
  }
})