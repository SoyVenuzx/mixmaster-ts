export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-orange-500">MixMaster</span>
            <p className="text-sm text-gray-500 mt-1">Tu guía de recetas de bebidas</p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
              Términos
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
              Contacto
            </a>
          </div>

          <div className="mt-4 md:mt-0 text-sm text-gray-400">
            &copy; {currentYear} MixMaster. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}

