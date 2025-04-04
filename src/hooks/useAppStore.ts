import { DrinkStore } from '@/store/drinks.store'

export const useAppStore = () => {
  const categories = DrinkStore(state => state.categories)
  const setCategories = DrinkStore(state => state.setCategories)

  const drinkSearched = DrinkStore(state => state.description)
  const setDrinkSearched = DrinkStore(state => state.setDescription)

  const category = DrinkStore(state => state.category)
  const setCategory = DrinkStore(state => state.setCategory)

  const alcoholic = DrinkStore(state => state.alcoholic)
  const setAlcoholic = DrinkStore(state => state.setAlcoholic)

  const favorites = DrinkStore(state => state.favorites)
  const handleClickFavorite = DrinkStore(state => state.handleClickFavorite)
  const canDeleteFavorite = DrinkStore(state => state.canDelete)

  const recipes = DrinkStore(state => state.recipes)
  const setRecipes = DrinkStore(state => state.setRecipes)

  const flag = DrinkStore(state => state.flag)
  const setFlag = DrinkStore(state => state.setFlag)

  const searchCategory = DrinkStore(state => state.searchCategory)
  const searchAlcoholic = DrinkStore(state => state.searchAlcoholic)
  const freezeSearchParams = DrinkStore(state => state.freezeSearchParams)

  const imageLoading = DrinkStore(state => state.imageLoading)
  const setImageLoading = DrinkStore(state => state.setImageLoading)

  const aiRecipe = DrinkStore(state => state.aiRecipe)
  const generatedRecipe = DrinkStore(state => state.generatedRecipe)
  const generateRecipe = DrinkStore(state => state.generateRecipe)

  return {
    favorites,
    handleClickFavorite,
    canDeleteFavorite,
    categories,
    drinkSearched,
    setDrinkSearched,
    setCategories,
    category,
    setCategory,
    recipes,
    setRecipes,
    flag,
    setFlag,
    alcoholic,
    setAlcoholic,
    searchCategory,
    searchAlcoholic,
    freezeSearchParams,
    imageLoading,
    setImageLoading,

    aiRecipe,
    generatedRecipe,
    generateRecipe
  }
}
