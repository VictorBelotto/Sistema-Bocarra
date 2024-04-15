import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import PaginaBase from './pages/PaginaBase'
import CalculadoraEstruturas from './components/CalculadoraEstruturas/CalculadoraEstruturas'
import Testes from './pages/Testes/Testes'
import Impressao from './pages/Impressao/Impressao'

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PaginaBase/>}>
        <Route index element={<Home/>} />
        <Route path='/CalculadoraEstruturas' element={<CalculadoraEstruturas/>} />
        <Route path='/Testes' element={<Testes/>} />
        <Route path='/Impressao' element={<Impressao/>} />
      
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes