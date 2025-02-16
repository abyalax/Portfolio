import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToasterProvider } from './context/ToasterContext';
import { createRoot } from 'react-dom/client'
import Blog from './pages/blogs/blogs';
import App from './App';
import 'react-quill/dist/quill.snow.css';
import { ModalProvider } from './context/ModalContext';
import Projects from './pages/projects/projects';
import Project from './pages/projects/project';

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
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/projects/:id',
    element: <Project />
  },
]

const router = createBrowserRouter(routes);
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <ToasterProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ToasterProvider>
  );
} else {
  console.error("Failed to find the root element");
}
