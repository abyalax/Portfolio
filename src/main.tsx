import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import Portfolios from './pages/Portfolios';
import { ToasterProvider } from './context/ToasterContext';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/portfolio',
    element: <Portfolios />
  },
  {
    path: '/portfolio/:id',
    element: <Portfolio />
  },
]

const router = createBrowserRouter(routes);
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ToasterProvider>
        <RouterProvider router={router} />
      </ToasterProvider>
    </StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
