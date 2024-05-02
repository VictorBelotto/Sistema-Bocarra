import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import PaginaBase from './pages/PaginaBase'
import Testes from './pages/Testes/Testes'
import Impressao from './pages/Impressao/Impressao'
import { PopupProvider } from './context/PopupContext'
import { OrcamentoStorage } from './scripts/OrcamentoContext'
import { DadosInseridosStorage } from './scripts/DadosInseridosContext'

const AppRoutes = () => {
  return (
    <PopupProvider>
      <DadosInseridosStorage>
        <OrcamentoStorage>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<PaginaBase/>}>
              <Route index element={<Home/>} />
              <Route path='/Testes' element={<Testes/>} />
              <Route path='/Impressao' element={<Impressao/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </OrcamentoStorage>
      </DadosInseridosStorage>
    </PopupProvider>
  )
}

export default AppRoutes