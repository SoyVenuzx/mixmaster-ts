import Catalog from '@/views/Catalog'
import FavoritesList from '@/views/Favorites'
import { GenerateWithAI } from '@/views/GenerateWithAI'
import Hero from '@/components/catalog/Hero'
import { NotFoundPage } from '@/components/utils/NotFoundPage'
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
      },
      {
        path: 'generate',
        element: <GenerateWithAI />
      }
    ]
  }
])
