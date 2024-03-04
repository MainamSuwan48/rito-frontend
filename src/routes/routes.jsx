import { RouterProvider } from 'react-router-dom';
import {
  createBrowserRouter,
  // Navigate,
  // RouterProvider,
} from 'react-router-dom';

//---------------------------------------------- Local Imports
import HomePage from '@/pages/MainPage/HomePage';
import GamePage from '@/pages/StorePage/GamePage';
import LoginPage from '@/pages/AuthPage/LoginPage';
import RegisterPage from '@/pages/AuthPage/RegisterPage';
import UserProfilePage from '@/pages/UserPage/UserProfilePage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/user', element: <UserProfilePage /> }, //* for testing ui UserProfile added by POOM
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/game/:gameId', element: <GamePage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
