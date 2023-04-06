import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useBeersStore = create(
  persist(
    (set, get) => ({
      beers: [],
      addBeer: (beer) => set({ bears: [...get().bears, beer] }),
      setBeers: (beers) => set({ beers }),
    }),
    {
      name: 'app-storage',
    }
  )
);
