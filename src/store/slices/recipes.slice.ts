import { StateCreator } from 'zustand'
import { RecipeSliceType } from '../types/recipes.types'

export const createRecipesSlice: StateCreator<RecipeSliceType> = set => ({
  description: '',
  category: '',
  categories: [],
  setCategory: category => set({ category }),
  setCategories: categories => set({ categories }),
  setDescription: description => set({ description })
})
