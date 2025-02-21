import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);


