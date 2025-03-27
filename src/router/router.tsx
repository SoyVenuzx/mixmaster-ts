import Catalog from '@/components/Catalog'
import FavoritesList from '@/components/Favorites'
import Hero from '@/components/Hero'
import { NotFoundPage } from '@/components/NotFoundPage'
import { PageLayout } from '@/layout/PageLayout'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: [<Hero />, <Catalog />]
      },
      {
        path: 'favorites',
        element: <FavoritesList />
      }
    ]
  }
])
