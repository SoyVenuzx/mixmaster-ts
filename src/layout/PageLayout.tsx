import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useCategory } from '@/hooks/responses/useCategory'
import { Outlet } from 'react-router-dom'

export const PageLayout = () => {
  const {} = useCategory()

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
