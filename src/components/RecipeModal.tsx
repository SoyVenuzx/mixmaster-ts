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
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 modal-backdrop animate-fade-in'>
      <div
        ref={modalRef}
        className='bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto'
      >
        <div className='sticky top-0 bg-white p-4 border-b flex items-center justify-between'>
          <h3 className='text-xl font-bold'>{drink.name}</h3>
          <button
            onClick={onClose}
            className='p-1 rounded-full hover:bg-gray-100'
          >
            <X className='h-6 w-6' />
          </button>
        </div>

        <div className='p-6'>
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='md:w-1/3'>
              <img
                src={drink.image || '/placeholder.svg'}
                alt={drink.name}
                className='w-full h-auto rounded-lg'
              />
              <div className='mt-4 flex flex-wrap gap-2'>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    drink.alcoholic
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {drink.alcoholic ? 'Con alcohol' : 'Sin alcohol'}
                </span>
                <span className='px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700'>
                  {drink.category}
                </span>
                <span className='px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700'>
                  {drink.glass}
                </span>
              </div>
            </div>

            <div className='md:w-2/3'>
              <h4 className='text-lg font-semibold mb-2'>Ingredientes</h4>
              <ul className='mb-6 space-y-2'>
                {drink.ingredients.map((ingredient, index) => (
                  <li key={index} className='flex items-center'>
                    <span className='w-2 h-2 bg-orange-500 rounded-full mr-2'></span>
                    <span>
                      {ingredient.measure} {ingredient.name}
                    </span>
                  </li>
                ))}
              </ul>

              <h4 className='text-lg font-semibold mb-2'>Instrucciones</h4>
              <p className='text-gray-700 mb-6'>{drink.instructions}</p>

              <button className='w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md flex items-center justify-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
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
