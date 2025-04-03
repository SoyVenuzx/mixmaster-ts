export default function Hero () {
  return (
    <section className='pt-16 bg-gradient-to-b from-orange-50 to-[hsl(30,20%,98%)]'>
      <div className='container px-4 py-20 mx-auto'>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='mb-10 md:w-1/2 md:mb-0'>
            <h1 className='mb-4 text-5xl font-bold leading-tight text-gray-900 md:text-6xl'>
              Descubre el arte de la{' '}
              <span className='text-orange-500'>mixología</span>
            </h1>
            <p className='mb-8 text-xl text-gray-600'>
              Explora nuestra colección de recetas de bebidas y conviértete en
              un bartender experto desde la comodidad de tu hogar.
            </p>
            <button
              onClick={() => {
                const catalogSection = document.getElementById('catalog')
                if (catalogSection) {
                  catalogSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className='px-8 py-3 text-white transition-colors bg-orange-500 rounded-lg shadow-md hover:bg-orange-600'
            >
              Ver Recetas
            </button>
          </div>
          <div className='flex justify-center md:w-1/2'>
            <div className='relative w-80 h-80'>
              <div className='absolute inset-0 overflow-hidden bg-orange-500 rounded-full opacity-100'>
                <img
                  // src='https://www.hotelviking.com/content/uploads/2023/03/Gin-201.jpg'
                  src='/src/assets/bg.jpg'
                  alt='Cocktail illustration'
                  className='relative z-10 h-full'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
