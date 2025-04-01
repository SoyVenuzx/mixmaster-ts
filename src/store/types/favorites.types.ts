import { RecipeDetailsMapType } from '@/interfaces/categories.interfaces'

export type FavoritesStoreType = {
  favorites: RecipeDetailsMapType[]
  handleFavorites: (recipe: RecipeDetailsMapType) => void
}
