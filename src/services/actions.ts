import { drinksApi } from '@/api/drinks.api'
import {
  CategoryResponseType,
  DrinksType,
  SearchFilter
} from '@/interfaces/categories.interfaces'
import { CategoriesResponseSchema, DrinksSchema } from '@/schema/drinks.schema'

const LIMIT = 8

export const getRecipes = async (
  pageParam: number,
  searchFilter?: SearchFilter
): Promise<{
  data: DrinksType
  currentPage: number
  nextPage: number | null
}> => {
  const defaults = {
    ingredient: 'Gin',
    category: 'Cocktail',
    alcoholic: 'Alcoholic'
  }

  // Función para obtener el valor del filtro o su valor por defecto
  const getFilterValue = (
    key: keyof SearchFilter,
    defaultValue: string
  ): string | null => {
    return (
      searchFilter?.[key] ??
      (searchFilter?.[key] !== null ? defaultValue : null)
    )
  }

  // Construir los parámetros de la URL
  const urlParams = [
    { key: 'i', value: getFilterValue('ingredient', defaults.ingredient) },
    { key: 'c', value: getFilterValue('category', defaults.category) },
    { key: 'a', value: getFilterValue('alcoholic', defaults.alcoholic) }
  ]
    .filter(param => param.value !== null)
    .map(param => `${param.key}=${param.value}`)

  // Verificar si hay al menos un parámetro
  if (urlParams.length === 0) {
    throw new Error('Se requiere al menos un filtro de búsqueda')
  }

  try {
    const filteredUrl = `/filter.php?${urlParams.join('&')}`
    const { data } = await drinksApi.get(filteredUrl)

    const result = DrinksSchema.safeParse(data.drinks)
    if (!result.success) {
      throw new Error('No se han podido obtener los datos.')
    }

    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: result.data.slice(pageParam, pageParam + LIMIT),
          currentPage: pageParam,
          nextPage:
            pageParam + LIMIT < result.data.length ? pageParam + LIMIT : null
        })
      }, 1000)
    })
  } catch (error) {
    console.error('Error al obtener recetas:', error)
    throw error
  }
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
