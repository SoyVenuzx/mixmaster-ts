import { drinksApi } from '@/api/drinks.api'
import { CategoryResponseType } from '@/interfaces/categories.interfaces'
import { CategoriesResponseSchema } from '@/schema/drinks.schema'

export const getRecipes = async (): Promise<void> => {
  const { data } = await drinksApi.get('')

  return data
}

export const getCategories = async (): Promise<CategoryResponseType[]> => {
  const {
    data: { drinks }
  } = await drinksApi.get('/list.php?c=list')

  const result = CategoriesResponseSchema.safeParse(drinks)

  if (!result.success)
    throw new Error('No se han podido obtener las categorías')

  return result.data
}
