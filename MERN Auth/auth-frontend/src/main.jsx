import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
    [
        {
            path:'/',
            element:<App/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/dashboard',
          element:<Dashboard/>
        }
    ]
)

root.render(
    <React.StrictMode>
      <RouterProvider router={allRoutes} />
    </React.StrictMode>
  );
