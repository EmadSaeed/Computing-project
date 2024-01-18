import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './components/pages/HomePage';
import ProductPage from './components/pages/ProductPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/products/:id' element={<ProductPage />} />
    </Route>
  ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);