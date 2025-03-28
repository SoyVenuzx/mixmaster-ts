import { useAppStore } from '../useAppStore'

export const useSearchFilter = () => {
  const {
    setFlag,
    setDrinkSearched,
    setCategory,
    setAlcoholic,
    freezeSearchParams,
    drinkSearched,
    category,
    alcoholic
  } = useAppStore()

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

  const handleChangeAlcoholic = ({
    target: { value }
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setAlcoholic(value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    freezeSearchParams()

    setFlag(true)
    //fetchRecipes({ ingredient: drinkSearched, category })
  }

  const canSubmit = () =>
    [drinkSearched, alcoholic, category].some(value => value !== '')

  return {
    handleChangeDescription,
    handleChangeCategory,
    handleChangeAlcoholic,
    handleSubmit,
    canSubmit
  }
}
