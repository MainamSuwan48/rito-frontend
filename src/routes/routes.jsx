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

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/game/:gameId', element: <GamePage /> },
  //FOR DEVELOPMENT
  { path: '/dev', element: <DevPage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
