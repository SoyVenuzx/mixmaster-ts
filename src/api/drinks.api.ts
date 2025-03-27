import axios from 'axios'

const baseURL = ' https://www.thecocktaildb.com/api/json/v1/1'

const drinksApi = axios.create({
  baseURL
})

export { drinksApi }
