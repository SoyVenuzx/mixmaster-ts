import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { useCategory } from '@/hooks/responses/useCategory'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

export const PageLayout = () => {
  const {} = useCategory()

  return (
    <div className='flex flex-col min-h-screen'>
      <Toaster
        position='top-right'
        reverseOrder={false}
        toastOptions={{
          style: {
            marginTop: '3.5rem',
            fontSize: '17px',
            background: 'white',
            color: '#f97316',
            fontWeight: '500'
          }
        }}
      />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
