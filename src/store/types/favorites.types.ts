import { RecipeDetailsMapType } from '@/interfaces/categories.interfaces'

export type FavoritesStoreType = {
  favorites: RecipeDetailsMapType[]
  handleClickFavorite: (recipe: RecipeDetailsMapType) => void
  canDelete: (recipe: RecipeDetailsMapType) => boolean
}
