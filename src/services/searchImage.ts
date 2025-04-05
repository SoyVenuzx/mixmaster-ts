import axios from 'axios'

const API_KEY = import.meta.env.VITE_GOOGLE_KEY
const SEARCH_ENGINE_ID = import.meta.env.VITE_SEARCHENGINE_KEY

export async function searchImage (query: string) {
  console.log({ query })
  try {
    const response = await axios.get(
      `https://www.googleapis.com/customsearch/v1`,
      {
        params: {
          key: API_KEY,
          cx: SEARCH_ENGINE_ID,
          q: query,
          searchType: 'image',
          num: 1 // Limitar los resultados a una sola imagen
        }
      }
    )

    const imageData = response.data
    if (imageData.items && imageData.items.length > 0) {
      const imageUrl = imageData.items[0].link // Obtener la URL de la primera imagen
      console.log('URL de la imagen encontrada:', imageUrl)
      return imageUrl
    } else {
      throw new Error('No se encontraron imágenes')
    }
  } catch (error) {
    console.error('Error al buscar la imagen:', error)
  }
}
