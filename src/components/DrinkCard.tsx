import type { Drink } from '@/types'

interface DrinkCardProps {
  drink: Drink
  onClick: () => void
}

export default function DrinkCard ({ drink, onClick }: DrinkCardProps) {
  return (
    <div
      className='flex flex-col h-full overflow-hidden transition-shadow bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg'
      onClick={onClick}
    >
      <div className='relative h-48 overflow-hidden'>
        <img
          src={drink.image || '/placeholder.svg?height=300&width=300'}
          alt={drink.name}
          className='object-cover w-full h-full transition-transform duration-300 hover:scale-105'
        />
      </div>
      <div className='flex flex-col flex-grow p-4'>
        <h3 className='mb-2 text-xl font-semibold text-gray-900 line-clamp-3'>
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
