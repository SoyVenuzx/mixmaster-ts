import { useInfiniteQuery } from '@tanstack/react-query'
import { DrinkType, SearchFilter } from '@/interfaces/categories.interfaces'
import { getRecipes } from '@/services/actions'
import { useEffect } from 'react'
import { useAppStore } from '../useAppStore'
import { RecipesResponseType } from '../../interfaces/categories.interfaces'

const preloadImages = async (recipes: DrinkType[]) => {
  const imagePromises = recipes.map(recipe => {
    return new Promise<void>(resolve => {
      const img = new Image()
      img.src = recipe.strDrinkThumb
      img.onload = () => resolve()
      img.onerror = () => resolve() // Resuelve incluso si hay error
    })
  })

  // Establecer un timeout para evitar bloqueos
  return Promise.allSettled(
    imagePromises.map(p =>
      Promise.race([
        p,
        new Promise<void>(resolve => setTimeout(resolve, 3000)) // 3 segundos de timeout
      ])
    )
  )
}

export const useRecipes = (searchFilter: SearchFilter) => {
  const { setRecipes, flag, setFlag } = useAppStore()

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch
  } = useInfiniteQuery({
    queryKey: [
      'recipes',
      searchFilter.category,
      searchFilter.ingredient,
      searchFilter.alcoholic
    ],
    queryFn: ({ pageParam = 0 }) => {
      return getRecipes(pageParam, searchFilter)
    },
    staleTime: 1000 * 30,
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.nextPage,
    enabled: false
  })

  useEffect(() => {
    if (flag) {
      refetch()
      setFlag(false)
    }
  }, [flag, refetch, setFlag])

  useEffect(() => {
    if (data) {
      const recipesResponse: RecipesResponseType = {
        recipes: {
          pages: data.pages.map(page => ({
            ...page,
            nextPage: page.nextPage ?? undefined
          })),
          pageParams: data.pageParams.map(param => Number(param))
        }
      }

      setRecipes(recipesResponse)
    }
  }, [data])

  return {
    recipes: data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  }
}
