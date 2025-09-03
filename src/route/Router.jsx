import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homes from '../pages/Homes'


function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homes />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default Router