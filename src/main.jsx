import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FolderView from './pages/FolderView.jsx'



const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FolderView />}/>
        <Route path='folder/:id' element={<FolderView />}/>
      </Routes>
    </BrowserRouter>
    <App />   
  </QueryClientProvider>
  
)
