import Layout from '@/layout';
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Home = lazy(() => import('@/pages/Home'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
