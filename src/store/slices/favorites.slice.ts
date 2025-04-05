import { StateCreator } from 'zustand'
import { FavoritesSliceType } from '../types/favorites.types'

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (
  set,
  get
) => ({
  favorites: [],
  handleClickFavorite: async recipe => {
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
