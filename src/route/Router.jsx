import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homes from '../Pages/Homes'
import AboutUS from '../Pages/AboutUs'



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<AboutUS />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router