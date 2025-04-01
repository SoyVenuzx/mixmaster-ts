import { StateCreator } from 'zustand'
import { FavoritesStoreType } from '../types/favorites.types'

export const favoritesSlice: StateCreator<FavoritesStoreType> = (set, get) => ({
  favorites: [],
  handleClickFavorite: recipe => {
    if (get().favorites.some(favorite => favorite.id === recipe.id)) {
      set(state => ({
        favorites: state.favorites.filter(favorite => favorite.id !== recipe.id)
      }))
    } else
      set({
        favorites: [...get().favorites, recipe]
      })
  },
  canDelete: recipe =>
    get().favorites.some(favorite => favorite.id === recipe.id)
})
