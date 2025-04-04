import { z } from 'zod'
import {
  CategoryResponseSchema,
  DrinkSchema,
  DrinksSchema,
  PageSchema,
  RecipesResponseSchema,
  SearchFilterSchema
} from '../schema/drinks.schema'
import {
  RecipeAPIResponseSchema,
  RecipeDetailsMapSchema
} from '@/schema/recipes.schema'

export type CategoryResponseType = z.infer<typeof CategoryResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type DrinkType = z.infer<typeof DrinkSchema>
export type DrinksType = z.infer<typeof DrinksSchema>
export type PageType = z.infer<typeof PageSchema>
export type RecipesResponseType = z.infer<typeof RecipesResponseSchema>
export type RecipeDetailsResponseType = z.infer<typeof RecipeAPIResponseSchema>
export type RecipeDetailsMapType = z.infer<typeof RecipeDetailsMapSchema>
