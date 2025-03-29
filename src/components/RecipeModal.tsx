import type { Drink } from '@/types'
import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface RecipeModalProps {
  drink: Drink
  isOpen: boolean
  onClose: () => void
}

export default function RecipeModal ({
  drink,
  isOpen,
  onClose
}: RecipeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 modal-backdrop animate-fade-in'>
      <div
        ref={modalRef}
        className='bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto'
      >
        <div className='sticky top-0 flex items-center justify-between p-4 bg-white border-b'>
          <h3 className='text-xl font-bold'>{drink.name}</h3>
          <button
            onClick={onClose}
            className='p-1 rounded-full hover:bg-gray-100'
          >
            <X className='w-6 h-6' />
          </button>
        </div>

        <div className='p-6'>
          <div className='flex flex-col gap-6 md:flex-row'>
            <div className='md:w-1/3'>
              <img
                src={drink.image || '/placeholder.svg'}
                alt={drink.name}
                className='w-full h-auto rounded-lg'
              />
              <div className='flex flex-wrap gap-2 mt-4'>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    drink.alcoholic
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {drink.alcoholic ? 'Con alcohol' : 'Sin alcohol'}
                </span>
                <span className='px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full'>
                  {drink.category}
                </span>
                {/* <span className='px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full'>
                  {drink?.glass ?? ''}
                </span> */}
              </div>
            </div>

            <div className='md:w-2/3'>
              <h4 className='mb-2 text-lg font-semibold'>Ingredientes</h4>
              <ul className='mb-6 space-y-2'>
                {/* {drink.ingredients.map((ingredient, index) => (
                  <li key={index} className='flex items-center'>
                    <span className='w-2 h-2 mr-2 bg-orange-500 rounded-full'></span>
                    <span>
                      {ingredient.measure} {ingredient.name}
                    </span>
                  </li>
                ))} */}
              </ul>

              <h4 className='mb-2 text-lg font-semibold'>Instrucciones</h4>
              {/* <p className='mb-6 text-gray-700'>{drink.instructions}</p> */}

              <button className='flex items-center justify-center w-full gap-2 py-3 text-white transition-colors bg-orange-500 rounded-lg shadow-md hover:bg-orange-600'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                    clipRule='evenodd'
                  />
                </svg>
                Agregar a Favoritos
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
