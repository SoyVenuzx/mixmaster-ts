import { drinksApi } from '@/api/drinks.api'
import {
  CategoryResponseType,
  DrinksType,
  RecipeDetailsMapType,
  RecipeDetailsResponseType,
  SearchFilter
} from '@/interfaces/categories.interfaces'
import { CategoriesResponseSchema, DrinksSchema } from '@/schema/drinks.schema'
import {
  RecipeAPIResponseSchema,
  RecipeDetailsMapSchema
} from '@/schema/recipes.schema'
import { Drink } from '@/types'

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

// Función para obtener y transformar los detalles de una receta
export const getRecipeById = async (
  id: Drink['id']
): Promise<RecipeDetailsMapType> => {
  const {
    data: { drinks }
  } = await drinksApi.get(`/lookup.php?i=${id}`)

  const apiResult = RecipeAPIResponseSchema.safeParse(drinks[0])

  if (!apiResult.success) throw new Error('No se ha podido obtener la receta')

  const rawData = apiResult.data

  // Transformar los datos
  const ingredients: { name: string; measure: string | null }[] = []

  // Extraer ingredientes y medidas
  for (let i = 1; i <= 6; i++) {
    const ingredientKey = `strIngredient${i}` as keyof RecipeDetailsResponseType
    const measureKey = `strMeasure${i}` as keyof RecipeDetailsResponseType

    const ingredientName = rawData[ingredientKey]

    // Solo agregamos ingredientes que no sean null o cadena vacía
    if (ingredientName && ingredientName.trim() !== '') {
      ingredients.push({
        name: ingredientName,
        measure: rawData[measureKey]
      })
    }
  }

  // Crear el objeto transformado
  const transformedData: RecipeDetailsMapType = {
    id: rawData.idDrink,
    name: rawData.strDrink,
    thumb: rawData.strDrinkThumb,
    instructions: rawData.strInstructions,
    ingredients
  }
  // Validar con el nuevo schema
  const result = RecipeDetailsMapSchema.safeParse(transformedData)

  if (!result.success) {
    console.error('Error al transformar datos:', result.error)
    throw new Error('Error al transformar los datos de la receta')
  }

  return result.data
}
