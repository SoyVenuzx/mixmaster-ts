type Category = {
  strCategory: string
}

export type RecipeSliceType = {
  description: string
  category: string
  categories: Category[]
  setDescription: (description: string) => void
  setCategory: (category: string) => void
  setCategories: (categories: Category[]) => void
}
