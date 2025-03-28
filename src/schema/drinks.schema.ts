import { z } from 'zod'

export const CategoryResponseSchema = z.object({
  strCategory: z.string()
})

export const CategoriesResponseSchema = z.array(CategoryResponseSchema)

export const SearchFilterSchema = z.object({
  ingredient: z.string(),
  category: z.string(),
  alcoholic: z.string()
})

export const DrinkSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string().url()
})

export const DrinksSchema = z.array(DrinkSchema)

export const PageSchema = z.object({
  data: z.array(DrinkSchema),
  currentPage: z.number(),
  nextPage: z.number().optional()
})

export const RecipesResponseSchema = z.object({
  recipes: z.object({
    pages: z.array(PageSchema),
    pageParams: z.array(z.number())
  })
})
