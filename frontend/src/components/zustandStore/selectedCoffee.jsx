import { create } from "zustand";

const useSelectedCoffee = create((set) => ({
  selectedCoffee: null,
  setSelectedCoffee: (selectedCoffee) => set({ selectedCoffee }),
}));

export default useSelectedCoffee;
