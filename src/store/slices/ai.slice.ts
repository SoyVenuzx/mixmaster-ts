import { StateCreator } from 'zustand'
import { AISliceType } from '../types/ai.types'
import AiService from '@/services/AiService'
import { RecipeDetailsMapType } from '@/interfaces/categories.interfaces'

export const createAISlice: StateCreator<AISliceType> = (set, get) => ({
  aiRecipe: '',
  generatedRecipe: {} as RecipeDetailsMapType,
  generateRecipe: async (prompt: string) => {
    if (get().aiRecipe) set({ aiRecipe: '' })

    const data = await AiService.generateRecipe(prompt)

    for await (const chunk of data) {
      set(state => ({
        aiRecipe: state.aiRecipe + chunk
      }))
    }

    const recipeJSON: RecipeDetailsMapType = JSON.parse(
      get().aiRecipe.toString()
    )

    const imageurl =
      'https://www.feebrothers.com/wp-content/uploads/FB_Recipe_Default-Images_Cocktail-2-Brown-768x576.jpg'

    recipeJSON.thumb = imageurl
    set({ generatedRecipe: recipeJSON })
  }
})
