import type React from 'react'

import { useState } from 'react'
import {
  Sparkles,
  Loader2,
  X,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Bookmark
} from 'lucide-react'
import { useAppStore } from '@/hooks/useAppStore'
import toast from 'react-hot-toast'
import { isObjectEmpty } from '@/lib/utils'
// import {MarkdownRender } from '../utils/Markdown'

export default function AIRecipeGenerator () {
  const [isGenerating, setIsGenerating] = useState(false)
  // const [generatedRecipe, setGeneratedRecipe] =
  //   useState<RecipeDetailsMapType | null>(null)

  const {
    generatedRecipe,
    generateRecipe,
    canDeleteFavorite,
    handleClickFavorite
  } = useAppStore()

  // Example prompts to help users get started
  const examplePrompts = [
    'Una bebida refrescante con sabor a frutas tropicales',
    'Un cóctel elegante para una cena romántica',
    'Una bebida sin alcohol para un día caluroso de verano',
    'Un cóctel clásico con un toque moderno'
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const prompt = form.get('prompt') as string

    if (!prompt.trim()) {
      return toast(t => (
        <span
          onClick={() => toast.dismiss(t.id)}
          className='flex items-center gap-2 py-1 cursor-pointer'
        >
          <span className='text-[15px] border-r text-black'>
            Por favor, ingresa una descripción para generar la receta.
          </span>
          <span>
            <button className='flex items-center justify-center w-full mr-1 text-center text-red-500'>
              <X size={25} />
            </button>
          </span>
        </span>
      ))
    }

    setIsGenerating(true)
    await generateRecipe(prompt)

    // setGeneratedRecipe(mockRecipe)
    setIsGenerating(false)
  }

  if (!generatedRecipe) return

  const handleButtonAction = async () => {
    const action = canDeleteFavorite(generatedRecipe)

    const promise = new Promise(resolve => {
      setTimeout(() => {
        handleClickFavorite(generatedRecipe)
        return resolve(true)
      }, 1200)
    })

    toast.promise(
      promise,
      {
        success: `Receta ${action ? 'removida' : 'añadida'}`,
        loading: 'Cargando...',
        error: 'Error'
      },
      {
        style: {
          padding: '.8rem',
          border: '1px solid white'
        },
        success: {
          icon: !action ? '🔥' : '💥',
          duration: 1500
        }
      }
    )
  }

  return (
    <div className='container px-4 py-12 mx-auto'>
      <div className='max-w-3xl mx-auto'>
        <form onSubmit={handleSubmit} className='mb-12'>
          <div className='overflow-hidden bg-white border border-gray-100 rounded-lg shadow-md'>
            <div className='p-6'>
              <label
                htmlFor='prompt'
                className='block mb-2 text-lg font-medium text-gray-700'
              >
                Describe tu bebida ideal
              </label>
              <textarea
                id='prompt'
                name='prompt'
                rows={4}
                className='w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500'
                placeholder='Ej: Una bebida refrescante con sabor a frutas tropicales y un toque de menta...'
              />
            </div>

            <div className='px-6 py-4 bg-gray-50'>
              <div className='flex flex-wrap gap-2 mb-4'>
                <span className='text-sm text-gray-500'>Prueba con:</span>
                {examplePrompts.map((examplePrompt, index) => (
                  <button
                    key={index}
                    type='button'
                    className='px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200'
                  >
                    {examplePrompt}
                  </button>
                ))}
              </div>

              <div className='flex justify-end'>
                <button
                  type='submit'
                  disabled={isGenerating}
                  className='flex items-center gap-2 px-6 py-3 text-white transition-colors bg-orange-500 rounded-lg shadow-md hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className='w-5 h-5 animate-spin' />
                      Generando...
                    </>
                  ) : (
                    <>
                      <Sparkles className='w-5 h-5' />
                      Generar Receta
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* {aiRecipe && (
          <>
            <div className='w-full mb-10 border-b border-gray-300 shadow-orange-200'></div>
            <div className='p-5 py-10 overflow-hidden whitespace-pre-wrap bg-white border border-gray-100 rounded-lg shadow-md'>
              <MarkdownRender body={aiRecipe} />
            </div>
          </>
        )} */}
        {!isObjectEmpty(generatedRecipe) && (
          <div className='overflow-hidden bg-white border border-gray-100 rounded-lg shadow-md'>
            <div className='p-6'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-2xl font-bold text-gray-900'>
                  {generatedRecipe.name}
                </h2>
                <div className='flex items-center gap-2'>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      generatedRecipe.alcoholic
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {generatedRecipe.alcoholic ? 'Con alcohol' : 'Sin alcohol'}
                  </span>
                  <span className='px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full'>
                    {generatedRecipe.category}
                  </span>
                </div>
              </div>

              <div className='flex flex-col gap-6 md:flex-row'>
                <div className='md:w-1/3'>
                  <div className='overflow-hidden rounded-lg'>
                    <img
                      src={generatedRecipe.thumb || '/placeholder.svg'}
                      alt={generatedRecipe.name}
                      className='object-cover w-full h-auto'
                    />
                  </div>
                </div>

                <div className='md:w-2/3'>
                  <div className='mb-6'>
                    <h3 className='mb-2 text-lg font-semibold'>Ingredientes</h3>
                    <ul className='space-y-2'>
                      {generatedRecipe?.ingredients?.map(
                        (ingredient, index) => (
                          <li key={index} className='flex items-center'>
                            <span className='w-2 h-2 mr-2 bg-orange-500 rounded-full'></span>
                            <span>
                              {ingredient.measure} {ingredient.name}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className='mb-2 text-lg font-semibold'>
                      Instrucciones
                    </h3>
                    <p className='text-gray-700'>
                      {generatedRecipe.instructions}
                    </p>
                  </div>

                  <div className='mt-6'>
                    <button
                      className='flex items-center justify-center w-full gap-2 py-3 text-white transition-colors bg-orange-500 rounded-lg shadow-md hover:bg-orange-600'
                      onClick={handleButtonAction}
                    >
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
        )}
      </div>
    </div>
  )
}
