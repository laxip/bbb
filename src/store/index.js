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
      getBeer: (id) => get().beers.find((b) => b.id === id),
      updateBeer: (id, beer) => {
        const index = get().beers.findIndex((b) => b.id === id);

        if (index >= 0) {
          const copy = [...get().beers.filter((beer) => beer.id !== id)];

          copy[index] = {
            ...copy[index],
            ...beer,
          };

          set({ beers: copy });
        }
      },
    }),
    {
      name: 'app-storage',
    }
  )
);
