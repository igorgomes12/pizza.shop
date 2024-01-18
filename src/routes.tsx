import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './components/pages/_layouts/app'
import { AuthLayout } from './components/pages/_layouts/auth'
import { Dashboard } from './components/pages/app/dashboard'
import { SignIn } from './components/pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
])
