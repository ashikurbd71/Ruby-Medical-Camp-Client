import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider,} from "react-router-dom";
import router from './Route/Route.jsx';
import AuthProvider from './Provider/Authprovider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router}>
        
    </RouterProvider>
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
