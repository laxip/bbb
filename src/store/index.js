import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useBeersStore = create(
  persist(
    (set, get) => ({
      beers: [],
      addBeer: (beer) => set({ beers: [...get().beers, beer] }),
      setBeers: (beers) => set({ beers }),
      removeBeer: (id) => set({ beers: get().beers.filter((beer) => beer.id !== id) }),
    }),
    {
      name: 'app-storage',
    }
  )
);
