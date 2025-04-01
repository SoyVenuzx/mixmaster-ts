import { StateCreator } from 'zustand'
import { FavoritesStoreType } from '../types/favorites.types'

export const favoritesSlice: StateCreator<FavoritesStoreType> = (set, get) => ({
  favorites: [],
  handleFavorites: recipe => {
    if (get().favorites.some(favorite => favorite.id === recipe.id)) {
      //
    }
    {
      console.log('no exist')

      set({
        favorites: [...get().favorites, recipe]
      })
    }
  }
})
