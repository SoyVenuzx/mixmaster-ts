import { RecipesResponseType } from '@/interfaces/categories.interfaces'

type Category = {
  strCategory: string
}

export type RecipeSliceType = {
  description: string
  category: string
  alcoholic: string

  searchCategory: string
  searchAlcoholic: string

  categories: Category[]
  recipes: RecipesResponseType
  flag: boolean

  imageLoading: boolean

  setDescription: (description: string) => void
  setCategory: (category: string) => void
  setAlcoholic: (alcoholic: string) => void
  setCategories: (categories: Category[]) => void
  setRecipes: (recipes: RecipesResponseType) => void
  setFlag: (flag: boolean) => void

  freezeSearchParams: () => void
  setImageLoading: (imageLoading: boolean) => void
}
