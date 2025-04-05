import { create } from 'zustand'
import { devtools } from 'zustand-devtools'
import { persist } from 'zustand/middleware'
import { createRecipesSlice } from './slices/recipes.slice'
import { createFavoritesSlice } from './slices/favorites.slice'
import { FavoritesSliceType } from './types/favorites.types'
import { RecipeSliceType } from './types/recipes.types'
import { createAISlice } from './slices/ai.slice'
import { AISliceType } from './types/ai.types'

export const DrinkStore = create<
  FavoritesSliceType & RecipeSliceType & AISliceType
>()(
  devtools(
    persist(
      (...a) => ({
        ...createFavoritesSlice(...a),
        ...createRecipesSlice(...a),
        ...createAISlice(...a)
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
