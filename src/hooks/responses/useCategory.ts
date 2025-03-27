import { getCategories } from '@/services/actions'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useAppStore } from '../useAppStore'

export const useCategory = () => {
  const { setCategories } = useAppStore()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 60
  })

  useEffect(() => {
    if (data) setCategories(data)
  })

  return { isLoading, isError }
}
