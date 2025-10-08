import { create } from "zustand";

type Store = {
  visites: number;
  setVisites: () => void;
};

const useProject = create<Store>()((set) => ({
  visites: 0,
  setVisites: () => set((state) => ({ visites: state.visites + 1 })),
}));
