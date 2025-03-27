export default function Hero () {
  return (
    <section className='pt-16 bg-gradient-to-b from-orange-50 to-[hsl(30,20%,98%)]'>
      <div className='container mx-auto px-4 py-20'>
        <div className='flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2 mb-10 md:mb-0'>
            <h1 className='text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4'>
              Descubre el arte de la{' '}
              <span className='text-orange-500'>mixología</span>
            </h1>
            <p className='text-xl text-gray-600 mb-8'>
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
              className='px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md'
            >
              Ver Recetas
            </button>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <div className='relative w-80 h-80'>
              <div className='overflow-hidden absolute inset-0 bg-orange-500 rounded-full opacity-100'>
                <img
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
