import { DrinkStore } from '@/store/drinks.store'

export const useAppStore = () => {
  const categories = DrinkStore(state => state.categories)
  const setCategories = DrinkStore(state => state.setCategories)

  const drinkSearched = DrinkStore(state => state.description)
  const setDrinkSearched = DrinkStore(state => state.setDescription)

  const category = DrinkStore(state => state.category)
  const setCategory = DrinkStore(state => state.setCategory)

  const drinks = DrinkStore(state => state.drinks)
  const favorites = DrinkStore(state => state.favorites)
  const notifications = DrinkStore(state => state.notifications)

  return {
    drinks,
    favorites,
    notifications,
    categories,
    drinkSearched,
    setDrinkSearched,
    setCategories,
    category,
    setCategory
  }
}
