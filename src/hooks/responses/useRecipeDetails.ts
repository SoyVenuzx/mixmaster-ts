import { getRecipeById } from '@/services/actions'
import { Drink } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useRecipeDetails = (id: Drink['id'] | null, enabled = true) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['recipes', id],
    queryFn: () => (id ? getRecipeById(id) : null),
    enabled: !!id && enabled
  })

  return { data, isLoading, isError }
}
