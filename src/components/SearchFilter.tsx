import { useSearchFilter } from '@/hooks/components/useSearchFilter'
import { useAppStore } from '@/hooks/useAppStore'
import { ChevronDown, Search } from 'lucide-react'

export default function SearchFilter () {
  const { alcoholic, categories, drinkSearched, category } = useAppStore()
  const {
    handleChangeAlcoholic,
    handleChangeCategory,
    handleChangeDescription,
    handleSubmit,
    canSubmit
  } = useSearchFilter()

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-10 p-6 bg-inherit shadow-sm rounded-lg  border border-gray-100'>
        <div className='grid gap-6 md:grid-cols-3'>
          {/* Search by name/description */}
          <div className='space-y-2'>
            <label
              htmlFor='ingredient'
              className='flex items-center mb-2 text-sm font-bold text-neutral-700 dark:text-neutral-300'
            >
              Descripción
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Search className='h-5 w-5 text-gray-400' />
              </div>
              <input
                type='text'
                id='search'
                value={drinkSearched}
                onChange={handleChangeDescription}
                className='appearance-none items-center block w-full pl-10 p-3  rounded-md  focus:border-none sm:text-sm border border-neutral-200 darl:border-neutral-700 text-neutral-700 dark:text-white'
                placeholder='Ej: Margarita, Mojito, etc.'
              />
            </div>
          </div>

          <div className='space-y-2'>
            <label
              htmlFor='category'
              className='flex items-center mb-2 text-sm font-bold text-neutral-700 dark:text-neutral-300'
            >
              Categoría
            </label>
            <div className='relative'>
              <select
                id='currency'
                value={category}
                onChange={handleChangeCategory}
                className='bg-white w-full p-3 text-sm border rounded-lg appearance-none dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white'
              >
                <option value='' disabled>
                  Seleccione una opción
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category.strCategory}>
                    {category.strCategory}
                  </option>
                ))}
              </select>
              <ChevronDown className='absolute w-4 h-4 -translate-y-1/2 right-4 top-1/2 text-neutral-500 dark:text-neutral-400' />
            </div>
          </div>

          <div className='space-y-2'>
            <label
              htmlFor='category'
              className='flex items-center mb-2 text-sm font-bold text-neutral-700 dark:text-neutral-300'
            >
              Alcohol
            </label>
            <div className='relative'>
              <select
                id='currency'
                value={alcoholic}
                onChange={handleChangeAlcoholic}
                className='bg-white w-full p-3 text-sm border rounded-lg appearance-none dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white'
              >
                <option value='' disabled>
                  Seleccione una opción
                </option>

                <option value='Alcoholic'>Alcohol</option>

                <option value='Non_Alcoholic'>No Alcohol</option>
              </select>
              <ChevronDown className='absolute w-4 h-4 -translate-y-1/2 right-4 top-1/2 text-neutral-500 dark:text-neutral-400' />
            </div>
          </div>
        </div>

        <div className='mt-6 flex justify-end'>
          <button
            disabled={!canSubmit()}
            type='submit'
            className='disabled:opacity-[0.67] inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
          >
            Aplicar filtros
          </button>
        </div>
      </div>
    </form>
  )
}
