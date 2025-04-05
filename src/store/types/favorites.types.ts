import { RecipeDetailsMapType } from '@/interfaces/categories.interfaces'

export type FavoritesSliceType = {
  favorites: RecipeDetailsMapType[]
  handleClickFavorite: (recipe: RecipeDetailsMapType) => void
  canDelete: (recipe: RecipeDetailsMapType) => boolean
}
