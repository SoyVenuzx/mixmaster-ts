export interface Ingredient {
  name: string
  measure: string
}

export interface Drink {
  id: string
  name: string
  category: string
  alcoholic: boolean
  glass: string
  instructions: string
  image: string
  ingredients: Ingredient[]
}
