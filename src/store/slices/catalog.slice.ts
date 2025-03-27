import { StateCreator } from 'zustand'
import { CatalogStoreType } from '../types/catalog.types'

export const catalogSlice: StateCreator<CatalogStoreType> = set => ({
  drinks: []
})
