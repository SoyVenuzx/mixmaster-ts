import { useAppStore } from '../useAppStore'

export const useSearchFilter = () => {
  const { drinkSearched, setDrinkSearched, category, setCategory } =
    useAppStore()

  const handleChangeDescription = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setDrinkSearched(value)
  }
  const handleChangeCategory = ({
    target: { value }
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(value)
  }

  const canSubmit = () =>
    Object.values({ drinkSearched, category }).includes('')

  return { handleChangeDescription, handleChangeCategory, canSubmit }
}
