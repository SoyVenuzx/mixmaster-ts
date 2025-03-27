import { StateCreator } from 'zustand'
import { FavoritesStoreType } from '../types/favorites.types'

export const favoritesSlice: StateCreator<FavoritesStoreType> = set => ({
  favorites: []
})
