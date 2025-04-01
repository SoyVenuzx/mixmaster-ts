import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useCategory } from '@/hooks/responses/useCategory'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

export const PageLayout = () => {
  const {} = useCategory()

  return (
    <div className='flex flex-col min-h-screen'>
      <Toaster position='top-right' reverseOrder={false} />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
