import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import PaginaBase from './pages/PaginaBase'
import Testes from './pages/Testes/Testes'
import Impressao from './pages/Impressao/Impressao'
import { PopupProvider } from './context/PopupContext'
import { OrcamentoStorage } from './scripts/OrcamentoContext'
import { DadosInseridosStorage } from './scripts/DadosInseridosContext'
import { DadosMetragemProvider } from './context/DadosMetragemContext'
import { OrcamentosEstruturasStorage } from './context/OrcamentoEstruturasContext'


const AppRoutes = () => {
  return (
    <DadosMetragemProvider>
      <PopupProvider>
        <DadosInseridosStorage>
          <OrcamentoStorage>
          
                <OrcamentosEstruturasStorage>
              
                  <BrowserRouter>
                    <Routes>
                      <Route path='/' element={<PaginaBase/>}>
                        <Route index element={<Home/>} />
                        <Route path='/Testes' element={<Testes/>} />
                        <Route path='/Impressao' element={<Impressao/>} />
                      </Route>
                    </Routes>
                  </BrowserRouter>
               
                </OrcamentosEstruturasStorage>
             
          </OrcamentoStorage>
        </DadosInseridosStorage>
      </PopupProvider>
    </DadosMetragemProvider>
  )
}

export default AppRoutes