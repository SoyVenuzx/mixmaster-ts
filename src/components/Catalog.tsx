import { useState } from 'react'
import DrinkCard from './DrinkCard'
import RecipeModal from './RecipeModal'
import { drinks } from '@/data/drinks'
import type { Drink } from '@/types'
import SearchFilter from './SearchFilter'

export default function Catalog () {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (drink: Drink) => {
    setSelectedDrink(drink)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id='catalog' className='py-20 bg-[hsl(30,20%,98%)]'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold relative inline-block'>
            <span className='relative z-10'>Nuestro Catálogo</span>
            <span className='absolute -bottom-2 left-0 right-0 h-3 bg-orange-200 -rotate-1 z-0'></span>
          </h2>
          <div className='w-20 h-1 bg-orange-500 mx-auto mt-4'></div>
        </div>

        <SearchFilter />

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {drinks.map(drink => (
            <DrinkCard
              key={drink.id}
              drink={drink}
              onClick={() => openModal(drink)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && selectedDrink && (
        <RecipeModal
          drink={selectedDrink}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  )
}
