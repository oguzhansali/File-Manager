import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FolderView from './pages/FolderView.jsx'
import  {ModalProvider}  from './context/modal-context/modal-context.jsx'



const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ModalProvider> 
        <Routes>
          <Route path='/' element={<FolderView />}/>
          <Route path='folder/:id' element={<FolderView />}/>
        </Routes>
      </ModalProvider>
    </BrowserRouter>   
  </QueryClientProvider>
  
)
