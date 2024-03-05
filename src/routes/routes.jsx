import { RouterProvider } from 'react-router-dom';
import {
  createBrowserRouter,
  // Navigate,
  // RouterProvider,
} from 'react-router-dom';

//---------------------------------------------- Local Imports
import HomePage from '@/pages/MainPage/HomePage';
import LoginPage from '@/pages/AuthPage/LoginPage';
import RegisterPage from '@/pages/AuthPage/RegisterPage';
import DevPage from '@/pages/DevPage';
import GamePage from '@/pages/StorePage/GamePage';
import UserProfilePage from '@/pages/UserPage/UserProfilePage';
import Container from '@/layouts/Container';
import ProtectedRoute from './components/ProtectedRoute';
import CartPage from '@/pages/CartPage/CartPage';
import GameStorePage from '@/pages/StorePage/GameStorePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Container />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: '/user',
        element: (
          <ProtectedRoute>
            <UserProfilePage />
          </ProtectedRoute>
        ),
      }, //* for testing ui UserProfile added by POOM
      { path: '/game/:gameId', element: <GamePage /> },
      {
        path: '/cart',
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
      },
      { path: '/store', element: <GameStorePage /> },
      //FOR DEVELOPMENT
      { path: '/dev', element: <DevPage /> },
    ],
  },
  { path: '/register', element: <RegisterPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
