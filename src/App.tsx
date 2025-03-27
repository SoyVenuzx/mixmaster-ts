import Catalog from './components/Catalog'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App () {
  return (
    <div className='min-h-screen flex-flex-col'>
      <Header />
      <Hero />
      <Catalog />
      <Footer />
    </div>
  )
}

export default App
