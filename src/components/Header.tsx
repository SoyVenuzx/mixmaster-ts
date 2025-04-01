import { CoffeeIcon as Cocktail, Heart } from 'lucide-react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function Header () {
  const navigate = useNavigate()

  const handleCatalogClick = () => {
    // Navegar a inicio
    navigate('/')

    // Usar setTimeout para asegurar que el componente se renderice
    setTimeout(() => {
      const catalogSection = document.getElementById('catalog')
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 0)
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-white shadow-sm'>
      <div className='container px-4 mx-auto'>
        <div className='flex items-center justify-between h-16'>
          <Link to='/' className='text-xl font-bold text-orange-500'>
            <div className='flex justify-between w-10'>
              <img src='/src/assets/logo.svg' alt='Logo' />
              <span>MixMaster</span>
            </div>
          </Link>
          <nav className='flex items-center space-x-6'>
            <button
              onClick={handleCatalogClick}
              className='flex items-center gap-2 text-gray-800 transition-colors cursor-pointer hover:text-orange-500'
            >
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  isActive
                    ? 'border-2 border-orange-500 py-2 px-3 rounded-full'
                    : ''
                }
              >
                <div className='flex items-center gap-2 text-gray-800 transition-colors hover:text-orange-500'>
                  <Cocktail className='w-5 h-5 text-orange-500' />
                  <span>Catálogo</span>
                </div>
              </NavLink>
            </button>
            <NavLink
              to='/favorites'
              className={({ isActive }) =>
                isActive
                  ? 'border-2 border-orange-500 py-2 px-3 rounded-full'
                  : ''
              }
            >
              <div className='flex items-center gap-2 text-gray-800 transition-colors hover:text-orange-500'>
                <Heart className='w-5 h-5 text-orange-500' />
                <span>Favoritos</span>
              </div>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
