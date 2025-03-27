import { z } from 'zod'

export const CategoryResponseSchema = z.object({
  strCategory: z.string()
})

export const CategoriesResponseSchema = z.array(CategoryResponseSchema)
