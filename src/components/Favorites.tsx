import { favoriteDrinks } from '@/data/drinks'
import DrinkCard from './DrinkCard'
import RecipeModal from './RecipeModal'
import { useState } from 'react'
import type { Drink } from '@/types'

export default function FavoritesList () {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (drink: Drink) => {
    setSelectedDrink(drink)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  if (favoriteDrinks.length === 0) {
    return (
      <div className='text-center py-12'>
        <div className='mb-6 text-gray-400'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-16 w-16 mx-auto'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            />
          </svg>
        </div>
        <h3 className='text-xl font-medium text-gray-700 mb-2'>
          No tienes favoritos aún
        </h3>
        <p className='text-gray-500 mb-6'>
          Explora nuestro catálogo y agrega bebidas a tus favoritos
        </p>
        <a
          href='/'
          className='inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md'
        >
          Ir al Catálogo
        </a>
      </div>
    )
  }

  return (
    <div className='mt-24 flex flex-col mx-10 px-24'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {favoriteDrinks.map(drink => (
          <DrinkCard
            key={drink.id}
            drink={drink}
            onClick={() => openModal(drink)}
          />
        ))}
      </div>

      {isModalOpen && selectedDrink && (
        <RecipeModal
          drink={selectedDrink}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  )
}
