import { createBrowserRouter } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
import { SingleProductPage } from '../pages/SingleProductPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { RootElement } from '../components/RootElement';

export const router = createBrowserRouter([
  {
    element: <RootElement />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/products',
        element: <ProductsPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/products/:productId',
        element: <SingleProductPage />,
      },
      {
        path: '/*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
