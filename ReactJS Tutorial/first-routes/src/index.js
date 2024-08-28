import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Err404 from './pages/Err404';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'about-us',
      element:<About/>
    },
    {
      path:'blog',
      element:<Blog/>
    },
    {
      path:'blog/:id',
      element:<BlogDetails/>
    },
    {
      path:'*',
      element:<Err404/>
    }
    
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
