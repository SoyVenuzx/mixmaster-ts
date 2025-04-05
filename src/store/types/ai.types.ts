import { RecipeDetailsMapType } from '@/interfaces/categories.interfaces'

export type AISliceType = {
  aiRecipe: string
  generatedRecipe: RecipeDetailsMapType
  generateRecipe: (prompt: string) => Promise<void>
}
