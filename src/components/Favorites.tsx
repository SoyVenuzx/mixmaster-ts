import DrinkCard from './DrinkCard'
import RecipeModal from './RecipeModal'
import { useState } from 'react'
import type { Drink } from '@/types'
import { useAppStore } from '@/hooks/useAppStore'
import { RecipeDetailsMapType } from '@/interfaces/categories.interfaces'

export default function FavoritesList () {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { favorites } = useAppStore()

  const openModal = (drink: RecipeDetailsMapType) => {
    const newDrink: Drink = {
      id: drink.id,
      name: drink.name,
      image: drink.thumb,
      category: drink.category,
      alcoholic: drink.alcoholic === 'Alcoholic'
    }
    setSelectedDrink(newDrink)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  if (favorites.length === 0) {
    return (
      <div className='py-24 text-center'>
        <div className='mb-6 text-gray-400'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-16 h-16 mx-auto'
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
        <h3 className='mb-2 text-xl font-medium text-gray-700'>
          No tienes favoritos aún
        </h3>
        <p className='mb-6 text-gray-500'>
          Explora nuestro catálogo y agrega bebidas a tus favoritos
        </p>
        <a
          href='/'
          className='inline-block px-6 py-3 text-white transition-colors bg-orange-500 rounded-lg shadow-md hover:bg-orange-600'
        >
          Ir al Catálogo
        </a>
      </div>
    )
  }

  return (
    <div className='flex flex-col px-24 mx-10 mt-24'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        {favorites.map(drink => {
          console.log({ drink })
          const newDrink: Drink = {
            id: drink.id,
            name: drink.name,
            image: drink.thumb,
            category: drink.category,
            alcoholic: drink.alcoholic === 'Alcoholic'
          }
          return (
            <DrinkCard
              key={drink.id}
              drink={newDrink}
              onClick={() => openModal(drink)}
            />
          )
        })}
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
