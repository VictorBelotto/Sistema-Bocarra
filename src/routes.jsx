import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import PaginaBase from './pages/PaginaBase'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PaginaBase/>}>
        <Route index element={<Home/>} />
        
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes