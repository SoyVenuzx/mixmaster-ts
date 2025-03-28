import { StateCreator } from 'zustand'
import { RecipeSliceType } from '../types/recipes.types'

export const createRecipesSlice: StateCreator<RecipeSliceType> = set => ({
  description: '',
  category: 'Cocktail',
  alcoholic: 'Alcoholic',

  searchCategory: 'Cocktail',
  searchAlcoholic: 'Alcoholic',

  categories: [],
  recipes: [],
  flag: false,

  imageLoading: false,

  setDescription: description => set({ description }),
  setCategory: category => set({ category }),
  setAlcoholic: alcoholic => set({ alcoholic }),

  setCategories: categories => set({ categories }),
  setRecipes: recipes => set({ recipes }),

  setFlag: flag => set({ flag }),

  freezeSearchParams: () =>
    set(state => ({
      searchCategory: state.category,
      searchAlcoholic: state.alcoholic
    })),

  setImageLoading: imageLoading => set({ imageLoading })
})
