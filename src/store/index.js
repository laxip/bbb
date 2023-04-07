import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

export const useBeersStore = create(
  persist(
    (set, get) => ({
      beers: [],
      addBeer: (beer) =>
        set({
          beers: [
            ...get().beers,
            {
              ...beer,
              id: uuidv4(),
            },
          ],
        }),
      setBeers: (beers) => set({ beers }),
      removeBeer: (id) => set({ beers: get().beers.filter((beer) => beer.id !== id) }),
    }),
    {
      name: 'app-storage',
    }
  )
);
