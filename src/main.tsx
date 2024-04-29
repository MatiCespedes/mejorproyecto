import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute.tsx';
import Internship_registration from './routes/InternshipRegistration.tsx';
import SystemAdministration from './routes/SystemAdministration.tsx';
import ProjectRegistration from './routes/ProjectRegistration.tsx';
import { AuthProvider } from './auth/AuthProvider.tsx';


const router= createBrowserRouter([
  {
  path: '/',
  element: <Login />,
  },
  // Paginas para verificar si estan importadas bien
  {
    path: '/incripcion',
    element: <Internship_registration />,
  },
  {
    path: '/adminsystem',
    element: <SystemAdministration />,
  },
  {
    path: '/proyectregis',
    element: <ProjectRegistration />,
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
