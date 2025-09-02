import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homes from '../pages/Homes'
import AboutUs from '../pages/AboutUs'
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router