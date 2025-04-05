import { openrouter } from '@/lib/ai'
import { streamText } from 'ai'

export default {
  async generateRecipe (prompt: string) {
    const result = streamText({
      model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
      prompt: `Necesito una receta de: ${prompt}, pero me gustaría que con la respuesta crees un objeto json siguiendo la siguiente estructura:
      export const RecipeDetailsMapSchema = z.object({
        id: z.string(),
        name: z.string(),
        thumb: z.string(),
        instructions: z.string(),
        category: z.string(),
        alcoholic: z.string(),
        ingredients: z.array(
          z.object({
            name: z.string(),
            measure: z.string().nullable()
          })
        )
      })

      Me gustaría que simplemente generes el objeto, no digas nada más, solo el objeto sin más. El objeto generalo como string, no hace falta el formato de markdown.
      Me gustaría de igual forma que en el campo de thumb, ingreses un prompt que me permita capturarlo y buscar una imagen, necesito que conforme al prompt, si el prompt es piña con vodka por ejemplo, tu respuesta deberia ser el nombre de una bebida existente que contenga esos ingredientes como lo es la piña colada. 
      `
    })

    return result.textStream
  }
}
