import { RouterProvider } from 'react-router-dom';
import {
  createBrowserRouter,
  // Navigate,
  // RouterProvider,
} from 'react-router-dom';

//---------------------------------------------- Local Imports
import HomePage from '@/pages/MainPage/HomePage';
import GamePage from '@/pages/StorePage/GamePage';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/game/:gameId', element: <GamePage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
