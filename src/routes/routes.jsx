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
import CheckoutForm from '@/features/payment/components/CheckoutForm';
import Return from '@/features/payment/components/Return';
import MyProfilePage from '@/pages/UserPage/MyProfilePage';
import GameSearchPage from '@/pages/StorePage/GameSearchPage';
import ForgotPasswordPage from '@/pages/AuthPage/ForgotPasswordPage';
import CommunityPage from '@/pages/CommunityPage/CommunityPage';
import ResetPasswordPage from '@/pages/AuthPage/ResetPasswordPage';

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
            <MyProfilePage />
          </ProtectedRoute>
        ),
      }, //* for testing ui UserProfile added by POOM
      {
        path: '/user/:userId',
        element: <UserProfilePage />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPasswordPage />,
      },
      {
        path: '/reset-password/:resetPasswordToken',
        element: <ResetPasswordPage />,
      },
      { path: '/game/:gameId', element: <GamePage /> },
      {
        path: '/cart',
        element: (
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/checkout',
        element: <CheckoutForm />,
      },
      {
        path: '/checkout-return',
        element: <Return />,
      },
      { path: '/store', element: <GameStorePage /> },
      { path: '/search', element: <GameSearchPage /> },
      { path: '/community', element: <CommunityPage /> },
      //FOR DEVELOPMENT
      { path: '/dev', element: <DevPage /> },
    ],
  },
  { path: '/register', element: <RegisterPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
