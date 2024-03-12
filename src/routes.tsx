import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './components/pages/_layouts/app'
import { AuthLayout } from './components/pages/_layouts/auth'
import { Dashboard } from './components/pages/app/dashboard/dashboard'
import { Orders } from './components/pages/app/orders/orders'
import { SignIn } from './components/pages/auth/sign-in'
import { SignUp } from './components/pages/auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/orders',
        element: <Orders />,
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
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
])
