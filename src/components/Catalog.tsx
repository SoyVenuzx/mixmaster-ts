import { useEffect, useState } from 'react'
import DrinkCard from './DrinkCard'
import RecipeModal from './RecipeModal'
import SearchFilter from './SearchFilter'
import { useAppStore } from '@/hooks/useAppStore'
import { useRecipes } from '@/hooks/responses/useRecipes'
import { LoadingSpinner } from './LoadingSpinner'
import { useInView } from 'react-intersection-observer'
import { Drink } from '@/types'

export default function Catalog () {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { ref, inView } = useInView({ threshold: 0 })

  const {
    searchCategory,
    searchAlcoholic,
    setFlag,
    drinkSearched,
    category,
    recipes,
    alcoholic
  } = useAppStore()

  const { isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useRecipes({
      ingredient: drinkSearched,
      category,
      alcoholic
    })

  useEffect(() => {
    setFlag(true)
  }, [])

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [hasNextPage, inView, fetchNextPage])

  const openModal = async (drink: Drink) => {
    setSelectedDrink(drink)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id='catalog' className='py-20 bg-[hsl(30,20%,98%)]'>
      <div className='container px-4 mx-auto'>
        <div className='mb-12 text-center'>
          <h2 className='relative inline-block text-4xl font-bold'>
            <span className='relative z-10'>Nuestro Catálogo</span>
            <span className='absolute left-0 right-0 z-0 h-3 bg-orange-200 -bottom-2 -rotate-1'></span>
          </h2>
          <div className='w-20 h-1 mx-auto mt-4 bg-orange-500'></div>
        </div>

        <SearchFilter />

        {isLoading && <LoadingSpinner size={48} />}

        <div className='flex flex-col flex-grow gap-y-6'>
          {recipes?.recipes?.pages.map(page => {
            return (
              <div
                key={`drink-${Date.now()}-${Math.floor(
                  Math.random() * 1000000
                )}`}
                className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              >
                {page?.data.map(drink => {
                  const drinkItem = {
                    id: drink.idDrink,
                    name: drink.strDrink,
                    image: drink.strDrinkThumb,
                    alcoholic: searchAlcoholic === 'Alcoholic',
                    category: searchCategory
                  }

                  return (
                    <div>
                      <DrinkCard
                        key={`drink-${Date.now()}-${Math.floor(
                          Math.random() * 1000000
                        )}`}
                        drink={drinkItem}
                        onClick={() => openModal(drinkItem)}
                      />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>

      {isModalOpen && selectedDrink && (
        <RecipeModal
          drink={selectedDrink}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}

      <div ref={ref} style={{ height: '50px' }} />
      {isFetchingNextPage && <LoadingSpinner />}
    </section>
  )
}
