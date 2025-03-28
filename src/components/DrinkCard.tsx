import type { Drink } from '@/types'
import { LazyImage } from './LazyImage'

interface DrinkCardProps {
  drink: Drink
  onClick: () => void
}

export default function DrinkCard ({ drink, onClick }: DrinkCardProps) {
  return (
    <div
      className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col'
      onClick={onClick}
    >
      <div className='h-48 overflow-hidden relative'>
        <img
          src={drink.image || '/placeholder.svg?height=300&width=300'}
          alt={drink.name}
          className='w-full h-full object-cover transition-transform hover:scale-105 duration-300'
        />
      </div>
      <div className='p-4 flex flex-col flex-grow'>
        <h3 className='text-xl font-semibold mb-2 text-gray-900 line-clamp-3'>
          {drink.name}
        </h3>
        <div className='flex items-center justify-between mt-auto'>
          <span className='text-sm text-gray-500'>{drink.category}</span>
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              drink.alcoholic
                ? 'bg-orange-100 text-orange-700'
                : 'bg-green-100 text-green-700'
            }`}
          >
            {drink.alcoholic ? 'Con alcohol' : 'Sin alcohol'}
          </span>
        </div>
      </div>
    </div>
  )
}
