import { StateCreator } from 'zustand'
import { NotificationStoreType } from '../types/notifications.types'

export const notificationSlice: StateCreator<NotificationStoreType> = set => ({
  notifications: []
})
