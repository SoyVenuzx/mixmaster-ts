import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GlassWater, Home, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <main className='min-h-screen flex flex-col'>
      <Header />

      <div className='flex-grow flex items-center justify-center px-4'>
        <div className='max-w-md w-full text-center'>
          <div className='mb-6 relative'>
            <div className='w-32 h-32 mx-auto relative'>
              <div className='absolute inset-0 bg-orange-500 rounded-full opacity-10 animate-pulse'></div>
              <div className='relative z-10 flex items-center justify-center h-full'>
                <GlassWater className='h-16 w-16 text-orange-500' />
                <div className='absolute -top-4 -right-4 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold'>
                  404
                </div>
              </div>
            </div>
          </div>

          <h1 className='text-4xl font-bold mb-2'>
            ¡Ups! Bebida no encontrada
          </h1>

          <p className='text-gray-600 mb-8'>
            Parece que esta receta se ha derramado o nunca existió. ¿Quizás
            podemos ofrecerte otra bebida?
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              to='/'
              className='flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md'
            >
              <Home className='h-5 w-5' />
              Volver al inicio
            </Link>

            <Link
              to='/#catalog'
              className='flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors shadow-sm'
            >
              <Search className='h-5 w-5' />
              Explorar catálogo
            </Link>
          </div>

          <div className='mt-12 p-4 bg-orange-50 rounded-lg border border-orange-100'>
            <p className='text-orange-800 text-sm'>
              <span className='font-semibold'>Consejo del bartender:</span> A
              veces las mejores bebidas son las que improvisamos. ¡Prueba algo
              nuevo!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
