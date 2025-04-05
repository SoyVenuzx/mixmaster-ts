import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sleep = (seconds: number): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, seconds * 1000)
  })
}

export function isObjectEmpty (obj: any) {
  return obj && typeof obj === 'object' && Object.keys(obj).length === 0
}
