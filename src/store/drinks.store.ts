import { create } from 'zustand'
import { devtools } from 'zustand-devtools'
import { persist } from 'zustand/middleware'
import { createRecipesSlice } from './slices/recipes.slice'
import { notificationSlice } from './slices/notifications.slice'
import { favoritesSlice } from './slices/favorites.slice'
import { NotificationStoreType } from './types/notifications.types'
import { FavoritesStoreType } from './types/favorites.types'
import { RecipeSliceType } from './types/recipes.types'

export const DrinkStore = create<
  NotificationStoreType & FavoritesStoreType & RecipeSliceType
>()(
  devtools(
    persist(
      (...a) => ({
        ...notificationSlice(...a),
        ...favoritesSlice(...a),
        ...createRecipesSlice(...a)
      }),
      {
        name: 'drink-store',
        partialize: state => ({
          favorites: state.favorites
        })
      }
    )
  )
)
