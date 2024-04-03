import React from 'react'
import { Outlet } from 'react-router-dom'

const PaginaBase = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      
        <main style={{ flex: 1}}>
          <Outlet/>
        </main>
     
    </div>
  )
}

export default PaginaBase