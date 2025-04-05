import AIRecipeGenerator from '../components/ai/AIRecipeGenerator'

export const GenerateWithAI = () => {
  return (
    <main className='flex flex-col min-h-screen'>
      <div className='flex-grow pt-16'>
        <div className='bg-gradient-to-b from-orange-50 to-[hsl(30,20%,98%)] py-12'>
          <div className='container px-4 mx-auto'>
            <h1 className='mb-2 text-4xl font-bold text-center'>
              Generar Receta con IA
            </h1>
            <p className='max-w-2xl mx-auto mb-8 text-center text-gray-600'>
              Describe la bebida que te gustaría crear y nuestra inteligencia
              artificial generará una receta personalizada para ti.
            </p>
          </div>
        </div>

        <AIRecipeGenerator />
      </div>
    </main>
  )
}
