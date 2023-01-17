import React from 'react';
import ReactDOM from 'react-dom/client';
import {router} from './Routes/Router'
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
);


