import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import Blog from './components/pages/Blog';
import Portfolio from './components/pages/Portfolios';

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
    element: <Portfolio />
  },
]

const router = createBrowserRouter(routes);
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}
